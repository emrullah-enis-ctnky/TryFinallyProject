/**
 * Kodu çalıştıran katman ("kum havuzu").
 *
 * docker modu: her gönderim için ağı kapalı, belleği/süreç sayısı sınırlı, dosya sistemi
 *              salt okunur, yetkisiz kullanıcıyla çalışan tek kullanımlık bir konteyner açar.
 * local modu:  aynı komutları doğrudan bu bilgisayarda çalıştırır. Hiçbir izolasyon yoktur;
 *              sadece Docker'sız geliştirme/deneme içindir.
 */

import { execFile, spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import path from "node:path";
import type { JudgeLanguage } from "../../src/features/judge/types.ts";
import { LANGUAGES, MAX_PROGRAM_OUTPUT_BYTES, type SandboxMode } from "./config.ts";

/** Konteyner içindeki derleme betiklerinin "derleme hatası" çıkış kodu. */
const COMPILE_ERROR_EXIT_CODE = 101;
const CONTAINER_SRC = "/judge/src";

export interface SandboxRequest {
  mode: SandboxMode;
  language: JudgeLanguage;
  /** Üretilen dosyaların bulunduğu klasör (konteynere salt okunur bağlanır). */
  workDir: string;
  methodName: string;
  stdin: string;
  overallTimeoutMs: number;
  /** Program stdout'a her tam satır yazdığında çağrılır (watchdog için). */
  onStdoutLine: (line: string) => void;
}

export interface SandboxOutcome {
  exitCode: number | null;
  stdout: string;
  stderr: string;
  compileFailed: boolean;
  /** Biz durdurduysak nedeni: "timeout" (süre) veya "output" (çok fazla çıktı). */
  killedFor: "timeout" | "output" | null;
  /** Docker, belleği aştığı için konteyneri öldürdü mü? */
  oomKilled: boolean;
  /** Docker/derleyici bulunamadı gibi bizim taraftaki hatalar. */
  infraError: string | null;
}

export interface SandboxRun {
  kill(reason: "timeout" | "output"): void;
  done: Promise<SandboxOutcome>;
}

// ------------------------------------------------------------------------------
// Komutlar
// ------------------------------------------------------------------------------

/** Konteynerin içinde çalışacak komut. */
function containerCommand(language: JudgeLanguage, methodName: string): string[] {
  const memoryKb = LANGUAGES[language].memoryLimitMb * 1024;
  switch (language) {
    case "python":
      return ["python3", `${CONTAINER_SRC}/driver.py`, `${CONTAINER_SRC}/solution.py`, methodName];
    case "cpp":
      return [
        "sh",
        "-c",
        `g++ -std=c++17 -O2 -pipe -o /tmp/main ${CONTAINER_SRC}/main.cpp 2>/tmp/compile.txt ` +
          `|| { cat /tmp/compile.txt >&2; exit ${COMPILE_ERROR_EXIT_CODE}; }; ` +
          `ulimit -v ${memoryKb}; exec /tmp/main`,
      ];
    case "java":
      return [
        "sh",
        "-c",
        `mkdir -p /tmp/classes && javac -J-Xmx384m -J-XX:-UsePerfData -encoding UTF-8 -d /tmp/classes ` +
          `${CONTAINER_SRC}/Solution.java ${CONTAINER_SRC}/Main.java ${CONTAINER_SRC}/JudgeIO.java 2>/tmp/compile.txt ` +
          `|| { cat /tmp/compile.txt >&2; exit ${COMPILE_ERROR_EXIT_CODE}; }; ` +
          `exec java -Xmx${LANGUAGES.java.memoryLimitMb}m -Xss64m -XX:+UseSerialGC -XX:TieredStopAtLevel=1 ` +
          `-XX:-UsePerfData -Dfile.encoding=UTF-8 -Dstdout.encoding=UTF-8 -cp /tmp/classes Main`,
      ];
  }
}

function dockerArgs(language: JudgeLanguage, workDir: string, containerName: string, methodName: string): string[] {
  const config = LANGUAGES[language];
  return [
    "run",
    "-i", // testleri stdin'den vereceğiz
    "--name", containerName,
    "--pull", "never", // imaj yoksa kendi kendine indirmesin, hata versin
    "--network", "none", // internet yok
    "--memory", `${config.containerMemoryMb}m`,
    "--memory-swap", `${config.containerMemoryMb}m`, // swap da yok
    "--cpus", "1",
    "--pids-limit", String(config.pidsLimit), // fork bombasına karşı
    "--read-only", // dosya sistemine yazamaz...
    "--tmpfs", "/tmp:rw,exec,nosuid,size=64m", // ...sadece küçük bir /tmp'ye yazabilir
    "--cap-drop", "ALL",
    "--security-opt", "no-new-privileges",
    "--user", "65534:65534", // "nobody" kullanıcısı, root değil
    "--workdir", "/tmp",
    "-e", "HOME=/tmp",
    "-e", "PYTHONDONTWRITEBYTECODE=1",
    "-e", "PYTHONUTF8=1",
    "--mount", `type=bind,source=${workDir},target=${CONTAINER_SRC},readonly`,
    config.image,
    ...containerCommand(language, methodName),
  ];
}

interface LocalStep {
  command: string;
  args: string[];
}

/** local modu: [derleme adımı?, çalıştırma adımı] */
function localSteps(language: JudgeLanguage, workDir: string, methodName: string): { compile?: LocalStep; run: LocalStep } {
  const isWindows = process.platform === "win32";
  switch (language) {
    case "python":
      return {
        run: { command: process.env.JUDGE_PYTHON ?? (isWindows ? "python" : "python3"), args: ["driver.py", "solution.py", methodName] },
      };
    case "cpp": {
      const executable = isWindows ? "main.exe" : "main";
      return {
        // Eski MinGW'ler (ör. CodeBlocks'un 8.1'i) C++17'de bits/stdc++.h'i derleyemiyor; JUDGE_CPP_STD=c++14 ile aşılabilir.
        compile: { command: process.env.JUDGE_CXX ?? "g++", args: [`-std=${process.env.JUDGE_CPP_STD ?? "c++17"}`, "-O2", "-o", executable, "main.cpp"] },
        run: { command: path.join(workDir, executable), args: [] },
      };
    }
    case "java":
      return {
        compile: { command: "javac", args: ["-encoding", "UTF-8", "-d", "classes", "Solution.java", "Main.java", "JudgeIO.java"] },
        run: {
          command: "java",
          args: ["-Xss64m", "-Dfile.encoding=UTF-8", "-Dstdout.encoding=UTF-8", "-cp", "classes", "Main"],
        },
      };
  }
}

// ------------------------------------------------------------------------------
// Süreç çalıştırma
// ------------------------------------------------------------------------------

interface ProcessResult {
  exitCode: number | null;
  stdout: string;
  stderr: string;
  spawnError: string | null;
}

function runProcess(
  step: LocalStep,
  options: { cwd?: string; stdin?: string; onLine?: (line: string) => void; onTooMuchOutput?: () => void },
): { child: ReturnType<typeof spawn>; result: Promise<ProcessResult> } {
  const child = spawn(step.command, step.args, {
    cwd: options.cwd,
    env: { ...process.env, PYTHONUTF8: "1", PYTHONIOENCODING: "utf-8", PYTHONDONTWRITEBYTECODE: "1" },
    windowsHide: true,
  });

  const result = new Promise<ProcessResult>((resolve) => {
    const stdoutChunks: Buffer[] = [];
    const stderrChunks: Buffer[] = [];
    let stdoutBytes = 0;
    let pending = "";
    let spawnError: string | null = null;

    child.stdout?.on("data", (chunk: Buffer) => {
      stdoutBytes += chunk.length;
      if (stdoutBytes > MAX_PROGRAM_OUTPUT_BYTES) {
        options.onTooMuchOutput?.();
        return;
      }
      stdoutChunks.push(chunk);
      pending += chunk.toString("utf8");
      const lines = pending.split("\n");
      pending = lines.pop() ?? "";
      for (const line of lines) options.onLine?.(line);
    });
    child.stderr?.on("data", (chunk: Buffer) => {
      if (stderrChunks.reduce((sum, c) => sum + c.length, 0) < MAX_PROGRAM_OUTPUT_BYTES) stderrChunks.push(chunk);
    });
    child.on("error", (error) => {
      spawnError = error.message;
    });
    child.on("close", (code) => {
      if (pending) options.onLine?.(pending);
      resolve({
        exitCode: code,
        stdout: Buffer.concat(stdoutChunks).toString("utf8"),
        stderr: Buffer.concat(stderrChunks).toString("utf8"),
        spawnError,
      });
    });

    child.stdin?.on("error", () => {
      // Program stdin'i okumadan kapanırsa (ör. derleme hatası) yazma hatasını yok say.
    });
    if (options.stdin !== undefined) child.stdin?.end(options.stdin);
    else child.stdin?.end();
  });

  return { child, result };
}

function docker(args: string[]): Promise<string> {
  return new Promise((resolve) => {
    execFile("docker", args, { windowsHide: true }, (_error, stdout) => resolve(String(stdout ?? "").trim()));
  });
}

// ------------------------------------------------------------------------------
// Dışa açık fonksiyon
// ------------------------------------------------------------------------------

export function runInSandbox(request: SandboxRequest): SandboxRun {
  return request.mode === "docker" ? runInDocker(request) : runLocally(request);
}

function runInDocker(request: SandboxRequest): SandboxRun {
  const containerName = `tf-judge-${randomUUID().slice(0, 12)}`;
  let killedFor: SandboxOutcome["killedFor"] = null;

  const kill = (reason: "timeout" | "output") => {
    if (killedFor) return;
    killedFor = reason;
    void docker(["kill", containerName]);
  };

  const { result } = runProcess(
    { command: "docker", args: dockerArgs(request.language, request.workDir, containerName, request.methodName) },
    { stdin: request.stdin, onLine: request.onStdoutLine, onTooMuchOutput: () => kill("output") },
  );
  const timer = setTimeout(() => kill("timeout"), request.overallTimeoutMs);

  const done = (async (): Promise<SandboxOutcome> => {
    const processResult = await result;
    clearTimeout(timer);
    const oomKilled = (await docker(["inspect", "-f", "{{.State.OOMKilled}}", containerName])) === "true";
    await docker(["rm", "-f", containerName]);

    let infraError = processResult.spawnError
      ? `Docker çalıştırılamadı: ${processResult.spawnError}. Docker Desktop kurulu ve açık mı?`
      : null;
    // 125: docker'ın kendi hatası (imaj yok, daemon kapalı vb.)
    if (!infraError && processResult.exitCode === 125) {
      infraError = `Docker konteyneri başlatamadı: ${processResult.stderr.trim()}`;
      if (/No such image|not found|pull access denied/i.test(processResult.stderr)) {
        infraError += `\nİmajı indirmek için: docker pull ${LANGUAGES[request.language].image}`;
      }
    }

    const compileFailed = processResult.exitCode === COMPILE_ERROR_EXIT_CODE;
    return {
      exitCode: processResult.exitCode,
      stdout: processResult.stdout,
      stderr: compileFailed ? processResult.stderr.replaceAll(`${CONTAINER_SRC}/`, "") : processResult.stderr,
      compileFailed,
      killedFor,
      oomKilled,
      infraError,
    };
  })();

  return { kill, done };
}

function runLocally(request: SandboxRequest): SandboxRun {
  const steps = localSteps(request.language, request.workDir, request.methodName);
  let killedFor: SandboxOutcome["killedFor"] = null;
  let child: ReturnType<typeof spawn> | null = null;

  const kill = (reason: "timeout" | "output") => {
    if (killedFor) return;
    killedFor = reason;
    child?.kill("SIGKILL");
  };
  const timer = setTimeout(() => kill("timeout"), request.overallTimeoutMs);

  const done = (async (): Promise<SandboxOutcome> => {
    try {
      if (steps.compile) {
        const compile = runProcess(steps.compile, { cwd: request.workDir });
        child = compile.child;
        const compiled = await compile.result;
        if (compiled.spawnError) {
          return emptyOutcome({ infraError: `${steps.compile.command} bulunamadı: ${compiled.spawnError}` });
        }
        if (compiled.exitCode !== 0) {
          const output = (compiled.stderr || compiled.stdout).replaceAll(request.workDir + path.sep, "");
          return emptyOutcome({ compileFailed: true, stderr: output, exitCode: compiled.exitCode });
        }
      }
      if (killedFor) return emptyOutcome({ killedFor });

      const run = runProcess(steps.run, {
        cwd: request.workDir,
        stdin: request.stdin,
        onLine: request.onStdoutLine,
        onTooMuchOutput: () => kill("output"),
      });
      child = run.child;
      const finished = await run.result;
      return {
        exitCode: finished.exitCode,
        stdout: finished.stdout,
        stderr: finished.stderr,
        compileFailed: false,
        killedFor,
        oomKilled: false,
        infraError: finished.spawnError ? `${steps.run.command} çalıştırılamadı: ${finished.spawnError}` : null,
      };
    } finally {
      clearTimeout(timer);
    }
  })();

  return { kill, done };
}

function emptyOutcome(overrides: Partial<SandboxOutcome>): SandboxOutcome {
  return {
    exitCode: null,
    stdout: "",
    stderr: "",
    compileFailed: false,
    killedFor: null,
    oomKilled: false,
    infraError: null,
    ...overrides,
  };
}

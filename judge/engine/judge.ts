/**
 * Judge motorunun ana fonksiyonu: kodu alır, testleri çalıştırır, verdict üretir.
 *
 *   1. Başlangıç kodundan metot imzasını oku     (signature.ts)
 *   2. Kullanıcı kodu + driver dosyalarını üret  (codegen.ts)
 *   3. Geçici klasöre yaz, konteynerde çalıştır  (sandbox.ts)
 *   4. Driver'ın "@@JUDGE@@" satırlarını topla
 *   5. Her testi beklenen çıktıyla karşılaştır   (compare.ts) ve sonucu döndür
 */

import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import type { JudgeRequest, JudgeResult, JudgeTestCase, TestRunDetail, Verdict } from "../../src/features/judge/types.ts";
import {
  LANGUAGES,
  MAX_SHOWN_COMPILE_OUTPUT,
  MAX_SHOWN_ERROR,
  MAX_SHOWN_STDOUT,
  STARTUP_BUDGET_MS,
  WATCHDOG_GRACE_MS,
  sandboxModeFromEnv,
  type SandboxMode,
} from "./config.ts";
import { generateProgram } from "./codegen.ts";
import { valuesEqual } from "./compare.ts";
import { runInSandbox, type SandboxOutcome } from "./sandbox.ts";
import { parseSignature } from "./signature.ts";

const MARK = "@@JUDGE@@";

/** Driver'ların bastığı satırlar */
interface DriverEvent {
  event: "start" | "result" | "compile_error";
  id?: string;
  ok?: boolean;
  output?: unknown;
  error?: string;
  errorKind?: "memory" | "stack" | "exception";
  timeMs?: number;
  stdout?: string;
  message?: string;
}

export interface JudgeOptions {
  mode?: SandboxMode;
}

function truncate(text: string | undefined, limit: number): string | undefined {
  if (text === undefined) return undefined;
  return text.length > limit ? `${text.slice(0, limit)}\n... (${text.length - limit} karakter daha)` : text;
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function emptyDetail(test: JudgeTestCase): TestRunDetail {
  return { id: test.id, isHidden: test.isHidden, passed: false, verdict: null, timeMs: null };
}

function internalError(request: JudgeRequest, message: string): JudgeResult {
  return {
    verdict: "INTERNAL_ERROR",
    passedCount: 0,
    totalCount: request.tests.length,
    runtimeMs: null,
    tests: request.tests.map(emptyDetail),
    internalMessage: message,
  };
}

export async function judge(request: JudgeRequest, options: JudgeOptions = {}): Promise<JudgeResult> {
  const mode = options.mode ?? sandboxModeFromEnv();
  const config = LANGUAGES[request.language];
  if (!config) return internalError(request, `Desteklenmeyen dil: ${request.language}`);
  if (request.tests.length === 0) return internalError(request, "Bu soru için test bulunamadı.");

  // 1-2. İmza ve dosyalar
  let methodName: string;
  let files: Record<string, string>;
  try {
    const signature = parseSignature(request.language, request.starterCode);
    methodName = signature.name;
    files = generateProgram(request.language, request.code, signature).files;
  } catch (error) {
    return internalError(request, `Sorunun başlangıç kodu judge için uygun değil: ${errorMessage(error)}`);
  }

  // 3. Geçici klasör
  const workDir = await mkdtemp(path.join(process.env.JUDGE_WORK_DIR ?? os.tmpdir(), "tf-judge-"));
  try {
    for (const [name, content] of Object.entries(files)) {
      await writeFile(path.join(workDir, name), content, "utf8");
    }

    // Beklenen çıktılar konteynere gönderilmez; sadece id ve girdi.
    const stdin = JSON.stringify(request.tests.map((test) => ({ id: test.id, input: JSON.parse(test.input) })));

    // 4. Çalıştır ve olayları topla
    const results = new Map<string, DriverEvent>();
    const started = new Set<string>();
    let driverCompileError: string | undefined;
    let extraStdout = "";
    let watchdog: ReturnType<typeof setTimeout> | undefined;

    const run = runInSandbox({
      mode,
      language: request.language,
      workDir,
      methodName,
      stdin,
      overallTimeoutMs: config.compileBudgetMs + STARTUP_BUDGET_MS + request.tests.length * (config.timeLimitMs + WATCHDOG_GRACE_MS),
      onStdoutLine: (line) => {
        const index = line.indexOf(MARK);
        if (index < 0) {
          if (line.trim()) extraStdout += `${line}\n`;
          return;
        }
        if (index > 0) extraStdout += `${line.slice(0, index)}\n`;
        let event: DriverEvent;
        try {
          event = JSON.parse(line.slice(index + MARK.length)) as DriverEvent;
        } catch {
          return;
        }
        if (event.event === "start" && event.id) {
          // Watchdog: test süre sınırı + biraz pay içinde bitmezse konteyneri öldür (sonsuz döngü).
          started.add(event.id);
          clearTimeout(watchdog);
          watchdog = setTimeout(() => run.kill("timeout"), config.timeLimitMs + WATCHDOG_GRACE_MS);
        } else if (event.event === "result" && event.id) {
          clearTimeout(watchdog);
          results.set(event.id, event);
        } else if (event.event === "compile_error") {
          driverCompileError = event.message ?? "Derleme hatası";
        }
      },
    });

    const outcome = await run.done;
    clearTimeout(watchdog);

    // 5. Değerlendir
    if (outcome.infraError) return internalError(request, outcome.infraError);
    if (outcome.compileFailed || driverCompileError !== undefined) {
      return {
        verdict: "COMPILE_ERROR",
        passedCount: 0,
        totalCount: request.tests.length,
        runtimeMs: null,
        compileOutput: truncate(driverCompileError ?? outcome.stderr.trim(), MAX_SHOWN_COMPILE_OUTPUT),
        tests: request.tests.map(emptyDetail),
      };
    }
    return evaluate(request, results, started, outcome, config.timeLimitMs, extraStdout);
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }
}

/** Sonucu gelmeyen bir test için ne oldu? (süre, bellek, çökme) */
function crashVerdict(outcome: SandboxOutcome, timeLimitMs: number, anyTestStarted: boolean): { verdict: Verdict; message: string } {
  const stderrTail = outcome.stderr.trim().slice(-1500);
  const withStderr = (text: string) => (stderrTail ? `${text}\n\n${stderrTail}` : text);

  if (outcome.killedFor === "timeout") {
    return {
      verdict: "TIME_LIMIT",
      message: anyTestStarted
        ? `Süre sınırı aşıldı (${timeLimitMs} ms). Sonsuz döngü ya da çok yavaş bir algoritma olabilir.`
        : "Program başlatılamadan süre doldu (derleme ya da başlatma çok uzun sürdü).",
    };
  }
  if (outcome.killedFor === "output") {
    return { verdict: "RUNTIME_ERROR", message: "Program çok fazla çıktı üretti (2 MB sınırı). Döngü içinde print kalmış olabilir." };
  }
  if (outcome.oomKilled || outcome.exitCode === 137) {
    return { verdict: "MEMORY_LIMIT", message: "Bellek sınırı aşıldı." };
  }
  if (!anyTestStarted) {
    return { verdict: "INTERNAL_ERROR", message: withStderr(`Driver hiç test çalıştıramadı (çıkış kodu ${outcome.exitCode}).`) };
  }
  switch (outcome.exitCode) {
    case 139:
      return {
        verdict: "RUNTIME_ERROR",
        message: withStderr("Segmentation fault: Program izin verilmeyen bir bellek alanına erişti (ör. dizi sınırı dışı) ya da özyineleme çok derinleşti."),
      };
    case 136:
      return { verdict: "RUNTIME_ERROR", message: withStderr("Floating point exception: Sıfıra bölme olabilir.") };
    case 134:
      return { verdict: "RUNTIME_ERROR", message: withStderr("Program abort() ile sonlandı.") };
    default:
      return { verdict: "RUNTIME_ERROR", message: withStderr(`Program beklenmedik şekilde sonlandı (çıkış kodu ${outcome.exitCode}).`) };
  }
}

function evaluate(
  request: JudgeRequest,
  results: Map<string, DriverEvent>,
  started: Set<string>,
  outcome: SandboxOutcome,
  timeLimitMs: number,
  extraStdout: string,
): JudgeResult {
  const tests: TestRunDetail[] = [];
  let verdict: Verdict = "ACCEPTED";
  let failedTest: TestRunDetail | undefined;
  let passedCount = 0;
  let runtimeMs: number | null = null;

  for (const test of request.tests) {
    // LeetCode gibi: ilk başarısız testten sonrakiler değerlendirilmez.
    if (failedTest) {
      tests.push(emptyDetail(test));
      continue;
    }

    const event = results.get(test.id);
    const detail: TestRunDetail = {
      ...emptyDetail(test),
      input: test.input,
      expectedOutput: test.expectedOutput,
      timeMs: event?.timeMs !== undefined ? Math.round(event.timeMs) : null,
      stdout: truncate(event?.stdout || undefined, MAX_SHOWN_STDOUT),
    };

    let testVerdict: Verdict;
    if (!event) {
      const crash = crashVerdict(outcome, timeLimitMs, started.size > 0);
      testVerdict = crash.verdict;
      detail.error = truncate(crash.message, MAX_SHOWN_ERROR);
    } else if (!event.ok) {
      testVerdict = event.errorKind === "memory" ? "MEMORY_LIMIT" : "RUNTIME_ERROR";
      detail.error = truncate(event.error, MAX_SHOWN_ERROR);
    } else {
      detail.actualOutput = JSON.stringify(event.output ?? null);
      if ((event.timeMs ?? 0) > timeLimitMs) {
        testVerdict = "TIME_LIMIT";
        detail.error = `Süre sınırı aşıldı: ${Math.round(event.timeMs ?? 0)} ms (sınır ${timeLimitMs} ms).`;
      } else if (!valuesEqual(event.output, JSON.parse(test.expectedOutput))) {
        testVerdict = "WRONG_ANSWER";
      } else {
        testVerdict = "ACCEPTED";
      }
    }

    detail.verdict = testVerdict;
    detail.passed = testVerdict === "ACCEPTED";
    if (detail.passed) {
      passedCount += 1;
      runtimeMs = Math.max(runtimeMs ?? 0, detail.timeMs ?? 0);
    } else {
      verdict = testVerdict;
      failedTest = detail;
    }

    // Gizli testlerin içeriği sadece başarısız olan testte gösterilir.
    tests.push(test.isHidden && detail.passed ? { ...emptyDetail(test), passed: true, verdict: "ACCEPTED", timeMs: detail.timeMs } : detail);
  }

  return {
    verdict,
    passedCount,
    totalCount: request.tests.length,
    runtimeMs,
    failedTest,
    tests,
    extraStdout: truncate(extraStdout.trim() || undefined, MAX_SHOWN_STDOUT),
  };
}

/**
 * Judge ayarları: her dilin Docker imajı, süre ve bellek sınırları.
 *
 * Bu klasördeki dosyalar Next.js'ten bağımsız, düz Node.js ile de çalışır
 * (node judge/try.ts). Bu yüzden importlar göreli ve ".ts" uzantılı.
 */

import type { JudgeLanguage } from "../../src/features/judge/types.ts";

/** "docker": kod izole konteynerde çalışır (varsayılan). "local": doğrudan bu bilgisayarda, SADECE geliştirme için. */
export type SandboxMode = "docker" | "local";

export interface LanguageConfig {
  /** Konteyner imajı. İlk kullanımdan önce `docker pull` ile indirilmeli. */
  image: string;
  /** Tek bir testin süre sınırı (ms). */
  timeLimitMs: number;
  /** Konteynerin toplam bellek sınırı (MB). Derleyici de bu sınırın içinde çalışır. */
  containerMemoryMb: number;
  /** Kullanıcı kodunun kullanabileceği bellek (MB). */
  memoryLimitMb: number;
  /** Konteynerde aynı anda açılabilecek süreç/iş parçacığı sayısı (fork bombasına karşı). */
  pidsLimit: number;
  /** Derleme için ayrılan ek süre (ms). Python derlenmez. */
  compileBudgetMs: number;
}

export const LANGUAGES: Record<JudgeLanguage, LanguageConfig> = {
  cpp: {
    image: "gcc:14",
    timeLimitMs: 1000,
    containerMemoryMb: 512,
    memoryLimitMb: 256,
    pidsLimit: 64,
    compileBudgetMs: 20_000,
  },
  java: {
    image: "eclipse-temurin:21-jdk",
    timeLimitMs: 2000,
    containerMemoryMb: 768,
    memoryLimitMb: 256,
    pidsLimit: 256,
    compileBudgetMs: 20_000,
  },
  python: {
    image: "python:3.12-slim",
    timeLimitMs: 3000,
    containerMemoryMb: 256,
    memoryLimitMb: 256,
    pidsLimit: 64,
    compileBudgetMs: 0,
  },
};

/** Bir testin sonucu gelmezse, süre sınırının üstüne bu kadar daha beklenip konteyner öldürülür. */
export const WATCHDOG_GRACE_MS = 1500;
/** Konteynerin açılması için ayrılan süre. */
export const STARTUP_BUDGET_MS = 5000;
/** Programın stdout'u bu boyutu aşarsa durdurulur. */
export const MAX_PROGRAM_OUTPUT_BYTES = 2 * 1024 * 1024;
/** Kullanıcıya gösterilen metinlerin üst sınırları (karakter). */
export const MAX_SHOWN_STDOUT = 2000;
export const MAX_SHOWN_ERROR = 4000;
export const MAX_SHOWN_COMPILE_OUTPUT = 8000;

export function sandboxModeFromEnv(): SandboxMode {
  return process.env.JUDGE_SANDBOX === "local" ? "local" : "docker";
}

/**
 * ==============================================================================
 * TryFinally — Kod Koşturucu Tip Tanımları (Runner Types)
 * ==============================================================================
 * C++, Java ve Python kod koşturucusunun girdi ve çıktı tipleri.
 * ==============================================================================
 */

export type RunnerLanguage = "cpp" | "java" | "python";

export interface ExecutionOptions {
  language: RunnerLanguage;
  code: string;
  timeoutMs?: number; // Varsayılan 3000 ms (sonsuz döngü koruması)
  inputs?: unknown[];
}

export interface ExecutionResult {
  stdout: string[];
  stderr: string[];
  output: unknown;
  executionTimeMs: number;
  hasError: boolean;
  errorMessage?: string;
}

export type RunnerState = "idle" | "running" | "completed" | "error" | "timeout";

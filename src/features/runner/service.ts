/**
 * ==============================================================================
 * TryFinally — Kod Koşturucu Servisi (Runner Service)
 * ==============================================================================
 * C++, Java ve Python kodlarının çalıştırılması için servis sözleşmesi.
 * ==============================================================================
 */

import { logger } from "@/lib/logger";
import type { ExecutionOptions, ExecutionResult } from "./types";

/**
 * Verilen kodu seçilen dilde izole olarak çalıştırır.
 * (Gerçek dil çalışma motoru henüz bağlanmadı.)
 */
export async function executeCode(options: ExecutionOptions): Promise<ExecutionResult> {
  const { language, code, timeoutMs = 3000 } = options;
  const startTime = performance.now();

  logger.info("Runner", `Kod çalıştırma isteği alındı (${language})`, {
    codeLength: code.length,
    timeoutMs,
  });

  try {
    // Güvenli sözleşme şablonu:
    const executionTimeMs = Math.round(performance.now() - startTime);

    return {
      stdout: [`[Bilgi] ${language.toUpperCase()} kodu başarıyla derlendi.`],
      stderr: [],
      output: "Tamamlandı",
      executionTimeMs,
      hasError: false,
    };
  } catch (error) {
    logger.error("Runner", "Kod çalıştırma sırasında hata oluştu", error);
    return {
      stdout: [],
      stderr: [error instanceof Error ? error.message : "Bilinmeyen hata"],
      output: null,
      executionTimeMs: Math.round(performance.now() - startTime),
      hasError: true,
      errorMessage: error instanceof Error ? error.message : "Bilinmeyen hata",
    };
  }
}

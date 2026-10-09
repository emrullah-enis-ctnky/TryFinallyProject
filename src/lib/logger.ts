/**
 * ==============================================================================
 * TryFinally — Merkezi Loglama Servisi (Central Logger)
 * ==============================================================================
 * Bu servis, uygulama genelindeki tüm olayları, uyarıları ve hataları
 * standart bir formatta konsola ve gelecekteki log hedeflerine iletir.
 *
 * KULLANIM ÖRNEKLERİ:
 * logger.info("Runner", "Kod çalıştırma başlatıldı", { problemId: "add-two-numbers" });
 * logger.warn("Forum", "Kullanıcı taslağı kaydedilemedi, tekrar deneniyor");
 * logger.error("Storage", "Veritabanı bağlantı hatası", error);
 * logger.debug("AI", "Gemini API yanıtı alındı", responseData);
 * ==============================================================================
 */

export type LogLevel = "debug" | "info" | "warn" | "error";

interface LogPayload {
  level: LogLevel;
  module: string;
  message: string;
  data?: unknown;
  timestamp: string;
}

// Log seviyesi öncelik sıralaması
const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

// Sistemde tanımlı varsayılan log seviyesi
const currentEnvLevel = (process.env.NEXT_PUBLIC_LOG_LEVEL as LogLevel) || "debug";
const currentPriority = LOG_LEVEL_PRIORITY[currentEnvLevel] ?? 0;

/**
 * Belirtilen log seviyesinin mevcut ortamda yazdırılıp yazdırılmayacağını kontrol eder.
 */
function shouldLog(level: LogLevel): boolean {
  return LOG_LEVEL_PRIORITY[level] >= currentPriority;
}

/**
 * Log mesajını biçimlendirip konsola yazdırır.
 */
function logFormatted(payload: LogPayload): void {
  const { level, module, message, data, timestamp } = payload;
  const prefix = `[${timestamp}] [${level.toUpperCase()}] [${module}]: ${message}`;

  switch (level) {
    case "debug":
      if (data !== undefined) {
        console.debug(prefix, data);
      } else {
        console.debug(prefix);
      }
      break;
    case "info":
      if (data !== undefined) {
        console.info(prefix, data);
      } else {
        console.info(prefix);
      }
      break;
    case "warn":
      if (data !== undefined) {
        console.warn(prefix, data);
      } else {
        console.warn(prefix);
      }
      break;
    case "error":
      if (data !== undefined) {
        console.error(prefix, data);
      } else {
        console.error(prefix);
      }
      break;
  }
}

export const logger = {
  /**
   * Bilgilendirme ve genel akış logları.
   */
  info(module: string, message: string, data?: unknown): void {
    if (shouldLog("info")) {
      logFormatted({
        level: "info",
        module,
        message,
        data,
        timestamp: new Date().toISOString(),
      });
    }
  },

  /**
   * Olası sorunlar, beklenen durumdan sapmalar ve uyarılar.
   */
  warn(module: string, message: string, data?: unknown): void {
    if (shouldLog("warn")) {
      logFormatted({
        level: "warn",
        module,
        message,
        data,
        timestamp: new Date().toISOString(),
      });
    }
  },

  /**
   * Hatalar ve beklenmeyen istisnalar.
   */
  error(module: string, message: string, data?: unknown): void {
    if (shouldLog("error")) {
      logFormatted({
        level: "error",
        module,
        message,
        data,
        timestamp: new Date().toISOString(),
      });
    }
  },

  /**
   * Geliştirme aşamasında derinlemesine inceleme için detaylı loglar.
   */
  debug(module: string, message: string, data?: unknown): void {
    if (shouldLog("debug")) {
      logFormatted({
        level: "debug",
        module,
        message,
        data,
        timestamp: new Date().toISOString(),
      });
    }
  },
};

/**
 * ==============================================================================
 * TryFinally — Google Gemini REST İstemcisi (Gemini Client)
 * ==============================================================================
 * Gemini API'ye ek paket kurmadan, yerel `fetch` ile bağlanır
 * (REQUIREMENTS.md → "Minimalizm ve Hafiflik" kuralı).
 *
 * ⚠️ SADECE SUNUCUDA ÇALIŞIR. API anahtarı istemciye asla gönderilmez;
 * tarayıcı tarafı bu dosyayı değil `client.ts` üzerinden `/api/ai` rotasını kullanır.
 * ==============================================================================
 */

import { logger } from "@/lib/logger";

// Test/proxy için GEMINI_API_BASE_URL ile değiştirilebilir
const GEMINI_BASE_URL = process.env.GEMINI_API_BASE_URL || "https://generativelanguage.googleapis.com/v1beta";
const DEFAULT_MODEL = "gemini-3.8-flash";
const DEFAULT_TIMEOUT_MS = 20_000;
const PLACEHOLDER_KEY = "buraya_gemini_api_anahtarinizi_yazin";
/** Geçici hatalarda kaç kez daha denenecek (GEMINI_MAX_RETRIES ile değiştirilebilir). */
const DEFAULT_MAX_RETRIES = 2;
const RETRY_DELAYS_MS = [1_000, 2_000];
/** 429: hız sınırı, 500/502/503/504: Google tarafında geçici sorun (ör. model aşırı yüklü). */
const RETRYABLE_STATUSES = new Set([429, 500, 502, 503, 504]);

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface GeminiMessage {
  role: "user" | "model";
  text: string;
}

export interface GeminiRequestOptions {
  systemInstruction: string;
  messages: GeminiMessage[];
  /** Verilirse model yanıtı bu JSON şemasına uygun döndürmeye zorlanır. */
  responseSchema?: Record<string, unknown>;
  temperature?: number;
  maxOutputTokens?: number;
}

export class GeminiError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = "GeminiError";
  }
}

export function getGeminiModel(): string {
  return process.env.GEMINI_MODEL || DEFAULT_MODEL;
}

/** Geçerli bir API anahtarı tanımlı mı? Değilse servis şablon yanıtlara düşer. */
export function isGeminiConfigured(): boolean {
  const key = process.env.GEMINI_API_KEY;
  return Boolean(key && key !== PLACEHOLDER_KEY);
}

interface GeminiApiResponse {
  candidates?: {
    content?: { parts?: { text?: string }[] };
    finishReason?: string;
  }[];
  promptFeedback?: { blockReason?: string };
}

/**
 * Gemini'ye istek atar ve modelin ürettiği metni döndürür.
 * Geçici hatalarda (429/5xx, ağ kopması) otomatik olarak tekrar dener.
 * Tüm denemeler başarısız olursa veya içerik engellenir/boş dönerse `GeminiError` fırlatır.
 */
export async function callGemini(options: GeminiRequestOptions): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!isGeminiConfigured() || !apiKey) {
    throw new GeminiError("GEMINI_API_KEY tanımlı değil");
  }

  const model = getGeminiModel();
  const body = {
    systemInstruction: { parts: [{ text: options.systemInstruction }] },
    contents: options.messages.map((message) => ({
      role: message.role,
      parts: [{ text: message.text }],
    })),
    generationConfig: {
      temperature: options.temperature ?? 0.4,
      maxOutputTokens: options.maxOutputTokens ?? 1024,
      ...(options.responseSchema
        ? { responseMimeType: "application/json", responseSchema: options.responseSchema }
        : {}),
    },
  };

  const startTime = performance.now();
  const retriesFromEnv = Number(process.env.GEMINI_MAX_RETRIES);
  const maxAttempts = 1 + (Number.isInteger(retriesFromEnv) && retriesFromEnv >= 0 ? retriesFromEnv : DEFAULT_MAX_RETRIES);
  let response: Response | undefined;

  // Geçici hatalarda (aşırı yük, hız sınırı, ağ kopması) kısa bir beklemeyle tekrar denenir.
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const isLastAttempt = attempt === maxAttempts;
    try {
      response = await fetch(`${GEMINI_BASE_URL}/models/${encodeURIComponent(model)}:generateContent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(Number(process.env.GEMINI_TIMEOUT_MS) || DEFAULT_TIMEOUT_MS),
        cache: "no-store",
      });
    } catch (error) {
      if (isLastAttempt) {
        logger.error("AI", "Gemini isteği gönderilemedi (ağ/zaman aşımı)", error);
        throw new GeminiError("Gemini servisine ulaşılamadı");
      }
      logger.warn("AI", `Gemini'ye ulaşılamadı, tekrar deneniyor (${attempt}/${maxAttempts - 1})`);
      await sleep(RETRY_DELAYS_MS[attempt - 1] ?? 2_000);
      continue;
    }

    if (response.ok) break;

    const errorText = await response.text().catch(() => "");
    if (RETRYABLE_STATUSES.has(response.status) && !isLastAttempt) {
      logger.warn("AI", `Gemini HTTP ${response.status} döndürdü, tekrar deneniyor (${attempt}/${maxAttempts - 1})`);
      await sleep(RETRY_DELAYS_MS[attempt - 1] ?? 2_000);
      continue;
    }

    logger.error("AI", `Gemini HTTP ${response.status} döndürdü`, errorText.slice(0, 500));
    throw new GeminiError(`Gemini HTTP ${response.status}`, response.status);
  }

  if (!response?.ok) {
    throw new GeminiError("Gemini servisine ulaşılamadı");
  }

  const json = (await response.json()) as GeminiApiResponse;
  if (json.promptFeedback?.blockReason) {
    throw new GeminiError(`İstek Gemini tarafından engellendi: ${json.promptFeedback.blockReason}`);
  }

  const text = json.candidates?.[0]?.content?.parts?.map((part) => part.text ?? "").join("").trim();
  if (!text) {
    throw new GeminiError(`Gemini boş yanıt döndürdü (${json.candidates?.[0]?.finishReason ?? "bilinmiyor"})`);
  }

  logger.debug("AI", "Gemini yanıtı alındı", {
    model,
    durationMs: Math.round(performance.now() - startTime),
    length: text.length,
  });
  return text;
}

/**
 * JSON şemalı isteklerde modelin döndürdüğü metni ayrıştırır.
 * Model nadiren ```json ... ``` bloğu içinde döndürebildiği için bunu da temizler.
 */
export function parseGeminiJson<T>(text: string): T {
  const cleaned = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
  try {
    return JSON.parse(cleaned) as T;
  } catch {
    throw new GeminiError("Gemini yanıtı geçerli JSON değil");
  }
}

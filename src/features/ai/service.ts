/**
 * ==============================================================================
 * TryFinally — Google Gemini AI Servisi (AI Service)
 * ==============================================================================
 * Model: GEMINI_MODEL (varsayılan gemini-3.8-flash) — tek izinli harici API.
 *
 * Sunduğu işlevler:
 *  - explainCodeError : Judge/Runner hatasını sade dille açıklar
 *  - generateCodeHint : 3 seviyeli yönlendirici ipucu üretir
 *  - reviewCode       : Kodu inceler, olası hataları ve karmaşıklığı söyler
 *  - chatWithAssistant: Problemle ilgili serbest soru-cevap
 *
 * Doğrudan tam cevabı verip öğrenmeyi baltalamak yerine pedagojik yönlendirme yapar.
 * GEMINI_API_KEY tanımlı değilse şablon (fallback) yanıtlar döner; böylece
 * anahtarı olmayan ekip üyeleri de arayüzü geliştirebilir.
 *
 * ⚠️ SADECE SUNUCUDA ÇAĞRILIR (API rotası: src/app/api/ai/route.ts).
 * Tarayıcıdan erişim için `client.ts` içindeki fonksiyonlar kullanılır.
 * ==============================================================================
 */

import { logger } from "@/lib/logger";
import { callGemini, getGeminiModel, isGeminiConfigured, parseGeminiJson, type GeminiMessage } from "./gemini";
import {
  AI_LIMITS,
  ERROR_EXPLANATION_SCHEMA,
  HINT_SCHEMA,
  REVIEW_SCHEMA,
  buildChatContextPrompt,
  buildErrorPrompt,
  buildHintPrompt,
  buildReviewPrompt,
  buildSystemInstruction,
  truncate,
} from "./prompts";
import type {
  AiApiRequest,
  AiChatMessage,
  AiChatRequest,
  AiChatResponse,
  AiProblemContext,
  CodeErrorExplanationRequest,
  CodeErrorExplanationResponse,
  CodeHintRequest,
  CodeHintResponse,
  CodeReviewRequest,
  CodeReviewResponse,
  HintLevel,
} from "./types";

/** Servis sonucu: `fallback` true ise yanıt Gemini'den değil şablondan gelmiştir. */
export interface AiResult<T> {
  data: T;
  fallback: boolean;
}

// ---------------------------------------------------------------------------
// 1) Hata açıklaması
// ---------------------------------------------------------------------------
export async function explainCodeError(
  request: CodeErrorExplanationRequest,
): Promise<AiResult<CodeErrorExplanationResponse>> {
  logger.info("AI", "Kod hatası açıklaması talep edildi", {
    model: getGeminiModel(),
    problem: request.problemSlug,
    language: request.language,
  });

  if (!isGeminiConfigured()) {
    logger.warn("AI", "GEMINI_API_KEY tanımlanmamış, şablon yanıt döndürülüyor");
    return {
      fallback: true,
      data: {
        simpleExplanation: `Kodunuzda bir hata oluştu: "${truncate(request.errorMessage, 200)}". Hata mesajındaki satır numarasına bakarak o satırdaki değişken isimlerini, tipleri ve dizi sınırlarını kontrol edin.`,
        suggestedConcept: "Hata Mesajlarını Okuma ve Hata Ayıklama",
        encouragingMessage: "Hata yapmak yazılım öğrenmenin en doğal parçasıdır, tekrar dene!",
      },
    };
  }

  const text = await callGemini({
    systemInstruction: buildSystemInstruction(request.responseLanguage),
    messages: [{ role: "user", text: buildErrorPrompt(request, request.errorMessage) }],
    responseSchema: ERROR_EXPLANATION_SCHEMA,
    temperature: 0.3,
  });
  return { fallback: false, data: parseGeminiJson<CodeErrorExplanationResponse>(text) };
}

// ---------------------------------------------------------------------------
// 2) Kademeli ipucu
// ---------------------------------------------------------------------------
const FALLBACK_HINTS: Record<HintLevel, string> = {
  1: "Problemi küçük bir örnek üzerinde elle çözmeyi dene. Her adımda hangi bilgiye ihtiyaç duyduğuna dikkat et.",
  2: "Girdiyi bir kez dolaşırken daha önce gördüğün değerleri uygun bir veri yapısında saklamak işini kolaylaştırabilir.",
  3: "1) Girdiyi dolaş\n2) Her eleman için gereken kontrolü yap\n3) Koşul sağlanırsa sonucu döndür\n4) Döngü bitince varsayılan sonucu döndür",
};

export async function generateCodeHint(request: CodeHintRequest): Promise<AiResult<CodeHintResponse>> {
  logger.info("AI", "Akıllı ipucu talep edildi", {
    model: getGeminiModel(),
    problem: request.problemSlug,
    hintLevel: request.hintLevel,
  });

  if (!isGeminiConfigured()) {
    logger.warn("AI", "GEMINI_API_KEY tanımlanmamış, şablon ipucu döndürülüyor");
    return { fallback: true, data: { hint: FALLBACK_HINTS[request.hintLevel], hintLevel: request.hintLevel } };
  }

  const text = await callGemini({
    systemInstruction: buildSystemInstruction(request.responseLanguage),
    messages: [{ role: "user", text: buildHintPrompt(request, request.hintLevel) }],
    responseSchema: HINT_SCHEMA,
    temperature: 0.5,
  });
  const { hint } = parseGeminiJson<{ hint: string }>(text);
  return { fallback: false, data: { hint, hintLevel: request.hintLevel } };
}

// ---------------------------------------------------------------------------
// 3) Kod incelemesi
// ---------------------------------------------------------------------------
export async function reviewCode(request: CodeReviewRequest): Promise<AiResult<CodeReviewResponse>> {
  logger.info("AI", "Kod incelemesi talep edildi", {
    model: getGeminiModel(),
    problem: request.problemSlug,
    language: request.language,
    codeLength: request.userCode.length,
  });

  if (!isGeminiConfigured()) {
    logger.warn("AI", "GEMINI_API_KEY tanımlanmamış, şablon inceleme döndürülüyor");
    return {
      fallback: true,
      data: {
        summary: "AI incelemesi şu anda devre dışı (GEMINI_API_KEY tanımlı değil). Aşağıdaki genel kontrol listesini kullanabilirsin.",
        issues: [
          "Boş veya tek elemanlı girdide kodun ne yaptığını kontrol et.",
          "Döngü sınırlarında bir eksik/fazla (off-by-one) hata olup olmadığına bak.",
        ],
        complexity: "Döngü sayısına bakarak tahmin et: tek döngü genelde O(n), iç içe iki döngü O(n²).",
        nextStep: "Kodunu örnek testcase'lerle elle takip et.",
      },
    };
  }

  const text = await callGemini({
    systemInstruction: buildSystemInstruction(request.responseLanguage),
    messages: [{ role: "user", text: buildReviewPrompt(request) }],
    responseSchema: REVIEW_SCHEMA,
    temperature: 0.3,
  });
  return { fallback: false, data: parseGeminiJson<CodeReviewResponse>(text) };
}

// ---------------------------------------------------------------------------
// 4) Serbest soru (sohbet)
// ---------------------------------------------------------------------------
export async function chatWithAssistant(request: AiChatRequest): Promise<AiResult<AiChatResponse>> {
  logger.info("AI", "AI sohbet sorusu alındı", {
    model: getGeminiModel(),
    problem: request.problemSlug,
    historyLength: request.history?.length ?? 0,
  });

  if (!isGeminiConfigured()) {
    logger.warn("AI", "GEMINI_API_KEY tanımlanmamış, şablon sohbet yanıtı döndürülüyor");
    return {
      fallback: true,
      data: {
        answer: "AI asistanı şu anda yapılandırılmamış (GEMINI_API_KEY eksik). Sunucuya anahtar eklendiğinde sorularını yanıtlayabileceğim.",
      },
    };
  }

  // Bağlam ilk kullanıcı mesajı olarak verilir; ardından geçmiş ve yeni soru eklenir.
  const messages: GeminiMessage[] = [
    { role: "user", text: buildChatContextPrompt(request) },
    { role: "model", text: "Anladım, problem ve kodu inceledim. Sorunu bekliyorum." },
    ...(request.history ?? []).map((message) => ({
      role: message.role === "assistant" ? ("model" as const) : ("user" as const),
      text: message.content,
    })),
    { role: "user", text: request.question },
  ];

  const answer = await callGemini({
    systemInstruction: buildSystemInstruction(request.responseLanguage),
    messages,
    temperature: 0.6,
  });
  return { fallback: false, data: { answer } };
}

// ---------------------------------------------------------------------------
// İstek doğrulama — API rotası gelen gövdeyi buradan geçirir
// ---------------------------------------------------------------------------
export class AiValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AiValidationError";
  }
}

const CODE_LANGUAGES = ["cpp", "java", "python"] as const;
const RESPONSE_LANGUAGES = ["tr", "en", "de"] as const;

function requireString(value: unknown, field: string, maxLength: number, allowEmpty = false): string {
  if (typeof value !== "string") throw new AiValidationError(`'${field}' metin olmalı`);
  const trimmed = value.trim();
  if (!allowEmpty && trimmed.length === 0) throw new AiValidationError(`'${field}' boş olamaz`);
  if (value.length > maxLength) throw new AiValidationError(`'${field}' en fazla ${maxLength} karakter olabilir`);
  return value;
}

function parseContext(body: Record<string, unknown>): AiProblemContext {
  const language = body.language;
  if (!CODE_LANGUAGES.includes(language as (typeof CODE_LANGUAGES)[number])) {
    throw new AiValidationError("'language' cpp, java veya python olmalı");
  }
  const responseLanguage = body.responseLanguage ?? "tr";
  if (!RESPONSE_LANGUAGES.includes(responseLanguage as (typeof RESPONSE_LANGUAGES)[number])) {
    throw new AiValidationError("'responseLanguage' tr, en veya de olmalı");
  }

  return {
    problemSlug: requireString(body.problemSlug, "problemSlug", 200),
    problemTitle: requireString(body.problemTitle, "problemTitle", 300),
    // Problem metni sunucuda kırpılır; burada sadece kaba bir üst sınır uygulanır.
    problemDescription: requireString(body.problemDescription, "problemDescription", 50_000),
    userCode: requireString(body.userCode, "userCode", AI_LIMITS.userCode, true),
    language: language as AiProblemContext["language"],
    responseLanguage: responseLanguage as AiProblemContext["responseLanguage"],
  };
}

function parseHistory(value: unknown): AiChatMessage[] {
  if (value === undefined) return [];
  if (!Array.isArray(value)) throw new AiValidationError("'history' bir liste olmalı");
  return value.slice(-AI_LIMITS.historyMessages).map((item, index) => {
    if (!item || typeof item !== "object") throw new AiValidationError(`'history[${index}]' geçersiz`);
    const { role, content } = item as Record<string, unknown>;
    if (role !== "user" && role !== "assistant") throw new AiValidationError(`'history[${index}].role' geçersiz`);
    if (typeof content !== "string") throw new AiValidationError(`'history[${index}].content' metin olmalı`);
    return { role, content: truncate(content, AI_LIMITS.historyMessageLength) };
  });
}

/** Ham JSON gövdesini doğrular ve tipli bir isteğe dönüştürür. */
export function parseAiRequest(raw: unknown): AiApiRequest {
  if (!raw || typeof raw !== "object") throw new AiValidationError("İstek gövdesi geçersiz");
  const body = raw as Record<string, unknown>;
  const context = parseContext(body);

  switch (body.action) {
    case "explain-error":
      return {
        action: "explain-error",
        ...context,
        errorMessage: requireString(body.errorMessage, "errorMessage", AI_LIMITS.errorMessage),
      };
    case "hint": {
      const level = body.hintLevel;
      if (level !== 1 && level !== 2 && level !== 3) throw new AiValidationError("'hintLevel' 1, 2 veya 3 olmalı");
      return { action: "hint", ...context, hintLevel: level };
    }
    case "review":
      if (!context.userCode.trim()) throw new AiValidationError("İncelenecek kod boş olamaz");
      return { action: "review", ...context };
    case "chat":
      return {
        action: "chat",
        ...context,
        question: requireString(body.question, "question", AI_LIMITS.question),
        history: parseHistory(body.history),
      };
    default:
      throw new AiValidationError("'action' explain-error, hint, review veya chat olmalı");
  }
}

// ---------------------------------------------------------------------------
// Basit hız sınırlayıcı (kullanıcı/IP başına dakikalık istek limiti)
// ---------------------------------------------------------------------------
// Not: Bellek içi çalışır; tek sunucu örneği için yeterlidir. Birden fazla
// sunucuya geçilirse bu sayaç veritabanına/Redis'e taşınmalıdır.
const RATE_WINDOW_MS = 60_000;
const rateBuckets = new Map<string, number[]>();

export function checkAiRateLimit(key: string, now = Date.now()): { allowed: boolean; retryAfterSeconds: number } {
  const limit = Number(process.env.AI_RATE_LIMIT_PER_MINUTE) || 10;
  const recent = (rateBuckets.get(key) ?? []).filter((time) => now - time < RATE_WINDOW_MS);

  if (recent.length >= limit) {
    rateBuckets.set(key, recent);
    const retryAfterSeconds = Math.ceil((RATE_WINDOW_MS - (now - recent[0])) / 1000);
    logger.warn("AI", "AI hız sınırı aşıldı", { key, limit });
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  rateBuckets.set(key, recent);

  // Bellek şişmesin diye ara sıra eski kayıtları temizle
  if (rateBuckets.size > 5_000) {
    for (const [bucketKey, times] of rateBuckets) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) rateBuckets.delete(bucketKey);
    }
  }
  return { allowed: true, retryAfterSeconds: 0 };
}

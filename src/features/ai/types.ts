/**
 * ==============================================================================
 * TryFinally — Google Gemini AI Asistanı Tip Tanımları (AI Types)
 * ==============================================================================
 * Kod hataları açıklamaları, yönlendirici ipuçları, kod incelemesi ve serbest
 * soru-cevap için istek/yanıt tipleri.
 * Tek harici API bağımlılığımız olan Google Gemini API için tipler.
 * ==============================================================================
 */

import type { ProblemContentLanguage, SupportedLanguage } from "@/features/problems";

/** Yanıtın yazılacağı dil (problem içerik diliyle aynı: tr / en / de). */
export type AiResponseLanguage = ProblemContentLanguage;

/** AI'a aktarılan problem bağlamı. Her istekte ortak kullanılır. */
export interface AiProblemContext {
  problemSlug: string;
  problemTitle: string;
  /** Problem metni (Markdown). Sunucuda uzunluk sınırına göre kırpılır. */
  problemDescription: string;
  userCode: string;
  language: SupportedLanguage;
  responseLanguage?: AiResponseLanguage;
}

// ---------------------------------------------------------------------------
// 1) Hata açıklaması — Judge/Runner bir hata döndürdüğünde kullanılır
// ---------------------------------------------------------------------------
export interface CodeErrorExplanationRequest extends AiProblemContext {
  errorMessage: string;
}

export interface CodeErrorExplanationResponse {
  simpleExplanation: string; // Yeni başlayanın anlayacağı sade özet
  suggestedConcept: string; // Araştırılması tavsiye edilen konu (örn: "Dizi İndisleri")
  encouragingMessage: string;
}

// ---------------------------------------------------------------------------
// 2) Kademeli ipucu
// ---------------------------------------------------------------------------
/** 1: Küçük ipucu, 2: Mantıksal yönlendirme, 3: Sözde kod yaklaşımı */
export type HintLevel = 1 | 2 | 3;

export interface CodeHintRequest extends AiProblemContext {
  hintLevel: HintLevel;
}

export interface CodeHintResponse {
  hint: string;
  hintLevel: HintLevel;
}

// ---------------------------------------------------------------------------
// 3) Kod incelemesi — "Kodumu incele"
// ---------------------------------------------------------------------------
export type CodeReviewRequest = AiProblemContext;

export interface CodeReviewResponse {
  summary: string;
  issues: string[]; // Tespit edilen olası hatalar / eksikler (çözüm vermeden)
  complexity: string; // Tahmini zaman ve alan karmaşıklığı
  nextStep: string; // Kullanıcının atması gereken bir sonraki adım
}

// ---------------------------------------------------------------------------
// 4) Serbest soru (sohbet)
// ---------------------------------------------------------------------------
export interface AiChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface AiChatRequest extends AiProblemContext {
  question: string;
  history?: AiChatMessage[];
}

export interface AiChatResponse {
  answer: string;
}

// ---------------------------------------------------------------------------
// API sözleşmesi — POST /api/ai
// ---------------------------------------------------------------------------
export type AiAction = "explain-error" | "hint" | "review" | "chat";

export type AiApiRequest =
  | ({ action: "explain-error" } & CodeErrorExplanationRequest)
  | ({ action: "hint" } & CodeHintRequest)
  | ({ action: "review" } & CodeReviewRequest)
  | ({ action: "chat" } & AiChatRequest);

export type AiApiResponse =
  | { ok: true; action: "explain-error"; data: CodeErrorExplanationResponse; fallback: boolean }
  | { ok: true; action: "hint"; data: CodeHintResponse; fallback: boolean }
  | { ok: true; action: "review"; data: CodeReviewResponse; fallback: boolean }
  | { ok: true; action: "chat"; data: AiChatResponse; fallback: boolean }
  | { ok: false; error: string; code: AiErrorCode };

export type AiErrorCode =
  | "BAD_REQUEST"
  | "RATE_LIMITED"
  | "AI_UNAVAILABLE"
  | "INTERNAL_ERROR";

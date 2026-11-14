/**
 * ==============================================================================
 * TryFinally — AI İstemci Yardımcıları (AI Client)
 * ==============================================================================
 * Tarayıcı tarafından `/api/ai` rotasına istek atan fonksiyonlar.
 * UI bileşenleri ve diğer modüller (ör. Submission ekranı) AI'a bunlar
 * üzerinden erişir; Gemini anahtarı tarayıcıya hiç gelmez.
 *
 * Örnek (Submission/Judge ekibi için):
 *   import { requestErrorExplanation } from "@/features/ai";
 *   const result = await requestErrorExplanation({ ...context, errorMessage: stderr });
 * ==============================================================================
 */

import type {
  AiApiRequest,
  AiApiResponse,
  AiChatRequest,
  AiChatResponse,
  AiErrorCode,
  CodeErrorExplanationRequest,
  CodeErrorExplanationResponse,
  CodeHintRequest,
  CodeHintResponse,
  CodeReviewRequest,
  CodeReviewResponse,
} from "./types";

export class AiRequestError extends Error {
  constructor(message: string, public readonly code: AiErrorCode) {
    super(message);
    this.name = "AiRequestError";
  }
}

export interface AiClientResult<T> {
  data: T;
  fallback: boolean;
}

async function postAi<T>(payload: AiApiRequest): Promise<AiClientResult<T>> {
  let response: Response;
  try {
    response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new AiRequestError("Sunucuya bağlanılamadı. İnternet bağlantını kontrol et.", "AI_UNAVAILABLE");
  }

  let json: AiApiResponse;
  try {
    json = (await response.json()) as AiApiResponse;
  } catch {
    throw new AiRequestError("Sunucudan beklenmeyen bir yanıt geldi.", "INTERNAL_ERROR");
  }

  if (!json.ok) throw new AiRequestError(json.error, json.code);
  return { data: json.data as T, fallback: json.fallback };
}

export function requestErrorExplanation(request: CodeErrorExplanationRequest) {
  return postAi<CodeErrorExplanationResponse>({ action: "explain-error", ...request });
}

export function requestHint(request: CodeHintRequest) {
  return postAi<CodeHintResponse>({ action: "hint", ...request });
}

export function requestCodeReview(request: CodeReviewRequest) {
  return postAi<CodeReviewResponse>({ action: "review", ...request });
}

export function requestChatAnswer(request: AiChatRequest) {
  return postAi<AiChatResponse>({ action: "chat", ...request });
}

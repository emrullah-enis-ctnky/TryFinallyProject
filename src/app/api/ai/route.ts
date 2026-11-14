/**
 * ==============================================================================
 * TryFinally — AI Destek API Rotası
 * ==============================================================================
 * POST /api/ai
 * Gövde: { action: "explain-error" | "hint" | "review" | "chat", ...AiProblemContext, ... }
 * Yanıt: AiApiResponse (bkz. src/features/ai/types.ts)
 *
 * Gemini API anahtarı yalnızca burada (sunucuda) kullanılır.
 * ==============================================================================
 */

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { logger } from "@/lib/logger";
import {
  AiValidationError,
  chatWithAssistant,
  checkAiRateLimit,
  explainCodeError,
  generateCodeHint,
  parseAiRequest,
  reviewCode,
  type AiApiRequest,
  type AiApiResponse,
} from "@/features/ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function errorResponse(status: number, body: Extract<AiApiResponse, { ok: false }>, headers?: HeadersInit) {
  return NextResponse.json<AiApiResponse>(body, { status, headers });
}

async function getRateLimitKey(request: Request): Promise<string> {
  try {
    const session = await auth();
    if (session?.user?.id) return `user:${session.user.id}`;
    if (session?.user?.email) return `user:${session.user.email}`;
  } catch (error) {
    logger.warn("AI", "Oturum bilgisi okunamadı, IP ile sınırlanıyor", error);
  }
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return `ip:${forwarded || request.headers.get("x-real-ip") || "unknown"}`;
}

async function runAction(payload: AiApiRequest): Promise<AiApiResponse> {
  switch (payload.action) {
    case "explain-error": {
      const result = await explainCodeError(payload);
      return { ok: true, action: payload.action, ...result };
    }
    case "hint": {
      const result = await generateCodeHint(payload);
      return { ok: true, action: payload.action, ...result };
    }
    case "review": {
      const result = await reviewCode(payload);
      return { ok: true, action: payload.action, ...result };
    }
    case "chat": {
      const result = await chatWithAssistant(payload);
      return { ok: true, action: payload.action, ...result };
    }
  }
}

export async function POST(request: Request) {
  let payload: AiApiRequest;
  try {
    payload = parseAiRequest(await request.json());
  } catch (error) {
    const message = error instanceof AiValidationError ? error.message : "İstek gövdesi geçerli JSON değil";
    return errorResponse(400, { ok: false, code: "BAD_REQUEST", error: message });
  }

  const rateLimit = checkAiRateLimit(await getRateLimitKey(request));
  if (!rateLimit.allowed) {
    return errorResponse(
      429,
      {
        ok: false,
        code: "RATE_LIMITED",
        error: `Çok fazla istek gönderdin. ${rateLimit.retryAfterSeconds} saniye sonra tekrar dene.`,
      },
      { "Retry-After": String(rateLimit.retryAfterSeconds) },
    );
  }

  try {
    return NextResponse.json<AiApiResponse>(await runAction(payload));
  } catch (error) {
    logger.error("AI", `AI isteği başarısız oldu (${payload.action})`, error);
    return errorResponse(503, {
      ok: false,
      code: "AI_UNAVAILABLE",
      error: "AI asistanına şu anda ulaşılamıyor. Biraz sonra tekrar dene.",
    });
  }
}

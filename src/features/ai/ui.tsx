"use client";

/**
 * ==============================================================================
 * TryFinally — Google Gemini AI Asistanı UI Bileşenleri (AI UI)
 * ==============================================================================
 *  - AiAssistantPanel     : Problem ekranındaki "AI Asistan" sekmesi
 *                           (kademeli ipucu, kod incelemesi, serbest soru)
 *  - AiErrorExplainButton : Judge/Runner hata döndürdüğünde sonuç paneline
 *                           eklenecek "Hatayı açıkla" butonu (6. ve 7. kısım için)
 *  - AiExplanationCard    : Hata açıklaması kartı
 *
 * Sadece semantik tema token'ları kullanılır (bg-surface, text-primary vb.).
 * ==============================================================================
 */

import React, { useEffect, useRef, useState } from "react";
import { BookMarked, Bot, Lightbulb, Loader2, MessageCircle, ScanSearch, Send, Sparkles, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AiRequestError,
  requestChatAnswer,
  requestCodeReview,
  requestErrorExplanation,
  requestHint,
} from "./client";
import type {
  AiChatMessage,
  AiProblemContext,
  CodeErrorExplanationResponse,
  CodeHintResponse,
  CodeReviewResponse,
  HintLevel,
} from "./types";

function getErrorMessage(error: unknown): string {
  if (error instanceof AiRequestError) return error.message;
  return "Beklenmeyen bir hata oluştu. Lütfen tekrar dene.";
}

const FallbackNotice = () => (
  <p className="text-[11px] text-muted-foreground">
    Not: AI anahtarı tanımlı olmadığı için bu yanıt hazır bir şablondan geldi.
  </p>
);

const ErrorNotice = ({ message }: { message: string }) => (
  <div className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-xs text-foreground">
    <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
    <span>{message}</span>
  </div>
);

// ===========================================================================
// Hata açıklama kartı
// ===========================================================================
interface AiExplanationCardProps {
  explanation: CodeErrorExplanationResponse;
  onClose?: () => void;
}

export const AiExplanationCard: React.FC<AiExplanationCardProps> = ({ explanation, onClose }) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-surface p-5 text-surface-foreground shadow-md">
      <div className="mb-3 flex items-center gap-2">
        <div className="rounded-md bg-primary/20 p-1.5 text-primary">
          <Sparkles className="h-4 w-4" />
        </div>
        <h4 className="text-sm font-bold text-foreground">Akıllı Kod Rehberi</h4>
      </div>

      <p className="mb-3 whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
        {explanation.simpleExplanation}
      </p>

      <div className="mb-3 flex items-center gap-2 rounded-md bg-secondary/60 p-2.5 text-xs text-muted-foreground">
        <BookMarked className="h-4 w-4 shrink-0 text-accent" />
        <span>
          <strong>Önerilen Konu:</strong> {explanation.suggestedConcept}
        </span>
      </div>

      <div className="flex items-center gap-2 text-xs text-accent">
        <Lightbulb className="h-4 w-4 shrink-0" />
        <span>{explanation.encouragingMessage}</span>
      </div>

      {onClose && (
        <button onClick={onClose} className="mt-3 text-xs text-muted-foreground underline hover:text-foreground">
          Kapat
        </button>
      )}
    </div>
  );
};

// ===========================================================================
// "Hatayı açıkla" butonu — sonuç paneline eklenmek üzere
// ===========================================================================
interface AiErrorExplainButtonProps {
  /** Butona basıldığı anda güncel problem + kod bilgisini döndürür. */
  getContext: () => AiProblemContext;
  errorMessage: string;
}

export const AiErrorExplainButton: React.FC<AiErrorExplainButtonProps> = ({ getContext, errorMessage }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ data: CodeErrorExplanationResponse; fallback: boolean } | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      setResult(await requestErrorExplanation({ ...getContext(), errorMessage }));
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    return (
      <div className="space-y-2">
        <AiExplanationCard explanation={result.data} onClose={() => setResult(null)} />
        {result.fallback && <FallbackNotice />}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-primary/15 disabled:opacity-60"
      >
        {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Sparkles className="h-3.5 w-3.5 text-primary" />}
        Hatayı AI ile açıkla
      </button>
      {error && <ErrorNotice message={error} />}
    </div>
  );
};

// ===========================================================================
// AI Asistan paneli
// ===========================================================================
type AssistantMode = "hint" | "review" | "chat";

const MODES: { id: AssistantMode; label: string; icon: React.ElementType }[] = [
  { id: "hint", label: "İpucu", icon: Lightbulb },
  { id: "review", label: "Kodumu incele", icon: ScanSearch },
  { id: "chat", label: "Soru sor", icon: MessageCircle },
];

const HINT_LABELS: Record<HintLevel, string> = {
  1: "Küçük ipucu",
  2: "Yaklaşım",
  3: "Sözde kod",
};

interface AiAssistantPanelProps {
  /** İstek atıldığı anda güncel problem + kod bilgisini döndürür. */
  getContext: () => AiProblemContext;
}

export const AiAssistantPanel: React.FC<AiAssistantPanelProps> = ({ getContext }) => {
  const [mode, setMode] = useState<AssistantMode>("hint");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fallback, setFallback] = useState(false);

  const [hints, setHints] = useState<CodeHintResponse[]>([]);
  const [review, setReview] = useState<CodeReviewResponse | null>(null);
  const [messages, setMessages] = useState<AiChatMessage[]>([]);
  const [question, setQuestion] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const problemSlug = getContext().problemSlug;

  // Farklı bir probleme geçilirse paneli sıfırla
  useEffect(() => {
    setHints([]);
    setReview(null);
    setMessages([]);
    setError(null);
  }, [problemSlug]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, loading]);

  async function run<T>(action: () => Promise<{ data: T; fallback: boolean }>, onSuccess: (data: T) => void) {
    setLoading(true);
    setError(null);
    try {
      const result = await action();
      setFallback(result.fallback);
      onSuccess(result.data);
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    } finally {
      setLoading(false);
    }
  }

  const nextHintLevel = (Math.min(hints.length + 1, 3) as HintLevel);
  const allHintsUsed = hints.length >= 3;

  function handleHint() {
    const level = nextHintLevel;
    void run(() => requestHint({ ...getContext(), hintLevel: level }), (data) => setHints((prev) => [...prev, data]));
  }

  function handleReview() {
    const context = getContext();
    if (!context.userCode.trim()) {
      setError("İncelenecek bir kod yok. Önce editöre kodunu yaz.");
      return;
    }
    void run(() => requestCodeReview(context), setReview);
  }

  function handleAsk(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    const history = messages;
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setQuestion("");
    void run(
      () => requestChatAnswer({ ...getContext(), question: trimmed, history }),
      (data) => setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]),
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-1 self-start rounded-md bg-secondary p-1" role="tablist" aria-label="AI asistan modu">
        {MODES.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={mode === id}
            onClick={() => {
              setMode(id);
              setError(null);
            }}
            className={cn(
              "flex items-center gap-1.5 rounded px-3 py-1 text-xs font-semibold transition-colors",
              mode === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-3.5 w-3.5" /> {label}
          </button>
        ))}
      </div>

      {mode === "hint" && (
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground">
            İpuçları adım adım açılır: önce küçük bir ipucu, sonra yaklaşım, en son sözde kod. Asistan tam çözümü vermez.
          </p>
          {hints.map((hint) => (
            <div key={hint.hintLevel} className="rounded-lg border border-primary/20 bg-primary/5 p-3">
              <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                <Lightbulb className="h-3.5 w-3.5" /> {hint.hintLevel}. seviye · {HINT_LABELS[hint.hintLevel]}
              </div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">{hint.hint}</p>
            </div>
          ))}
          {!allHintsUsed && (
            <button
              type="button"
              onClick={handleHint}
              disabled={loading}
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Lightbulb className="h-3.5 w-3.5" />}
              {hints.length === 0 ? "İpucu al" : `Sonraki ipucu (${HINT_LABELS[nextHintLevel]})`}
            </button>
          )}
        </div>
      )}

      {mode === "review" && (
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground">
            Asistan editördeki güncel kodunu okur; olası hataları, gözden kaçan durumları ve karmaşıklığı söyler.
          </p>
          {review && (
            <div className="space-y-2 rounded-lg border border-border bg-secondary/30 p-3 text-sm leading-relaxed text-foreground/90">
              <p>{review.summary}</p>
              {review.issues.length > 0 && (
                <ul className="list-disc space-y-1 pl-5">
                  {review.issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              )}
              <p className="text-xs">
                <strong className="text-foreground">Karmaşıklık:</strong> {review.complexity}
              </p>
              <p className="text-xs text-accent">
                <strong>Sonraki adım:</strong> {review.nextStep}
              </p>
            </div>
          )}
          <button
            type="button"
            onClick={handleReview}
            disabled={loading}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <ScanSearch className="h-3.5 w-3.5" />}
            {review ? "Tekrar incele" : "Kodumu incele"}
          </button>
        </div>
      )}

      {mode === "chat" && (
        <div className="flex flex-col gap-3">
          <div className="max-h-56 space-y-2 overflow-y-auto">
            {messages.length === 0 && (
              <p className="text-xs text-muted-foreground">
                Problemle veya kodunla ilgili istediğini sor. Örn: &quot;Neden iç içe döngü yavaş?&quot;
              </p>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "max-w-[90%] whitespace-pre-wrap rounded-lg px-3 py-2 text-sm leading-relaxed",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "flex gap-2 bg-secondary text-foreground",
                )}
              >
                {message.role === "assistant" && <Bot className="mt-0.5 h-4 w-4 shrink-0 text-primary" />}
                <span>{message.content}</span>
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Loader2 className="h-3.5 w-3.5 animate-spin" /> Asistan düşünüyor…
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleAsk} className="flex items-center gap-2">
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              maxLength={1000}
              placeholder="Sorunu yaz…"
              aria-label="AI'a soru"
              className="flex-1 rounded-md border border-input bg-background px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground disabled:opacity-60"
            >
              <Send className="h-3.5 w-3.5" /> Gönder
            </button>
          </form>
        </div>
      )}

      {error && <ErrorNotice message={error} />}
      {fallback && !error && <FallbackNotice />}
    </div>
  );
};

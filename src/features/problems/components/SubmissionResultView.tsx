"use client";

import {
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  Loader2,
  Trophy,
  Zap,
} from "lucide-react";
import type { SubmissionView, Verdict } from "@/features/judge";
import { AiErrorExplainButton, type AiProblemContext } from "@/features/ai";

const VERDICT_META: Record<
  Verdict,
  { label: string; colorClass: string; bgClass: string }
> = {
  ACCEPTED: {
    label: "Kabul Edildi (Accepted)",
    colorClass: "text-emerald-500",
    bgClass: "border-emerald-500/30 bg-emerald-500/10",
  },
  WRONG_ANSWER: {
    label: "Yanlış Cevap (Wrong Answer)",
    colorClass: "text-rose-500",
    bgClass: "border-rose-500/30 bg-rose-500/10",
  },
  TIME_LIMIT: {
    label: "Zaman Sınırı Aşıldı (Time Limit Exceeded)",
    colorClass: "text-amber-500",
    bgClass: "border-amber-500/30 bg-amber-500/10",
  },
  MEMORY_LIMIT: {
    label: "Bellek Sınırı Aşıldı (Memory Limit Exceeded)",
    colorClass: "text-amber-500",
    bgClass: "border-amber-500/30 bg-amber-500/10",
  },
  RUNTIME_ERROR: {
    label: "Çalışma Zamanı Hatası (Runtime Error)",
    colorClass: "text-rose-500",
    bgClass: "border-rose-500/30 bg-rose-500/10",
  },
  COMPILE_ERROR: {
    label: "Derleme Hatası (Compile Error)",
    colorClass: "text-rose-500",
    bgClass: "border-rose-500/30 bg-rose-500/10",
  },
  INTERNAL_ERROR: {
    label: "Sistem Hatası (Internal Error)",
    colorClass: "text-muted-foreground",
    bgClass: "border-border bg-secondary",
  },
};

interface SubmissionResultViewProps {
  submission: SubmissionView | null;
  error: string | null;
  isPolling: boolean;
  getAiContext: () => AiProblemContext;
}

export function SubmissionResultView({
  submission,
  error,
  isPolling,
  getAiContext,
}: SubmissionResultViewProps) {
  if (error) {
    return (
      <div className="flex items-start gap-2.5 rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-400">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        <div>
          <p className="font-semibold">İşlem Başarısız</p>
          <p className="mt-1 opacity-90">{error}</p>
        </div>
      </div>
    );
  }

  if (!submission && !isPolling) {
    return (
      <div className="py-8 text-center text-xs text-muted-foreground">
        Henüz bir çalıştırma yapılmadı. Kodunu test etmek için{" "}
        <strong>Çalıştır</strong> veya <strong>Gönder</strong> butonunu kullan.
      </div>
    );
  }

  if (
    !submission ||
    submission.status === "PENDING" ||
    submission.status === "RUNNING"
  ) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-8 text-xs text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin text-primary" />
        <p className="font-medium text-foreground">
          {submission?.status === "RUNNING"
            ? "Kodun testlerden geçiyor..."
            : "Kuyrukta bekleniyor..."}
        </p>
      </div>
    );
  }

  const meta = VERDICT_META[submission.status];
  const result = submission.result;
  const failedTest = result?.failedTest;

  const aiErrorMessage =
    result?.compileOutput ||
    failedTest?.error ||
    (failedTest
      ? `Durum: ${submission.status} | Girdi: ${failedTest.input ?? "-"} | Beklenen: ${failedTest.expectedOutput ?? "-"} | Çıktı: ${failedTest.actualOutput ?? "null"}`
      : `Durum: ${submission.status} (${submission.passedCount}/${submission.totalCount} test geçti)`);

  return (
    <div className="space-y-4 text-xs">
      {/* Üst Durum Kartı */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 rounded-lg border p-3.5 ${meta.bgClass}`}
      >
        <div className="flex items-center gap-2">
          {submission.status === "ACCEPTED" ? (
            <CheckCircle2 className={`h-5 w-5 ${meta.colorClass}`} />
          ) : (
            <XCircle className={`h-5 w-5 ${meta.colorClass}`} />
          )}
          <div>
            <p className={`text-sm font-bold ${meta.colorClass}`}>
              {meta.label}
            </p>
            <p className="text-[11px] text-muted-foreground">
              {submission.passedCount} / {submission.totalCount} test geçti
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[11px] text-foreground">
          {submission.runtimeMs !== null && (
            <span className="inline-flex items-center gap-1 rounded bg-background/60 px-2 py-1 font-mono">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              {submission.runtimeMs} ms
            </span>
          )}

          {submission.runtimeBeatsPercent !== null && (
            <span className="inline-flex items-center gap-1 rounded bg-background/60 px-2 py-1 font-medium text-emerald-400">
              <Zap className="h-3.5 w-3.5" />
              Çözümlerin %{submission.runtimeBeatsPercent}&apos;inden hızlı
            </span>
          )}

          {submission.pointsAwarded > 0 && (
            <span className="inline-flex items-center gap-1 rounded bg-amber-500/20 px-2 py-1 font-semibold text-amber-400">
              <Trophy className="h-3.5 w-3.5" />+{submission.pointsAwarded} Puan
            </span>
          )}
        </div>
      </div>

      {/* Hata Açıklama Butonu & Kartı (Sistem hatası hariç başarısız durumlarda) */}
      {submission.status !== "ACCEPTED" &&
        submission.status !== "INTERNAL_ERROR" && (
          <AiErrorExplainButton
            getContext={getAiContext}
            errorMessage={aiErrorMessage}
          />
        )}

      {/* Derleme Hatası */}
      {result?.compileOutput && (
        <div className="space-y-1.5">
          <p className="font-semibold text-rose-400">Derleme Çıktısı</p>
          <pre className="max-h-48 overflow-auto rounded-md border border-border bg-background p-3 font-mono text-[11px] text-rose-300">
            {result.compileOutput}
          </pre>
        </div>
      )}

      {/* Sistem Hatası Teknik Detayı */}
      {result?.internalMessage && (
        <div className="space-y-1.5">
          <p className="font-semibold text-amber-400">Sistem Hatası Detayı</p>
          <pre className="max-h-48 overflow-auto rounded-md border border-border bg-background p-3 font-mono text-[11px] text-amber-300">
            {result.internalMessage}
          </pre>
        </div>
      )}

      {/* İlk Başarısız Test Detayı */}
      {failedTest && (
        <div className="space-y-2.5 rounded-lg border border-border bg-background/50 p-3">
          <p className="font-semibold text-foreground">
            Başarısız Test {failedTest.isHidden ? "(Gizli Test)" : ""}
          </p>

          {failedTest.error && (
            <div>
              <span className="text-[11px] text-rose-400">Hata Mesajı:</span>
              <pre className="mt-1 overflow-auto rounded bg-secondary p-2 font-mono text-[11px] text-rose-300">
                {failedTest.error}
              </pre>
            </div>
          )}

          {failedTest.input !== undefined && (
            <div>
              <span className="text-[11px] text-muted-foreground">
                Girdi (Input):
              </span>
              <pre className="mt-1 overflow-auto rounded bg-secondary p-2 font-mono text-[11px] text-foreground">
                {failedTest.input}
              </pre>
            </div>
          )}

          {failedTest.actualOutput !== undefined && (
            <div>
              <span className="text-[11px] text-muted-foreground">
                Senin Çıktın (Output):
              </span>
              <pre className="mt-1 overflow-auto rounded bg-secondary p-2 font-mono text-[11px] text-rose-300">
                {failedTest.actualOutput ?? "null"}
              </pre>
            </div>
          )}

          {failedTest.expectedOutput !== undefined && (
            <div>
              <span className="text-[11px] text-muted-foreground">
                Beklenen Çıktı (Expected):
              </span>
              <pre className="mt-1 overflow-auto rounded bg-secondary p-2 font-mono text-[11px] text-emerald-400">
                {failedTest.expectedOutput}
              </pre>
            </div>
          )}

          {failedTest.stdout && (
            <div>
              <span className="text-[11px] text-muted-foreground">Stdout:</span>
              <pre className="mt-1 overflow-auto rounded bg-secondary p-2 font-mono text-[11px] text-muted-foreground">
                {failedTest.stdout}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* "Çalıştır" modunda tek tek test listesi */}
      {submission.kind === "run" &&
        result?.tests &&
        result.tests.length > 0 && (
          <div className="space-y-1.5">
            <p className="font-semibold text-muted-foreground">
              Örnek Test Durumları
            </p>
            <div className="flex flex-wrap gap-2">
              {result.tests.map((test, idx) => (
                <span
                  key={test.id}
                  className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[11px] ${
                    test.passed
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border-rose-500/30 bg-rose-500/10 text-rose-400"
                  }`}
                >
                  {test.passed ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : (
                    <XCircle className="h-3 w-3" />
                  )}
                  Test {idx + 1}
                  {test.timeMs !== null ? ` (${test.timeMs}ms)` : ""}
                </span>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}

"use client";

/**
 * ==============================================================================
 * TryFinally — Judge Arayüz Bileşenleri
 * ==============================================================================
 * Kodlama ekranı (Modül 6) bunları istediği yere yerleştirebilir:
 *
 *   <VerdictBadge status={view.status} />
 *   <RuntimeSummary view={view} />
 *   <SubmissionHistory problemSlug="two-sum" refreshKey={gonderimSayisi} />
 * ==============================================================================
 */

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { listSubmissions } from "./client";
import type { JudgeLanguage, SubmissionStatus, SubmissionSummary, SubmissionView } from "./types";

export const STATUS_LABELS: Record<SubmissionStatus, string> = {
  PENDING: "Sırada",
  RUNNING: "Çalışıyor",
  ACCEPTED: "Kabul Edildi",
  WRONG_ANSWER: "Yanlış Cevap",
  TIME_LIMIT: "Süre Aşıldı",
  MEMORY_LIMIT: "Bellek Aşıldı",
  RUNTIME_ERROR: "Çalışma Hatası",
  COMPILE_ERROR: "Derleme Hatası",
  INTERNAL_ERROR: "Sistem Hatası",
};

export const LANGUAGE_LABELS: Record<JudgeLanguage, string> = {
  cpp: "C++",
  java: "Java",
  python: "Python",
};

/** Gönderim durumunu renkli bir rozet olarak gösterir. */
export function VerdictBadge({ status }: { status: SubmissionStatus }) {
  const variant =
    status === "ACCEPTED" ? "accent" : status === "PENDING" || status === "RUNNING" || status === "INTERNAL_ERROR" ? "secondary" : "destructive";
  return <Badge variant={variant}>{STATUS_LABELS[status]}</Badge>;
}

/**
 * "Çalışma süresi: 12 ms · Senden yavaş olan Python çözümleri: %72"
 * (Türkçede "%72'sinden / %100'ünden" eki sayıya göre değiştiği için eksiz bir cümle kullanıyoruz.)
 */
export function RuntimeSummary({ view }: { view: SubmissionView }) {
  if (view.runtimeMs === null) return null;
  return (
    <p className="text-xs text-muted-foreground">
      Çalışma süresi: <span className="font-semibold text-foreground">{view.runtimeMs} ms</span>
      {view.runtimeBeatsPercent !== null && (
        <>
          {" · "}Senden yavaş olan {LANGUAGE_LABELS[view.language]} çözümleri:{" "}
          <span className="font-semibold text-accent">%{view.runtimeBeatsPercent}</span>
        </>
      )}
    </p>
  );
}

function timeAgo(iso: string): string {
  const seconds = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 1000));
  if (seconds < 60) return "az önce";
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} dk önce`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} sa önce`;
  const days = Math.round(hours / 24);
  if (days < 7) return `${days} gün önce`;
  return new Date(iso).toLocaleDateString("tr-TR");
}

type HistoryState =
  | { phase: "loading" }
  | { phase: "error"; message: string }
  | { phase: "ready"; items: SubmissionSummary[] };

/**
 * Kullanıcının bu sorudaki "Gönder" geçmişi (en yenisi üstte).
 * Yeni bir gönderim bitince `refreshKey`'i artırın, liste yenilensin.
 */
export function SubmissionHistory({
  problemSlug,
  refreshKey = 0,
  onSelect,
}: {
  problemSlug: string;
  refreshKey?: number;
  onSelect?: (submissionId: string) => void;
}) {
  const [state, setState] = useState<HistoryState>({ phase: "loading" });

  useEffect(() => {
    let cancelled = false;
    setState({ phase: "loading" });
    listSubmissions(problemSlug)
      .then((response) => !cancelled && setState({ phase: "ready", items: response.submissions }))
      .catch((error: Error) => !cancelled && setState({ phase: "error", message: error.message }));
    return () => {
      cancelled = true;
    };
  }, [problemSlug, refreshKey]);

  if (state.phase === "loading") {
    return <p className="p-4 text-xs text-muted-foreground">Gönderimler yükleniyor...</p>;
  }
  if (state.phase === "error") {
    return <p className="p-4 text-xs text-destructive">{state.message}</p>;
  }
  if (state.items.length === 0) {
    return (
      <p className="p-4 text-xs text-muted-foreground">
        Henüz gönderim yok. Kodunu &quot;Gönder&quot; ile gönderdiğinde burada listelenecek.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs">
        <thead className="border-b border-border text-[11px] uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-2 font-semibold">Durum</th>
            <th className="px-4 py-2 font-semibold">Dil</th>
            <th className="px-4 py-2 font-semibold">Süre</th>
            <th className="px-4 py-2 font-semibold">Test</th>
            <th className="px-4 py-2 font-semibold">Zaman</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map((item) => (
            <tr
              key={item.id}
              onClick={onSelect ? () => onSelect(item.id) : undefined}
              className={`border-b border-border last:border-0 ${onSelect ? "cursor-pointer hover:bg-secondary/40" : ""}`}
            >
              <td className="px-4 py-2">
                <VerdictBadge status={item.status} />
              </td>
              <td className="px-4 py-2 text-foreground">{LANGUAGE_LABELS[item.language]}</td>
              <td className="px-4 py-2 tabular-nums text-foreground">{item.runtimeMs !== null ? `${item.runtimeMs} ms` : "-"}</td>
              <td className="px-4 py-2 tabular-nums text-muted-foreground">
                {item.totalCount > 0 ? `${item.passedCount}/${item.totalCount}` : "-"}
              </td>
              <td className="px-4 py-2 text-muted-foreground" title={new Date(item.createdAt).toLocaleString("tr-TR")}>
                {timeAgo(item.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

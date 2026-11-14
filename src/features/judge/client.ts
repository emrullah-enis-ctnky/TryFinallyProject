/**
 * ==============================================================================
 * TryFinally — Judge İstemci Yardımcıları
 * ==============================================================================
 * Kodlama ekranının (Modül 6) "Çalıştır" ve "Gönder" butonları için:
 *   const { submissionId } = await createSubmission({ ... });
 *   const final = await waitForSubmission(submissionId, { onUpdate: setView });
 * ==============================================================================
 */

import type {
  CreateSubmissionRequest,
  CreateSubmissionResponse,
  ListSubmissionsResponse,
  SubmissionView,
} from "./types";

async function readJson<T>(response: Response): Promise<T> {
  const body = (await response.json().catch(() => ({}))) as T & { error?: string };
  if (!response.ok) {
    throw new Error(body.error ?? `İstek başarısız oldu (HTTP ${response.status}).`);
  }
  return body;
}

/** Kodu kuyruğa gönderir ve gönderim numarasını döner. */
export async function createSubmission(request: CreateSubmissionRequest): Promise<CreateSubmissionResponse> {
  const response = await fetch("/api/submissions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });
  return readJson<CreateSubmissionResponse>(response);
}

/** Gönderimin güncel durumunu getirir. */
export async function getSubmission(submissionId: string): Promise<SubmissionView> {
  const response = await fetch(`/api/submissions/${encodeURIComponent(submissionId)}`, { cache: "no-store" });
  return readJson<SubmissionView>(response);
}

/** Kullanıcının bu sorudaki "Gönder" geçmişini getirir (en yenisi başta). */
export async function listSubmissions(problemSlug: string, limit = 20): Promise<ListSubmissionsResponse> {
  const query = new URLSearchParams({ problem: problemSlug, limit: String(limit) });
  const response = await fetch(`/api/submissions?${query}`, { cache: "no-store" });
  return readJson<ListSubmissionsResponse>(response);
}

export function isFinished(view: SubmissionView): boolean {
  return view.status !== "PENDING" && view.status !== "RUNNING";
}

/** Sonuç gelene kadar belirli aralıklarla sorar (polling). */
export async function waitForSubmission(
  submissionId: string,
  options: { intervalMs?: number; timeoutMs?: number; onUpdate?: (view: SubmissionView) => void } = {},
): Promise<SubmissionView> {
  const { intervalMs = 1000, timeoutMs = 60_000, onUpdate } = options;
  const deadline = Date.now() + timeoutMs;

  while (true) {
    const view = await getSubmission(submissionId);
    onUpdate?.(view);
    if (isFinished(view)) return view;
    if (Date.now() > deadline) {
      throw new Error("Sonuç beklenenden uzun sürdü. Judge çalışıyor mu? (npm run judge:worker)");
    }
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }
}

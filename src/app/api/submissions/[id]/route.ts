/**
 * GET /api/submissions/:id — gönderimin güncel durumu ve sonucu.
 * Arayüz bunu sonuç gelene kadar saniyede bir çağırır (polling).
 */

import { NextResponse } from "next/server";
import db from "@/lib/db";
import type { JudgeLanguage, JudgeResult, SubmissionStatus, SubmissionView } from "@/features/judge";
import { currentDbUser, jsonError } from "@/lib/session-user";

const LANGUAGE_FROM_DB: Record<string, JudgeLanguage> = { CPP: "cpp", JAVA: "java", PYTHON: "python" };

/**
 * Aynı soru ve dildeki diğer kabul edilmiş çözümlerin yüzde kaçı bundan yavaş.
 * Eşit süreler yarım sayılır (çoğu kolay soru 0 ms sürdüğü için herkes %100 görmesin).
 */
async function runtimeBeatsPercent(submission: {
  id: string;
  problemId: string;
  language: "CPP" | "JAVA" | "PYTHON";
  kind: "RUN" | "SUBMIT";
  status: string;
  runtimeMs: number | null;
}): Promise<number | null> {
  if (submission.kind !== "SUBMIT" || submission.status !== "ACCEPTED" || submission.runtimeMs === null) return null;

  const others = {
    id: { not: submission.id },
    problemId: submission.problemId,
    language: submission.language,
    kind: "SUBMIT" as const,
    status: "ACCEPTED" as const,
  };
  const [total, slower, equal] = await Promise.all([
    db.submission.count({ where: { ...others, runtimeMs: { not: null } } }),
    db.submission.count({ where: { ...others, runtimeMs: { gt: submission.runtimeMs } } }),
    db.submission.count({ where: { ...others, runtimeMs: submission.runtimeMs } }),
  ]);
  if (total === 0) return null;
  return Math.round(((slower + equal / 2) / total) * 100);
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await currentDbUser();
  if (!user) return jsonError(401, "Giriş yapmalısın.");

  const submission = await db.submission.findUnique({
    where: { id },
    include: { solvedBy: true, problem: { select: { pointsAwarded: true } } },
  });
  // Başkasının gönderimini "bulunamadı" gibi gösteriyoruz.
  if (!submission || submission.userId !== user.id) return jsonError(404, "Gönderim bulunamadı.");

  const view: SubmissionView = {
    id: submission.id,
    problemSlug: submission.problemId,
    language: LANGUAGE_FROM_DB[submission.language],
    kind: submission.kind === "RUN" ? "run" : "submit",
    status: submission.status as SubmissionStatus,
    passedCount: submission.passedCount,
    totalCount: submission.totalCount,
    runtimeMs: submission.runtimeMs,
    result: (submission.result as unknown as JudgeResult | null) ?? null,
    pointsAwarded: submission.solvedBy ? submission.problem.pointsAwarded : 0,
    runtimeBeatsPercent: await runtimeBeatsPercent(submission),
    createdAt: submission.createdAt.toISOString(),
    judgedAt: submission.judgedAt?.toISOString() ?? null,
  };
  return NextResponse.json(view, { headers: { "Cache-Control": "no-store" } });
}

/**
 * POST /api/submissions — "Çalıştır" ve "Gönder" butonları buraya gelir.
 *   Kodu çalıştırmaz! Sadece gönderimi PENDING olarak kaydeder ve hemen 202 döner.
 *   Kodu judge-worker (npm run judge:worker) alıp çalıştırır; arayüz sonucu
 *   GET /api/submissions/:id ile sorar.
 *
 * GET /api/submissions?problem=<slug>&limit=20 — kullanıcının o sorudaki "Gönder" geçmişi.
 */

import { NextResponse } from "next/server";
import db from "@/lib/db";
import { logger } from "@/lib/logger";
import { getProblemBySlug } from "@/features/problems/service";
import type {
  CreateSubmissionRequest,
  CreateSubmissionResponse,
  JudgeLanguage,
  ListSubmissionsResponse,
  SubmissionStatus,
} from "@/features/judge";
import { currentDbUser, jsonError } from "@/lib/session-user";

const MAX_CODE_LENGTH = 64 * 1024;
const LANGUAGE_TO_DB = { cpp: "CPP", java: "JAVA", python: "PYTHON" } as const;
const LANGUAGE_FROM_DB: Record<string, JudgeLanguage> = { CPP: "cpp", JAVA: "java", PYTHON: "python" };
const DIFFICULTY_TO_DB = { kolay: "EASY", orta: "MEDIUM", zor: "HARD" } as const;

function parseBody(body: unknown): CreateSubmissionRequest | string {
  if (!body || typeof body !== "object") return "Geçersiz istek gövdesi.";
  const { problemSlug, language, code, kind } = body as Record<string, unknown>;
  if (typeof problemSlug !== "string" || !/^[a-z0-9-]+$/.test(problemSlug)) return "Geçersiz soru.";
  if (typeof language !== "string" || !(language in LANGUAGE_TO_DB)) return "Desteklenmeyen dil.";
  if (typeof code !== "string" || code.trim() === "") return "Kod boş olamaz.";
  if (code.length > MAX_CODE_LENGTH) return "Kod çok uzun (en fazla 64 KB).";
  if (kind !== "run" && kind !== "submit") return "kind 'run' ya da 'submit' olmalı.";
  return { problemSlug, language: language as JudgeLanguage, code, kind };
}

export async function POST(request: Request) {
  const user = await currentDbUser();
  if (!user) return jsonError(401, "Kod göndermek için giriş yapmalısın.");

  const parsed = parseBody(await request.json().catch(() => null));
  if (typeof parsed === "string") return jsonError(400, parsed);

  const problem = await getProblemBySlug(parsed.problemSlug);
  if (!problem) return jsonError(404, "Soru bulunamadı.");

  // Aynı anda tek bekleyen gönderim: kuyruğu tek kişinin doldurmasını engeller.
  const waiting = await db.submission.count({
    where: { userId: user.id, status: { in: ["PENDING", "RUNNING"] } },
  });
  if (waiting > 0) return jsonError(429, "Önceki gönderimin hâlâ değerlendiriliyor, birazdan tekrar dene.");

  // Sorular dosyadan okunuyor; Submission tablosu Problem tablosuna bağlı olduğu için
  // sorunun bir kopyasını (id = slug) veritabanında tutuyoruz.
  await db.problem.upsert({
    where: { id: problem.slug },
    update: { title: problem.title, pointsAwarded: problem.points },
    create: {
      id: problem.slug,
      title: problem.title,
      description: problem.description,
      difficulty: DIFFICULTY_TO_DB[problem.difficulty],
      category: problem.topics[0] ?? "Genel",
      starterCode: JSON.stringify(problem.starterCode),
      pointsAwarded: problem.points,
    },
  });

  const submission = await db.submission.create({
    data: {
      userId: user.id,
      problemId: problem.slug,
      code: parsed.code,
      language: LANGUAGE_TO_DB[parsed.language],
      kind: parsed.kind === "run" ? "RUN" : "SUBMIT",
      status: "PENDING",
    },
    select: { id: true },
  });

  logger.info("Submissions", "Yeni gönderim sıraya alındı", {
    id: submission.id,
    problem: problem.slug,
    language: parsed.language,
    kind: parsed.kind,
  });

  const response: CreateSubmissionResponse = { submissionId: submission.id };
  return NextResponse.json(response, { status: 202 });
}

export async function GET(request: Request) {
  const user = await currentDbUser();
  if (!user) return jsonError(401, "Gönderimlerini görmek için giriş yapmalısın.");

  const url = new URL(request.url);
  const problemSlug = url.searchParams.get("problem");
  if (!problemSlug || !/^[a-z0-9-]+$/.test(problemSlug)) return jsonError(400, "problem parametresi gerekli.");
  const limit = Math.min(50, Math.max(1, Number(url.searchParams.get("limit")) || 20));

  // "Çalıştır" denemeleri geçmişte gösterilmez, LeetCode'daki gibi sadece "Gönder"ler.
  const rows = await db.submission.findMany({
    where: { userId: user.id, problemId: problemSlug, kind: "SUBMIT" },
    orderBy: { createdAt: "desc" },
    take: limit,
    select: { id: true, status: true, language: true, runtimeMs: true, passedCount: true, totalCount: true, createdAt: true },
  });

  const response: ListSubmissionsResponse = {
    submissions: rows.map((row) => ({
      id: row.id,
      status: row.status as SubmissionStatus,
      language: LANGUAGE_FROM_DB[row.language],
      runtimeMs: row.runtimeMs,
      passedCount: row.passedCount,
      totalCount: row.totalCount,
      createdAt: row.createdAt.toISOString(),
    })),
  };
  return NextResponse.json(response, { headers: { "Cache-Control": "no-store" } });
}

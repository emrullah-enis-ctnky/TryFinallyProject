/**
 * ==============================================================================
 * TryFinally — Judge Worker
 * ==============================================================================
 * Next.js'ten ayrı çalışan süreç:  npm run judge:worker
 *
 * Döngü:
 *   1. Veritabanında status = PENDING olan en eski gönderimi bul
 *   2. Onu RUNNING yap (aynı anda iki worker aynı işi almasın diye koşullu güncelleme)
 *   3. Judge motoruyla çalıştır
 *   4. Sonucu yaz; "Gönder" ilk kez ACCEPTED olduysa puanı ver
 *   5. Kuyruk boşsa yarım saniye bekle, başa dön
 * ==============================================================================
 */

import { existsSync } from "node:fs";
import type { Prisma } from "@prisma/client";

// Next.js .env.local'ı kendisi okur ama bu ayrı bir süreç; ayarları (DATABASE_URL, JUDGE_*) biz yüklüyoruz.
// Veritabanı bağlantısı kurulmadan ÖNCE çalışmalı, bu yüzden db main() içinde dinamik import ediliyor.
for (const file of [".env.local", ".env"]) {
  if (existsSync(file)) process.loadEnvFile(file);
}
let db: (typeof import("../src/lib/db.ts"))["default"];
import { logger } from "../src/lib/logger.ts";
import type { JudgeLanguage, JudgeResult, SubmissionKind } from "../src/features/judge/types.ts";
import { judge, loadJudgeProblem, sandboxModeFromEnv, testsFor } from "./engine/index.ts";

const LANGUAGE_FROM_DB: Record<string, JudgeLanguage> = { CPP: "cpp", JAVA: "java", PYTHON: "python" };
/** Aynı anda kaç gönderim çalıştırılsın. Her biri bir Docker konteyneri demek. */
const CONCURRENCY = Math.max(1, Number(process.env.JUDGE_CONCURRENCY ?? 2));
const IDLE_WAIT_MS = 500;

let stopping = false;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Sıradaki gönderimi alır. Başka bir döngü kaptıysa null döner. */
async function claimNext(): Promise<string | null> {
  const next = await db.submission.findFirst({
    where: { status: "PENDING" },
    orderBy: { createdAt: "asc" },
    select: { id: true },
  });
  if (!next) return null;

  // Sadece hâlâ PENDING ise RUNNING yap. count 0 ise başka bir döngü bizden önce aldı.
  const { count } = await db.submission.updateMany({
    where: { id: next.id, status: "PENDING" },
    data: { status: "RUNNING" },
  });
  return count === 1 ? next.id : null;
}

function internalResult(totalCount: number, message: string): JudgeResult {
  return { verdict: "INTERNAL_ERROR", passedCount: 0, totalCount, runtimeMs: null, tests: [], internalMessage: message };
}

async function processSubmission(submissionId: string): Promise<void> {
  const submission = await db.submission.findUniqueOrThrow({ where: { id: submissionId } });
  const language = LANGUAGE_FROM_DB[submission.language];
  const kind: SubmissionKind = submission.kind === "RUN" ? "run" : "submit";
  const problem = await loadJudgeProblem(submission.problemId);

  let result: JudgeResult;
  if (!problem) {
    result = internalResult(0, `Soru dosyaları bulunamadı: problems/${submission.problemId}`);
  } else if (!language || !problem.starterCode[language]) {
    result = internalResult(0, `Bu soru ${submission.language} dilini desteklemiyor.`);
  } else {
    result = await judge({
      language,
      code: submission.code,
      starterCode: problem.starterCode[language],
      tests: testsFor(problem, kind),
    });
  }

  let pointsAwarded = 0;
  await db.$transaction(async (tx) => {
    await tx.submission.update({
      where: { id: submissionId },
      data: {
        status: result.verdict,
        passedCount: result.passedCount,
        totalCount: result.totalCount,
        runtimeMs: result.runtimeMs,
        // undefined alanları temizlemek için JSON'a çevirip geri okuyoruz
        result: JSON.parse(JSON.stringify(result)) as Prisma.InputJsonValue,
        judgedAt: new Date(),
      },
    });

    // Puan sadece "Gönder" ile ve bu soruyu İLK kez çözünce verilir.
    // SolvedProblem'de (userId, problemId) tekil olduğu için ikinci kayıt atlanır (count = 0).
    if (kind === "submit" && result.verdict === "ACCEPTED" && problem) {
      const { count } = await tx.solvedProblem.createMany({
        data: [{ userId: submission.userId, problemId: submission.problemId, submissionId }],
        skipDuplicates: true,
      });
      if (count === 1) {
        pointsAwarded = problem.points;
        await tx.user.update({
          where: { id: submission.userId },
          data: { totalPoints: { increment: problem.points } },
        });
      }
    }
  });

  logger.info("Judge", `${submissionId} -> ${result.verdict}`, {
    problem: submission.problemId,
    language,
    kind,
    passed: `${result.passedCount}/${result.totalCount}`,
    runtimeMs: result.runtimeMs,
    pointsAwarded,
  });
}

async function workerLoop(index: number): Promise<void> {
  while (!stopping) {
    let submissionId: string | null = null;
    try {
      submissionId = await claimNext();
      if (!submissionId) {
        await sleep(IDLE_WAIT_MS);
        continue;
      }
      await processSubmission(submissionId);
    } catch (error) {
      logger.error("Judge", `Döngü ${index}: gönderim işlenemedi`, error);
      if (submissionId) {
        // Kullanıcı sonsuza kadar "çalışıyor" görmesin.
        await db.submission
          .update({
            where: { id: submissionId },
            data: {
              status: "INTERNAL_ERROR",
              result: JSON.parse(JSON.stringify(internalResult(0, "Judge bu gönderimi işlerken hata oluştu."))),
              judgedAt: new Date(),
            },
          })
          .catch(() => undefined);
      }
      await sleep(2000);
    }
  }
}

async function main(): Promise<void> {
  db = (await import("../src/lib/db.ts")).default;
  const mode = sandboxModeFromEnv();
  logger.info("Judge", `Worker başlıyor (mod: ${mode}, aynı anda ${CONCURRENCY} gönderim)`);
  if (mode === "local") {
    logger.warn("Judge", "JUDGE_SANDBOX=local: kullanıcı kodu İZOLASYONSUZ çalışacak. Sadece geliştirme için kullanın.");
  }

  // Worker önceki çalışmasında yarıda kaldıysa, RUNNING kalan gönderimleri sıraya geri koy.
  const { count } = await db.submission.updateMany({ where: { status: "RUNNING" }, data: { status: "PENDING" } });
  if (count > 0) logger.warn("Judge", `${count} yarım kalmış gönderim tekrar sıraya alındı`);

  const shutdown = () => {
    if (stopping) return;
    stopping = true;
    logger.info("Judge", "Kapanıyor, çalışan gönderimler bitince çıkılacak...");
  };
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  await Promise.all(Array.from({ length: CONCURRENCY }, (_, index) => workerLoop(index + 1)));
  await db.$disconnect();
}

main().catch(async (error) => {
  logger.error("Judge", "Worker başlatılamadı", error);
  await db?.$disconnect().catch(() => undefined);
  process.exit(1);
});

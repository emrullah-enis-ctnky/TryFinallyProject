
/**
 * ==============================================================================
 * TryFinally — İlk Başarılı Çözüm Entegrasyon Testi
 * ==============================================================================
 * Judge'ın başarılı çözüm sonrasında kullandığı veritabanı akışını
 * geçici test kayıtlarıyla simüle eder.
 *
 * İlk çözümde puan, seviye ve rozetlerin güncellendiğini kontrol eder.
 * Aynı problem tekrar çözülürse ikinci kez ödül verilmediğini doğrular.
 *
 * Gerçek Judge motorunu çalıştırmaz.
 * ==============================================================================
 */

import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import test from "node:test";

// Veritabanına bağlanmadan önce ortam değişkenlerini yükle.
for (const file of [".env.local", ".env"]) {
  if (existsSync(file)) {
    process.loadEnvFile(file);
  }
}

/**
 * TC-GAM-04 — İlk başarılı çözüm ve tekrarlanan çözüm kontrolü
 */
test("TC-GAM-04: ilk başarılı çözüm ödüllendirilir, tekrarında ödül verilmez", async () => {
  const { default: db } = await import("../../src/lib/db");

  const { updateGamificationProgress } = await import(
    "../../src/features/gamification/progress-service"
  );

  // Teste özel benzersiz kullanıcı ve problem kimlikleri.
  const userId = `gamification-user-${randomUUID()}`;
  const problemId = `gamification-problem-${randomUUID()}`;
  const problemPoints = 120;

  try {
    // Geçici kullanıcı ve problem kayıtlarını oluştur.
    await db.user.create({
      data: {
        id: userId,
        name: "Gamification Integration Test",
        totalPoints: 0,
        level: 1,
      },
    });

    await db.problem.create({
      data: {
        id: problemId,
        title: "Gamification Test Problemi",
        description: "Yalnızca entegrasyon testi için oluşturulmuştur.",
        difficulty: "EASY",
        category: "Test",
        starterCode: "",
        pointsAwarded: problemPoints,
      },
    });

    /**
     * Judge'ın ilk başarılı çözüm işlem sırasını simüle eder.
     *
     * Problem ilk kez çözülmüşse:
     * 1. SolvedProblem kaydı oluşturulur.
     * 2. Kullanıcının puanı artırılır.
     * 3. Seviye ve rozetler güncellenir.
     */
    async function registerAcceptedSolution(submissionId: string) {
      return db.$transaction(async (tx) => {
        const { count } = await tx.solvedProblem.createMany({
          data: [
            {
              userId,
              problemId,
              submissionId,
            },
          ],
          skipDuplicates: true,
        });

        // Problem daha önce çözülmüşse yeni ödül verme.
        if (count === 0) {
          return {
            firstSolve: false,
            progress: null,
          };
        }

        // İlk başarılı çözümün puanlarını ekle.
        await tx.user.update({
          where: { id: userId },
          data: {
            totalPoints: {
              increment: problemPoints,
            },
          },
        });

        // Kendi gamification servisimizi aynı transaction içinde çağır.
        const progress = await updateGamificationProgress(tx, userId);

        return {
          firstSolve: true,
          progress,
        };
      });
    }

    // ==============================================================
    // SENARYO 1 — Problem ilk kez başarıyla çözülüyor.
    // ==============================================================

    const firstSubmission = await db.submission.create({
      data: {
        userId,
        problemId,
        code: "print('test')",
        language: "PYTHON",
        kind: "SUBMIT",
        status: "ACCEPTED",
      },
    });

    const firstResult = await registerAcceptedSolution(firstSubmission.id);

    // İlk çözümün başarıyla kaydedildiğini kontrol et.
    assert.equal(firstResult.firstSolve, true);

    // Kullanıcı 120 puana ve seviye 2'ye ulaşmış olmalı.
    assert.equal(firstResult.progress?.totalPoints, 120);
    assert.equal(firstResult.progress?.currentLevel, 2);

    // İlk çözüm ve 100 puan için iki rozet kazanılmalı.
    assert.equal(firstResult.progress?.newlyUnlockedCount, 2);
    assert.equal(firstResult.progress?.totalUnlockedCount, 2);

    // Veritabanındaki gerçek kullanıcı bilgilerini doğrula.
    const savedUser = await db.user.findUniqueOrThrow({
      where: { id: userId },
      select: {
        totalPoints: true,
        level: true,
      },
    });

    assert.equal(savedUser.totalPoints, 120);
    assert.equal(savedUser.level, 2);

    // Kazanılan rozetleri kontrol et.
    const savedBadges = await db.userAchievement.findMany({
      where: { userId },
      select: {
        achievementId: true,
      },
    });

    assert.deepEqual(
      savedBadges.map((badge) => badge.achievementId).sort(),
      ["badge-first-code", "badge-hundred-points"].sort()
    );

    console.log(
      "TC-GAM-04: İlk çözümde puan, seviye ve rozetler doğru güncellendi."
    );

    // ==============================================================
    // SENARYO 2 — Aynı problem tekrar başarıyla çözülüyor.
    // ==============================================================

    const secondSubmission = await db.submission.create({
      data: {
        userId,
        problemId,
        code: "print('second test')",
        language: "PYTHON",
        kind: "SUBMIT",
        status: "ACCEPTED",
      },
    });

    const secondResult = await registerAcceptedSolution(secondSubmission.id);

    // Daha önce çözüldüğü için yeniden ödüllendirilmemeli.
    assert.equal(secondResult.firstSolve, false);
    assert.equal(secondResult.progress, null);

    // Puan ve seviye değişmemeli.
    const finalUser = await db.user.findUniqueOrThrow({
      where: { id: userId },
      select: {
        totalPoints: true,
        level: true,
      },
    });

    assert.equal(finalUser.totalPoints, 120);
    assert.equal(finalUser.level, 2);

    // Benzersiz çözüm sayısı hâlâ bir olmalı.
    const solvedCount = await db.solvedProblem.count({
      where: { userId },
    });

    assert.equal(solvedCount, 1);

    // Rozet sayısı da iki olarak kalmalı.
    const badgeCount = await db.userAchievement.count({
      where: { userId },
    });

    assert.equal(badgeCount, 2);

    console.log(
      "TC-GAM-04: Aynı problem tekrar çözüldüğünde ikinci kez ödül verilmedi."
    );
  } finally {
    // Test kayıtlarını ilişki sırasına uygun şekilde temizle.
    try {
      await db.userAchievement.deleteMany({
        where: { userId },
      });

      await db.solvedProblem.deleteMany({
        where: { userId },
      });

      await db.submission.deleteMany({
        where: { userId },
      });

      await db.problem.deleteMany({
        where: { id: problemId },
      });

      await db.user.deleteMany({
        where: { id: userId },
      });
    } finally {
      await db.$disconnect();
    }
  }
});

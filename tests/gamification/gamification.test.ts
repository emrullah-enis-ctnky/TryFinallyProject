
/**
 * ==============================================================================
 * TryFinally — Gamification Tests
 * ==============================================================================
 * Seviye hesaplama, rozet koşulları ve veritabanı
 * senkronizasyonunu doğrular.
 * ==============================================================================
 */

import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import test from "node:test";

import { getLevelInfo } from "../../src/features/gamification/levels";
import { getEligibleAchievements } from "../../src/features/gamification/achievements";

// Yerel test veritabanı bağlantısını yükle.
for (const file of [".env", ".env.local"]) {
  if (existsSync(file)) {
    process.loadEnvFile(file);
  }
}

/**
 * TC-GAM-01 — Seviye hesaplama
 */
test("TC-GAM-01: puana göre seviye doğru hesaplanır", () => {
  assert.equal(getLevelInfo(0).level, 1);
  assert.equal(getLevelInfo(99).level, 1);
  assert.equal(getLevelInfo(100).level, 2);
  assert.equal(getLevelInfo(145).level, 2);
  assert.equal(getLevelInfo(200).level, 3);

  assert.equal(getLevelInfo(145).progressPercent, 45);
  assert.equal(getLevelInfo(145).pointsRemaining, 55);
});

/**
 * TC-GAM-02 — Rozet koşulları
 */
test("TC-GAM-02: doğru rozetler belirlenir", () => {
  const initialBadges = getEligibleAchievements({
    totalPoints: 0,
    solvedProblemsCount: 0,
  });

  assert.equal(initialBadges.length, 0);

  const firstBadges = getEligibleAchievements({
    totalPoints: 10,
    solvedProblemsCount: 1,
  });

  assert.deepEqual(
    firstBadges.map((badge) => badge.id),
    ["badge-first-code"]
  );

  const allBadges = getEligibleAchievements({
    totalPoints: 150,
    solvedProblemsCount: 10,
  });

  assert.equal(allBadges.length, 4);
});

/**
 * TC-GAM-03 — Seviye ve rozetlerin veritabanında güncellenmesi
 */
test("TC-GAM-03: ilerleme kaydedilir ve rozet tekrarlanmaz", async () => {
  const { default: db } = await import("../../src/lib/db");

  const { syncUserGamification } = await import(
    "../../src/features/gamification/progress-service"
  );

  const testUserId = `gamification-ms2-${randomUUID()}`;

  try {
    // Geçici test kullanıcısı oluştur.
    await db.user.create({
      data: {
        id: testUserId,
        name: "Gamification MS2 Test",
        totalPoints: 0,
        level: 1,
      },
    });

    // Başlangıçta seviye 1 ve rozet sayısı 0 olmalı.
    const initialResult = await syncUserGamification(testUserId);

    assert.equal(initialResult.currentLevel, 1);
    assert.equal(initialResult.totalUnlockedCount, 0);

    // Kullanıcıya test amacıyla 145 puan ver.
    await db.user.update({
      where: { id: testUserId },
      data: {
        totalPoints: 145,
      },
    });

    // Seviye 2 olmalı ve Puan Avcısı rozeti kazanılmalı.
    const firstResult = await syncUserGamification(testUserId);

    assert.equal(firstResult.previousLevel, 1);
    assert.equal(firstResult.currentLevel, 2);
    assert.equal(firstResult.levelChanged, true);
    assert.equal(firstResult.newlyUnlockedCount, 1);
    assert.equal(firstResult.totalUnlockedCount, 1);

    // Gerçek veritabanı değerlerini doğrula.
    const savedUser = await db.user.findUniqueOrThrow({
      where: { id: testUserId },
      select: {
        totalPoints: true,
        level: true,
      },
    });

    assert.equal(savedUser.totalPoints, 145);
    assert.equal(savedUser.level, 2);

    const savedBadges = await db.userAchievement.findMany({
      where: { userId: testUserId },
    });

    assert.equal(savedBadges.length, 1);
    assert.equal(
      savedBadges[0].achievementId,
      "badge-hundred-points"
    );

    // İkinci çalıştırmada rozet tekrar verilmemeli.
    const secondResult = await syncUserGamification(testUserId);

    assert.equal(secondResult.levelChanged, false);
    assert.equal(secondResult.newlyUnlockedCount, 0);
    assert.equal(secondResult.totalUnlockedCount, 1);
  } finally {
    // Geçici test kayıtlarını temizle.
    try {
      await db.userAchievement.deleteMany({
        where: { userId: testUserId },
      });

      await db.user.deleteMany({
        where: { id: testUserId },
      });
    } finally {
      await db.$disconnect();
    }
  }
});

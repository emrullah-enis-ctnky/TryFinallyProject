
/**
 * ==============================================================================
 * TryFinally — Başarım Kayıt Servisi
 * ==============================================================================
 * Kullanıcının güncel istatistiklerini veritabanından okur.
 * Kazanmaya hak kazandığı rozetleri belirler ve veritabanına kaydeder.
 *
 * Aynı rozet kullanıcıya birden fazla kez verilmez.
 * ==============================================================================
 */

import type { Prisma } from "@prisma/client";
import db from "@/lib/db";

import {
  ACHIEVEMENT_DEFINITIONS,
  getEligibleAchievements,
} from "./achievements";

/**
 * Rozet kayıt işleminin sonuç bilgileri.
 */
export interface AchievementSyncResult {
  eligibleAchievementIds: string[];
  newlyUnlockedCount: number;
  totalUnlockedCount: number;
}

/**
 * Bir kullanıcının rozetlerini mevcut transaction içerisinde günceller.
 *
 * Bu fonksiyon Judge tarafından da ileride kullanılabilir.
 */
export async function awardEligibleAchievements(
  tx: Prisma.TransactionClient,
  userId: string
): Promise<AchievementSyncResult> {
  // Kullanıcının güncel toplam puanını getir.
  const user = await tx.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      totalPoints: true,
    },
  });

  if (!user) {
    throw new Error("Rozet işlemi için kullanıcı bulunamadı.");
  }

  // Kullanıcının çözdüğü farklı problem sayısını getir.
  const solvedProblemsCount = await tx.solvedProblem.count({
    where: { userId },
  });

  // Kazanılabilecek rozetleri belirle.
  const eligibleAchievements = getEligibleAchievements({
    totalPoints: user.totalPoints,
    solvedProblemsCount,
  });

  // Sistemdeki rozet tanımlarını veritabanına kaydet veya güncelle.
  for (const achievement of ACHIEVEMENT_DEFINITIONS) {
    await tx.achievement.upsert({
      where: {
        id: achievement.id,
      },
      create: {
        id: achievement.id,
        name: achievement.name,
        description: achievement.description,
        icon: achievement.icon,
      },
      update: {
        name: achievement.name,
        description: achievement.description,
        icon: achievement.icon,
      },
    });
  }

  // Kullanıcının hak kazandığı rozetleri hazırla.
  const achievementRecords = eligibleAchievements.map((achievement) => ({
    userId,
    achievementId: achievement.id,
  }));

  // Yalnızca daha önce bulunmayan kullanıcı-rozet kayıtlarını ekle.
  let newlyUnlockedCount = 0;

  if (achievementRecords.length > 0) {
    const result = await tx.userAchievement.createMany({
      data: achievementRecords,
      skipDuplicates: true,
    });

    newlyUnlockedCount = result.count;
  }

  // Kullanıcının kayıtlı toplam rozet sayısını getir.
  const totalUnlockedCount = await tx.userAchievement.count({
    where: { userId },
  });

  return {
    eligibleAchievementIds: eligibleAchievements.map(
      (achievement) => achievement.id
    ),
    newlyUnlockedCount,
    totalUnlockedCount,
  };
}

/**
 * Kullanıcının rozetlerini bağımsız bir transaction içinde günceller.
 *
 * Judge entegrasyonundan önce bu fonksiyonla kayıt işlemini
 * ayrı olarak test edebiliriz.
 */
export async function syncUserAchievements(
  userId: string
): Promise<AchievementSyncResult> {
  return db.$transaction(async (tx) => {
    return awardEligibleAchievements(tx, userId);
  });
}

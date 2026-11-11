
/**
 * ==============================================================================
 * TryFinally — Oyunlaştırma İlerleme Servisi
 * ==============================================================================
 * Kullanıcının toplam puanına göre seviyesini günceller.
 * Kazanmaya hak kazandığı rozetleri kontrol eder ve kaydeder.
 *
 * Seviye ve rozet işlemleri aynı transaction içinde gerçekleştirilir.
 * ==============================================================================
 */

import type { Prisma } from "@prisma/client";
import db from "@/lib/db";

import { getLevelInfo } from "./levels";
import { awardEligibleAchievements } from "./achievement-service";

/**
 * İlerleme güncellemesinin sonuç bilgileri.
 */
export interface GamificationProgressResult {
  totalPoints: number;
  previousLevel: number;
  currentLevel: number;
  levelChanged: boolean;
  newlyUnlockedCount: number;
  totalUnlockedCount: number;
}

/**
 * Oyunlaştırma ilerlemesini mevcut transaction içinde günceller.
 *
 * İleride Judge'ın başarılı çözüm transaction'ında da
 * kullanılabilecek şekilde hazırlanmıştır.
 */
export async function updateGamificationProgress(
  tx: Prisma.TransactionClient,
  userId: string
): Promise<GamificationProgressResult> {
  // Kullanıcının güncel puanını ve kayıtlı seviyesini getir.
  const user = await tx.user.findUnique({
    where: { id: userId },
    select: {
      totalPoints: true,
      level: true,
    },
  });

  if (!user) {
    throw new Error("Oyunlaştırma işlemi için kullanıcı bulunamadı.");
  }

  // Kullanıcının olması gereken seviyesini hesapla.
  const levelInfo = getLevelInfo(user.totalPoints);
  const currentLevel = levelInfo.level;
  const levelChanged = user.level !== currentLevel;

  // Kayıtlı seviye farklıysa veritabanında güncelle.
  if (levelChanged) {
    await tx.user.update({
      where: { id: userId },
      data: {
        level: currentLevel,
      },
    });
  }

  // Kullanıcının hak kazandığı rozetleri kontrol et ve kaydet.
  const achievementResult = await awardEligibleAchievements(tx, userId);

  return {
    totalPoints: user.totalPoints,
    previousLevel: user.level,
    currentLevel,
    levelChanged,
    newlyUnlockedCount: achievementResult.newlyUnlockedCount,
    totalUnlockedCount: achievementResult.totalUnlockedCount,
  };
}

/**
 * Oyunlaştırma ilerlemesini bağımsız bir transaction ile günceller.
 *
 * Bu fonksiyon, Judge entegrasyonundan bağımsız olarak
 * geliştirme ve test amacıyla kullanılabilir.
 */
export async function syncUserGamification(
  userId: string
): Promise<GamificationProgressResult> {
  return db.$transaction(async (tx) => {
    return updateGamificationProgress(tx, userId);
  });
}

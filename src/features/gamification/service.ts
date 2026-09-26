/**
 * ==============================================================================
 * TryFinally — Oyunlaştırma Servisi (Gamification Service)
 * ==============================================================================
 * Puan hesaplama, seri takibi ve rozet kazanım kuralları.
 * ==============================================================================
 */

import { logger } from "@/lib/logger";
import type { UserStats } from "./types";

const MOCK_USER_STATS: UserStats = {
  userId: "user-current",
  totalPoints: 120,
  solvedPuzzlesCount: 12,
  currentStreakDays: 4,
  longestStreakDays: 7,
  forumReputation: 35,
  badges: [
    {
      id: "badge-first-code",
      name: "İlk Kod",
      description: "İlk algoritma problemini başarıyla çözdün.",
      icon: "Code",
      category: "cozum",
      unlockedAt: new Date().toISOString(),
    },
    {
      id: "badge-streak-3",
      name: "İstikrarlı Geliştirici",
      description: "3 gün üst üste kodlama pratiği yaptın.",
      icon: "Flame",
      category: "streak",
      unlockedAt: new Date().toISOString(),
    },
  ],
};

/**
 * Kullanıcı istatistiklerini getirir.
 */
export async function getUserStats(): Promise<UserStats> {
  logger.info("Gamification", "Kullanıcı istatistikleri yükleniyor");
  return Promise.resolve(MOCK_USER_STATS);
}

/**
 * ==============================================================================
 * TryFinally — Oyunlaştırma Tip Tanımları (Gamification Types)
 * ==============================================================================
 * Puanlar, seriler (streaks), rozetler ve kullanıcı istatistikleri.
 * ==============================================================================
 */

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  category: "cozum" | "streak" | "forum" | "ogrenme";
}

export interface UserStats {
  userId: string;
  totalPoints: number;
  solvedProblemsCount: number;
  currentStreakDays: number;
  longestStreakDays: number;
  forumReputation: number;
  badges: Badge[];
}

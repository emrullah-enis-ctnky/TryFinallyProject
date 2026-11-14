
/**
 * ==============================================================================
 * TryFinally — Profil İstatistikleri Servisi
 * ==============================================================================
 * Kullanıcının puan, çözüm geçmişi ve kazanılan rozet bilgilerini
 * PostgreSQL veritabanından getirir.
 * ==============================================================================
 */

import db from "@/lib/db";
import { logger } from "@/lib/logger";

/**
 * Profil sayfasında gösterilecek kazanılmış rozet.
 */
export interface ProfileBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

/**
 * Kullanıcının başarıyla çözdüğü bir problem.
 */
export interface RecentSolvedProblem {
  problemId: string;
  title: string;
  language: "C++" | "Java" | "Python";
  solvedAt: string;
}

/**
 * Profil sayfasının ihtiyaç duyduğu istatistikler.
 */
export interface ProfileStats {
  totalPoints: number;
  level: number;
  solvedProblemsCount: number;
  badges: ProfileBadge[];
  recentSolutions: RecentSolvedProblem[];
}

const LANGUAGE_LABELS = {
  CPP: "C++",
  JAVA: "Java",
  PYTHON: "Python",
} as const;

/**
 * Kullanıcının gerçek profil istatistiklerini getirir.
 *
 * Kullanıcı bulunamazsa null döndürür.
 */
export async function getProfileStats(
  userId: string
): Promise<ProfileStats | null> {
  logger.info("Gamification", "Profil istatistikleri yükleniyor");

  const [user, solvedProblemsCount, recentSolutions, achievements] =
    await Promise.all([
      // Kullanıcının toplam puanı ve seviyesi
      db.user.findUnique({
        where: { id: userId },
        select: {
          totalPoints: true,
          level: true,
        },
      }),

      // Kullanıcının ilk kez başarıyla çözdüğü problem sayısı
      db.solvedProblem.count({
        where: { userId },
      }),

      // Son çözülen 5 problem
      db.solvedProblem.findMany({
        where: { userId },
        orderBy: { solvedAt: "desc" },
        take: 5,
        select: {
          problemId: true,
          solvedAt: true,
          problem: {
            select: {
              title: true,
            },
          },
          submission: {
            select: {
              language: true,
            },
          },
        },
      }),

      // Kullanıcının kazandığı rozetler
      db.userAchievement.findMany({
        where: { userId },
        orderBy: { unlockedAt: "desc" },
        select: {
          unlockedAt: true,
          achievement: {
            select: {
              id: true,
              name: true,
              description: true,
              icon: true,
            },
          },
        },
      }),
    ]);

  if (!user) {
    return null;
  }

  return {
    totalPoints: user.totalPoints,
    level: user.level,
    solvedProblemsCount,

    badges: achievements.map((item) => ({
      id: item.achievement.id,
      name: item.achievement.name,
      description: item.achievement.description,
      icon: item.achievement.icon,
      unlockedAt: item.unlockedAt.toISOString(),
    })),

    recentSolutions: recentSolutions.map((item) => ({
      problemId: item.problemId,
      title: item.problem.title,
      language: LANGUAGE_LABELS[item.submission.language],
      solvedAt: item.solvedAt.toISOString(),
    })),
  };
}

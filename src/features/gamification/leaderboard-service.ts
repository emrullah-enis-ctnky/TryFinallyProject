/**
 * ==============================================================================
 * TryFinally — Liderlik Tablosu Servisi
 * ==============================================================================
 * Kullanıcıları toplam puanlarına göre sıralar. Eşit puanlarda kullanıcı ID'si
 * esas alınır; böylece sıralama her sorguda aynı kalır.
 * ==============================================================================
 */

import db from "@/lib/db";

const LEADERBOARD_LIMIT = 20;

type RankedUser = {
  id: string;
  name: string | null;
  totalPoints: number;
  level: number;
};

export interface LeaderboardEntry {
  id: string;
  name: string;
  totalPoints: number;
  level: number;
  rank: number;
  isCurrentUser: boolean;
}

export interface LeaderboardData {
  entries: LeaderboardEntry[];
  totalUsers: number;
  currentUser: LeaderboardEntry | null;
}

function toEntry(
  user: RankedUser,
  rank: number,
  currentUserId?: string
): LeaderboardEntry {
  return {
    id: user.id,
    name: user.name?.trim() || "TryFinally Kullanıcısı",
    totalPoints: user.totalPoints,
    level: user.level,
    rank,
    isCurrentUser: user.id === currentUserId,
  };
}

/**
 * En yüksek puanlı 20 kullanıcıyı ve giriş yapan kullanıcının sırasını getirir.
 * E-posta adresleri veya diğer özel kullanıcı bilgileri dışarı aktarılmaz.
 */
export async function getLeaderboard(
  currentUserEmail?: string | null
): Promise<LeaderboardData> {
  const [users, totalUsers, currentUser] = await Promise.all([
    db.user.findMany({
      orderBy: [{ totalPoints: "desc" }, { id: "asc" }],
      take: LEADERBOARD_LIMIT,
      select: { id: true, name: true, totalPoints: true, level: true },
    }),
    db.user.count(),
    currentUserEmail
      ? db.user.findUnique({
          where: { email: currentUserEmail },
          select: { id: true, name: true, totalPoints: true, level: true },
        })
      : Promise.resolve(null),
  ]);

  const entries = users.map((user, index) =>
    toEntry(user, index + 1, currentUser?.id)
  );

  // Kullanıcı ilk 20'deyse kendi sırasını zaten biliyoruz.
  let currentUserEntry =
    entries.find((entry) => entry.isCurrentUser) ?? null;

  if (currentUser && !currentUserEntry) {
    // Eşit puanlı kullanıcıları da ID'ye göre sıralıyoruz.
    const usersAhead = await db.user.count({
      where: {
        OR: [
          { totalPoints: { gt: currentUser.totalPoints } },
          {
            totalPoints: currentUser.totalPoints,
            id: { lt: currentUser.id },
          },
        ],
      },
    });

    currentUserEntry = toEntry(
      currentUser,
      usersAhead + 1,
      currentUser.id
    );
  }

  return { entries, totalUsers, currentUser: currentUserEntry };
}

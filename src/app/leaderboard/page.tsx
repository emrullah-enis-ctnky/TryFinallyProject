import type { Metadata } from "next";
import Link from "next/link";
import { Crown, Medal, Trophy, Users, ArrowRight } from "lucide-react";

import { auth } from "@/auth";
import { getLeaderboard } from "@/features/gamification/leaderboard-service";

export const metadata: Metadata = {
  title: "Liderlik Tablosu | TryFinally",
  description: "En çok puan kazanan TryFinally kullanıcılarını keşfet.",
};

// Puanlar değiştiğinde sıralama da güncel veritabanından okunmalı.
export const dynamic = "force-dynamic";

const podiumColors = [
  "border-amber-400/40 bg-amber-400/5",
  "border-slate-400/40 bg-slate-400/5",
  "border-orange-400/40 bg-orange-400/5",
];

const medalColors = ["text-amber-400", "text-slate-300", "text-orange-400"];

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toLocaleUpperCase("tr-TR"))
    .join("");
}

export default async function LeaderboardPage() {
  const session = await auth();
  const { entries, totalUsers, currentUser } = await getLeaderboard(
    session?.user?.email
  );

  const topThree = entries.slice(0, 3);
  const remainingUsers = entries.slice(3);

  return (
    <div className="space-y-8">
      {/* Sayfa başlığı */}
      <section className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="flex items-center gap-3 text-3xl font-extrabold text-foreground">
            <Trophy className="h-8 w-8 text-accent" />
            <span>Liderlik Tablosu</span>
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Problem çözerek puan kazan, seviyeni yükselt ve topluluktaki yerini gör.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
          <Users className="h-4 w-4 text-primary" />
          <span>{totalUsers} kullanıcı</span>
        </div>
      </section>

      {entries.length === 0 ? (
        <section className="rounded-lg border border-dashed border-border bg-surface px-6 py-14 text-center">
          <Trophy className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
          <h2 className="text-lg font-bold text-foreground">
            Henüz sıralamada kullanıcı bulunmuyor.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            İlk problemini çözerek liderlik tablosunda yerini alabilirsin.
          </p>
        </section>
      ) : (
        <>
          {/* İlk üç sıradaki kullanıcılar */}
          <section aria-labelledby="top-three-title" className="space-y-4">
            <h2 id="top-three-title" className="text-lg font-bold text-foreground">
              En Başarılı Kullanıcılar
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {topThree.map((user, index) => (
                <div
                  key={user.id}
                  className={`rounded-lg border p-5 text-center shadow-sm ${podiumColors[index]}`}
                >
                  <div className="mb-3 flex items-center justify-center gap-2">
                    {index === 0 ? (
                      <Crown className={`h-6 w-6 ${medalColors[index]}`} />
                    ) : (
                      <Medal className={`h-6 w-6 ${medalColors[index]}`} />
                    )}
                    <span className="text-sm font-bold text-foreground">
                      {user.rank}. sıra
                    </span>
                  </div>
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/15 text-lg font-bold text-primary">
                    {getInitials(user.name)}
                  </div>
                  <p className="break-words font-bold text-foreground">
                    {user.name}
                    {user.isCurrentUser && (
                      <span className="ml-2 text-xs font-semibold text-accent">
                        (Sen)
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Seviye {user.level}
                  </p>
                  <p className="mt-3 text-xl font-extrabold text-primary">
                    {user.totalPoints.toLocaleString("tr-TR")}
                    <span className="ml-1 text-xs font-medium text-muted-foreground">
                      puan
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Dördüncü sıradan itibaren diğer kullanıcılar */}
          {remainingUsers.length > 0 && (
            <section className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
              <div className="border-b border-border px-5 py-4">
                <h2 className="font-bold text-foreground">Diğer Sıralamalar</h2>
              </div>
              <ol className="divide-y divide-border">
                {remainingUsers.map((user) => (
                  <li
                    key={user.id}
                    className={`flex items-center gap-3 px-4 py-4 sm:px-5 ${
                      user.isCurrentUser ? "bg-primary/10" : ""
                    }`}
                  >
                    <span className="w-9 shrink-0 text-center text-sm font-bold text-muted-foreground">
                      {user.rank}.
                    </span>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                      {getInitials(user.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {user.name}
                        {user.isCurrentUser && (
                          <span className="ml-2 text-xs text-accent">(Sen)</span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Seviye {user.level}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-primary">
                      {user.totalPoints.toLocaleString("tr-TR")} puan
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* İlk 20 dışında kalan kullanıcının kendi sırası */}
          {currentUser && currentUser.rank > entries.length && (
            <section className="flex items-center gap-4 rounded-lg border border-primary/40 bg-primary/10 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
                {currentUser.rank}.
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-foreground">Senin Sıralaman</h2>
                <p className="text-sm text-muted-foreground">
                  {currentUser.name} · Seviye {currentUser.level}
                </p>
              </div>
              <span className="shrink-0 text-sm font-bold text-primary">
                {currentUser.totalPoints.toLocaleString("tr-TR")} puan
              </span>
            </section>
          )}

          {currentUser && currentUser.rank <= entries.length && (
            <p className="text-center text-sm text-muted-foreground">
              Senin sıran: <strong className="text-primary">{currentUser.rank}.</strong>
            </p>
          )}
        </>
      )}

      {/* Kullanıcıları daha fazla problem çözmeye yönlendir */}
      <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-secondary/30 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="font-bold text-foreground">Sıralamada yükselmeye hazır mısın?</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Yeni problemler çözerek puanını artırabilirsin.
          </p>
        </div>
        <Link
          href={session?.user ? "/problems" : "/login"}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {session?.user ? "Problem Çöz" : "Giriş Yap"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

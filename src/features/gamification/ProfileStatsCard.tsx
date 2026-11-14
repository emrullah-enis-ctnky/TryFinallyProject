
import Link from "next/link";
import { Award, CheckCircle, Star, Trophy, ArrowRight } from "lucide-react";

import type { ProfileStats } from "./profile-service";
import { getLevelInfo } from "./levels";

interface ProfileStatsCardProps {
  stats: ProfileStats;
  showProfileLink?: boolean;
}

export function ProfileStatsCard({
  stats,
  showProfileLink = false,
}: ProfileStatsCardProps) {
  // Kullanıcının toplam puanından güncel seviyesini hesapla.
  const levelInfo = getLevelInfo(stats.totalPoints);

  return (
    <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm">
      {/* İstatistik Başlığı */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="text-base font-bold text-foreground">
          Geliştirici İstatistikleri
        </h3>

        {showProfileLink && (
          <Link
            href="/user/profile"
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            <span>Profilim</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Toplam Puan */}
        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <Award className="w-4 h-4 text-primary" />
            <span>Toplam Puan</span>
          </div>
          <span className="text-2xl font-extrabold text-foreground">
            {stats.totalPoints}
          </span>
        </div>

        {/* Çözülen Soru */}
        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Çözülen Soru</span>
          </div>
          <span className="text-2xl font-extrabold text-foreground">
            {stats.solvedProblemsCount}
          </span>
        </div>

        {/* Kullanıcı Seviyesi */}
        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <Star className="w-4 h-4 text-primary" />
            <span>Seviye</span>
          </div>
          <span className="text-2xl font-extrabold text-foreground">
            {levelInfo.level}
          </span>
        </div>

        {/* Kazanılan Rozet */}
        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <Trophy className="w-4 h-4 text-accent" />
            <span>Kazanılan Rozet</span>
          </div>
          <span className="text-2xl font-extrabold text-foreground">
            {stats.badges.length}
          </span>
        </div>
      </div>
    </div>
  );
}

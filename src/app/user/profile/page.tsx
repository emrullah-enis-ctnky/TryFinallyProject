
import { Award, CheckCircle, Shield, Star, Trophy } from "lucide-react";
import { redirect } from "next/navigation";
import { currentDbUser } from "@/lib/session-user";
import { getProfileStats } from "@/features/gamification/profile-service";
import { getLevelInfo } from "@/features/gamification/levels";

import { SignOutButton } from "@/components/profile/SignOutButton";

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export default async function ProfilePage() {
  const user = await currentDbUser();

  if (!user) {
    redirect("/login");
  }

  const stats = await getProfileStats(user.id);

  if (!stats) {
    throw new Error("Profil istatistikleri yüklenemedi.");
  }

  const displayName = user.name?.trim() || user.email || "TryFinally Kullanıcısı";
  const email = user.email ?? "E-posta bilgisi bulunmuyor";
  const initials = getInitials(displayName);

  // Toplam puana göre seviye ve ilerleme bilgilerini hesapla.
  const levelInfo = getLevelInfo(stats.totalPoints);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Kullanıcı Başlık Kartı */}
      <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary text-xl font-black">
            {initials}
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl font-black text-foreground">{displayName}</h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-semibold">
                Seviye {levelInfo.level}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {email}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-muted-foreground mt-2">
              <span className="flex items-center gap-1 text-accent font-medium">
                <Shield className="w-3.5 h-3.5" />
                Aktif Üye
              </span>
            </div>
          </div>
        </div>

        {/* Çıkış Yap Butonu */}
        <div className="flex flex-col items-center sm:items-end gap-3">
          <SignOutButton />
        </div>
      </div>

      {/* İstatistikler */}
      <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm">
        <h3 className="text-base font-bold text-foreground mb-4">
          Geliştirici İstatistikleri
        </h3>

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

      {/* Seviye İlerlemesi */}
      <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">
              Seviye İlerlemesi
            </h2>
          </div>
          <span className="text-sm font-semibold text-primary">
            Seviye {levelInfo.level}
          </span>
        </div>

        {/* İlerleme Bilgileri */}
        <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            Bu seviyede {levelInfo.currentLevelPoints} / 100 puan
          </span>
          <span>
            %{levelInfo.progressPercent}
          </span>
        </div>

        {/* İlerleme Çubuğu */}
        <div
          className="w-full h-3 rounded-full bg-secondary overflow-hidden"
          role="progressbar"
          aria-label="Seviye ilerlemesi"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={levelInfo.progressPercent}
        >
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${levelInfo.progressPercent}%` }}
          />
        </div>

        {/* Sonraki Seviye Bilgisi */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted-foreground">
          <span>
            Bir sonraki seviyeye {levelInfo.pointsRemaining} puan kaldı.
          </span>
          <span>
            Sonraki seviye: {levelInfo.nextLevelPoints} toplam puan
          </span>
        </div>
      </div>

      {/* Rozet Vitrini */}
      <div className="p-6 rounded-lg border border-border bg-surface space-y-4">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          <span>Kazanılan Rozetler ({stats.badges.length})</span>
        </h2>

        {stats.badges.length === 0 ? (
          <div className="p-6 rounded-lg bg-secondary/20 border border-dashed border-border text-center space-y-2">
            <Award className="w-8 h-8 text-muted-foreground mx-auto" />
            <p className="text-sm font-medium text-foreground">
              Henüz kazanılmış bir rozet bulunmuyor.
            </p>
            <p className="text-xs text-muted-foreground">
              Problemleri çözerek yeni başarımlar kazanmaya başlayabilirsin.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {stats.badges.map((badge) => (
              <div
                key={badge.id}
                className="p-4 rounded-lg bg-secondary/50 border border-border flex items-start gap-3"
              >
                <div className="p-2.5 rounded-lg bg-primary/20 text-primary shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    {badge.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {badge.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Kazanıldı: {new Date(badge.unlockedAt).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Son Çözülen Sorular (Çözüm Geçmişi) */}
      <div className="p-6 rounded-lg border border-border bg-surface space-y-4">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-accent" />
          <span>Son Çözüm Geçmişi</span>
        </h2>

        {stats.recentSolutions.length === 0 ? (
          <div className="p-6 rounded-lg bg-secondary/20 border border-dashed border-border text-center space-y-2">
            <CheckCircle className="w-8 h-8 text-muted-foreground mx-auto" />
            <p className="text-sm font-medium text-foreground">
              Henüz çözülmüş bir problem bulunmuyor.
            </p>
            <p className="text-xs text-muted-foreground">
              İlk problemini çözerek ilerlemeni burada görebilirsin.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-border text-xs">
            {stats.recentSolutions.map((solution) => (
              <div
                key={solution.problemId}
                className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div>
                  <span className="font-bold text-foreground">
                    {solution.title}
                  </span>
                  <span className="ml-2 text-muted-foreground">
                    {solution.language} ile çözüldü
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent font-semibold">
                    Başarılı
                  </span>
                  <span className="text-muted-foreground">
                    {new Date(solution.solvedAt).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

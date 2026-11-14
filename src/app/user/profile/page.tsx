import { User, Award, Flame, CheckCircle, MessageSquare, Shield, Calendar } from "lucide-react";
import { getUserStats, UserStatsCard } from "@/features/gamification";

import { SignOutButton } from "@/components/profile/SignOutButton";

export default async function ProfilePage() {
  const stats = await getUserStats();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Kullanıcı Başlık Kartı */}
      <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary text-xl font-black">
            AY
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl font-black text-foreground">Ahmet Yılmaz</h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-semibold">
                Seviye 2
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              Frontend Geliştirici & Algoritma Meraklısı
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-muted-foreground mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Eylül 2026&apos;da katıldı
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-accent font-medium">
                <Shield className="w-3.5 h-3.5" />
                Aktif Üye
              </span>
            </div>
          </div>
        </div>

        {/* Sıralama & Başarı */}
        <div className="flex flex-col items-center sm:items-end gap-3">
          {/* Sıralama */}
          <div className="flex flex-col items-center sm:items-end gap-1 text-xs">
            <span className="text-muted-foreground">Genel Sıralama</span>
            <span className="text-2xl font-black text-primary">#42</span>
            <span className="text-muted-foreground">İlk %5&apos;lik dilim</span>
          </div>

          {/* Çıkış Yap Butonunu Buraya Ekledik */}
          <SignOutButton />
        </div>
      </div>

      {/* İstatistikler */}
      <UserStatsCard stats={stats} />

      {/* Rozet Vitrini */}
      <div className="p-6 rounded-lg border border-border bg-surface space-y-4">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          <span>Kazanılan Rozetler ({stats.badges.length})</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stats.badges.map((badge) => (
            <div
              key={badge.id}
              className="p-4 rounded-lg bg-secondary/50 border border-border flex items-start gap-3"
            >
              <div className="p-2.5 rounded-lg bg-primary/20 text-primary shrink-0">
                {badge.category === "streak" ? (
                  <Flame className="w-5 h-5 text-destructive" />
                ) : (
                  <Award className="w-5 h-5 text-primary" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{badge.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{badge.description}</p>
              </div>
            </div>
          ))}

          {/* Kilitli Rozet Örneği */}
          <div className="p-4 rounded-lg bg-secondary/20 border border-dashed border-border/80 flex items-start gap-3 opacity-60">
            <div className="p-2.5 rounded-lg bg-muted text-muted-foreground shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Topluluk Kahramanı (Kilitli)</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Forumda 5 soruya kabul edilen çözüm sun.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Son Çözülen Sorular (Çözüm Geçmişi) */}
      <div className="p-6 rounded-lg border border-border bg-surface space-y-4">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-accent" />
          <span>Son Çözüm Geçmişi</span>
        </h2>

        <div className="divide-y divide-border text-xs">
          <div className="py-3 flex items-center justify-between">
            <div>
              <span className="font-bold text-foreground">İki Sayının Toplamı</span>
              <span className="ml-2 text-muted-foreground">C++ ile çözüldü</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-semibold">+10 Puan</span>
              <span className="text-muted-foreground">Dün</span>
            </div>
          </div>
          <div className="py-3 flex items-center justify-between">
            <div>
              <span className="font-bold text-foreground">Metni Ters Çevirme</span>
              <span className="ml-2 text-muted-foreground">Python ile çözüldü</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent font-semibold">+10 Puan</span>
              <span className="text-muted-foreground">3 gün önce</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

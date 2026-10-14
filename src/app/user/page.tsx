
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Code2,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle,
  Star,
  Trophy,
} from "lucide-react";

import { getProblems, ProblemCard } from "@/features/problems";
import { getForumThreads, ForumThreadCard } from "@/features/forum";
import { getProfileStats } from "@/features/gamification/profile-service";
import { getLevelInfo } from "@/features/gamification/levels";
import { currentDbUser } from "@/lib/session-user";
import { AiExplanationCard } from "@/features/ai";

export default async function HomePage() {
  // Oturumdaki kullanıcının veritabanı kaydını getir.
  const user = await currentDbUser();

  if (!user) {
    redirect("/login");
  }

  // Problemleri, forum başlıklarını ve gerçek kullanıcı istatistiklerini yükle.
  const [problems, threads, stats] = await Promise.all([
    getProblems(),
    getForumThreads(),
    getProfileStats(user.id),
  ]);

  if (!stats) {
    throw new Error("Kullanıcı istatistikleri yüklenemedi.");
  }

  // Kullanıcının seviyesini toplam puanına göre hesapla.
  const levelInfo = getLevelInfo(stats.totalPoints);

  return (
    <div className="space-y-12">
      {/* Sade ve Samimi Karşılama (Hero Section) */}
      <section className="text-center max-w-2xl mx-auto pt-6 pb-2 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Yazılıma İlk Adımını At
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Kod yazmayı öğren, eğlenceli pratikler yap ve takıldığın her an
          topluluktan ve asistanından yardım al.
        </p>

        {/* Butonlar */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/problems"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition-opacity cursor-pointer shadow-sm"
          >
            <Code2 className="w-4 h-4" />
            <span>Pratik Yapmaya Başla</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/forum"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/80 border border-border transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-primary" />
            <span>Soru Sor & Keşfet</span>
          </Link>
        </div>
      </section>

      {/* İlerleme ve İstatistikler (Kullanıcının Sevdiği Gamification Bölümü) */}
      <section className="space-y-3">
        <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="text-base font-bold text-foreground">
              Geliştirici İstatistikleri
            </h3>
            <Link
              href="/user/profile"
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              <span>Profilim</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

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
      </section>

      {/* Sorular ve Asistan Alanı */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sol Kolon: Başlangıç Soruları */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary" />
              <span>Başlangıç Pratikleri</span>
            </h2>
            <Link href="/problems" className="text-xs text-primary hover:underline flex items-center gap-1">
              <span>Tümünü Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {problems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>
        </div>

        {/* Sağ Kolon: Akıllı Yardım Alanı */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Yardımcı Rehber</span>
          </h2>
          <AiExplanationCard
            explanation={{
              simpleExplanation: "Kodundaki küçük bir parantez veya noktalı virgül eksikliği bile bilgisayarın kafasını karıştırabilir.",
              suggestedConcept: "Kod Satırlarını Sırayla Takip Etmek",
              encouragingMessage: "Hata yapmak öğrenmenin en doğal parçasıdır. Sakince tekrar dene!",
            }}
          />
        </div>
      </div>

      {/* Topluluk Paylaşımları */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span>Topluluktan Son Sorular</span>
          </h2>
          <Link href="/forum" className="text-xs text-primary hover:underline flex items-center gap-1">
            <span>Foruma Git</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {threads.map((thread) => (
            <ForumThreadCard key={thread.id} thread={thread} />
          ))}
        </div>
      </section>
    </div>
  );
}

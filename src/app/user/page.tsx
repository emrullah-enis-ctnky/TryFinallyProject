import Link from "next/link";
import { Code2, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { getProblems, ProblemCard } from "@/features/problems";
import { getForumThreads, ForumThreadCard } from "@/features/forum";
import { getUserStats, UserStatsCard } from "@/features/gamification";
import { AiExplanationCard } from "@/features/ai";

export default async function HomePage() {
  const [problems, threads, stats] = await Promise.all([
    getProblems(),
    getForumThreads(),
    getUserStats(),
  ]);

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
        <UserStatsCard stats={stats} />
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

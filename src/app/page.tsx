import Link from "next/link";
import { Code2, MessageSquare, BookOpen, Sparkles, ArrowRight, ShieldCheck, Zap, Terminal } from "lucide-react";
import { getPuzzles, PuzzleCard } from "@/features/puzzles";
import { getForumThreads, ForumThreadCard } from "@/features/forum";
import { getUserStats, UserStatsCard } from "@/features/gamification";
import { AiExplanationCard } from "@/features/ai";

export default async function HomePage() {
  const [puzzles, threads, stats] = await Promise.all([
    getPuzzles(),
    getForumThreads(),
    getUserStats(),
  ]);

  return (
    <div className="space-y-12">
      {/* Karşılama (Hero Section) */}
      <section className="text-center max-w-3xl mx-auto pt-6 pb-4 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground">
          <Zap className="w-3.5 h-3.5 text-accent" />
          <span>Kurulumsuz, Tarayıcı Tabanlı Kodlama Deneyimi</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
          Yazılıma Yeni Başlayanlar İçin <br />
          <span className="text-primary">Korkusuz Kodlama Platformu</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Karmaşık ortam kurulumları yok. Hata yaptığında seni azarlamayan,{" "}
          <strong>Google Gemini 3.8 Flash</strong> ile samimi Türkçe rehberlik sunan
          açık kaynaklı topluluk ve pratik platformu.
        </p>

        {/* Hızlı Aksiyon Butonları */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/puzzles"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition-opacity shadow-md"
          >
            <Code2 className="w-4 h-4" />
            <span>Hemen Kodlamaya Başla</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/forum"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/80 border border-border transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-accent" />
            <span>Topluluk Forumu</span>
          </Link>
        </div>
      </section>

      {/* Öne Çıkan Özellik Rozetleri */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-lg border border-border bg-surface text-surface-foreground space-y-2">
          <div className="p-2.5 w-fit rounded-lg bg-primary/10 text-primary">
            <Terminal className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-foreground">Tarayıcıda Güvenli Koşturucu</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            JavaScript Web Worker ve Python Pyodide ile kodlarınız kendi tarayıcınızda,
            sıfır sunucu bekleme süresiyle anında çalışır.
          </p>
        </div>

        <div className="p-5 rounded-lg border border-border bg-surface text-surface-foreground space-y-2">
          <div className="p-2.5 w-fit rounded-lg bg-accent/10 text-accent">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-foreground">Gemini 3.8 Flash Mentörlüğü</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Hata aldığınızda doğrudan cevabı vermek yerine hatanın mantığını açıklayan,
            size özel yönlendirici ipuçları sunulur.
          </p>
        </div>

        <div className="p-5 rounded-lg border border-border bg-surface text-surface-foreground space-y-2">
          <div className="p-2.5 w-fit rounded-lg bg-secondary text-primary">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-foreground">Sunucu Odaklı Veri Güvenliği</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Çözümleriniz, forum tartışmalarınız ve kazandığınız rozetler sunucu
            tarafındaki veritabanında güvenle saklanır.
          </p>
        </div>
      </section>

      {/* Kullanıcı Durumu (Gamification Önizlemesi) */}
      <section className="space-y-4">
        <UserStatsCard stats={stats} />
      </section>

      {/* Örnek Sorular ve AI Kartı */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sol Kolon: Öne Çıkan Sorular */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <span>Başlangıç Seviyesi Algoritma Soruları</span>
            </h2>
            <Link href="/puzzles" className="text-xs text-primary hover:underline flex items-center gap-1">
              <span>Tümünü Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {puzzles.map((puzzle) => (
              <PuzzleCard key={puzzle.id} puzzle={puzzle} />
            ))}
          </div>
        </div>

        {/* Sağ Kolon: Gemini AI Örnek Rehberi */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <span>Akıllı Asistan Örneği</span>
          </h2>
          <AiExplanationCard
            explanation={{
              simpleExplanation: "Döngü sınırını dizinin uzunluğundan (nums.length) 1 fazla tanımladığınız için 'IndexOutOfBounds' hatası aldınız.",
              suggestedConcept: "Sıfır Tabanlı İndisleme (Zero-based Indexing)",
              encouragingMessage: "Döngü koşulunu 'i < nums.length' olarak güncellediğinizde kodunuz mükemmel çalışacaktır!",
            }}
          />
        </div>
      </div>

      {/* Topluluk Tartışmaları */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-accent" />
            <span>Topluluktan Son Tartışmalar</span>
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

import Link from "next/link";
import { Code2, Search, Filter, Sparkles } from "lucide-react";
import { getPuzzles } from "@/features/puzzles";
import { DifficultyBadge } from "@/features/puzzles/ui";

export default async function PuzzlesPage() {
  const puzzles = await getPuzzles();

  return (
    <div className="space-y-8">
      {/* Sayfa Başlığı */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            <span>Algoritma Soruları</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Yeni başlayanlar için özenle seçilmiş, kurulumsuz tarayıcıda çözülebilen pratik problemleri.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
          <Sparkles className="w-4 h-4" />
          <span>Gemini 3.8 Flash Destekli</span>
        </div>
      </div>

      {/* Arama ve Filtreleme Barı */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
          <input
            type="text"
            placeholder="Soru veya etiket ara..."
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          <Filter className="w-4 h-4 text-muted-foreground mr-1 shrink-0" />
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground shrink-0 cursor-pointer">
            Tümü
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0 cursor-pointer">
            Kolay
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0 cursor-pointer">
            Orta
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0 cursor-pointer">
            Zor
          </button>
        </div>
      </div>

      {/* Soru Listesi */}
      <div className="space-y-3">
        {puzzles.map((puzzle) => (
          <Link
            key={puzzle.id}
            href={`/puzzles/${puzzle.slug}`}
            className="block p-5 rounded-lg border border-border bg-surface text-surface-foreground hover:border-primary/50 transition-all shadow-sm group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <DifficultyBadge difficulty={puzzle.difficulty} />
                  <span className="text-xs text-muted-foreground">{puzzle.category}</span>
                </div>
                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {puzzle.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                  {puzzle.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                <span className="font-semibold text-foreground">+{puzzle.points} Puan</span>
                <span className="px-3 py-1.5 rounded-md bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors font-medium">
                  Çöz
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

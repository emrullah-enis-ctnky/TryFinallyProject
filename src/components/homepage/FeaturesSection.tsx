
import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import { PuzzleCard } from "@/features/puzzles";

type FeaturesSectionProps = {
  puzzles: Awaited<ReturnType<typeof import("@/features/puzzles").getPuzzles>>;
};

export default function FeaturesSection({ puzzles }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className="h-[100dvh] w-full snap-start bg-surface flex flex-col items-center justify-center px-4 md:px-12"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-2">
            <Target className="w-6 h-6" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-surface-foreground">
            Zorluk Seviyene Uygun <br />
            <span className="text-primary">Görevler</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Değişkenlerden döngülere, algoritmalardan veri yapılarına kadar
            her seviyeye uygun yüzlerce problemi çöz. Kendi hızında ilerle.
          </p>

          <ul className="space-y-3 pt-4 text-surface-foreground font-medium">
            <li className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-accent" />
              Gerçek hayat senaryoları
            </li>

            <li className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-accent" />
              Anında kod derleme ve test sonuçları
            </li>

            <li className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-accent" />
              Farklı programlama dilleri desteği
            </li>
          </ul>
        </div>

        <div className="bg-background p-6 rounded-2xl border border-border shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h3 className="font-bold text-foreground">Örnek Pratikler</h3>

            <Link
              href="/puzzles"
              className="text-sm text-primary hover:underline"
            >
              Tümünü Gör
            </Link>
          </div>

          <div className="space-y-3">
            {puzzles.slice(0, 3).map((puzzle) => (
              <PuzzleCard key={puzzle.id} puzzle={puzzle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

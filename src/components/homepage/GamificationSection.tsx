
import { Trophy } from "lucide-react";
import { UserStatsCard } from "@/features/gamification";

type GamificationSectionProps = {
  stats: Awaited<
    ReturnType<typeof import("@/features/gamification").getUserStats>
  >;
};

export default function GamificationSection({
  stats,
}: GamificationSectionProps) {
  return (
    <section
      id="gamification"
      className="h-[100dvh] w-full snap-start bg-background flex flex-col items-center justify-center px-4 md:px-12 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full flex flex-col items-center text-center space-y-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-primary shadow-inner">
          <Trophy className="w-8 h-8" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl">
          Motivasyonunu Yüksek Tut,{" "}
          <span className="text-accent">Rozetleri Topla</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl">
          Sürekli kod yazma alışkanlığı kazan. Çözdüğün her problem seni bir
          üst seviyeye taşır, yeni rozetler ve unvanlar kazandırır.
        </p>

        <div className="w-full max-w-4xl mt-8">
          <UserStatsCard stats={stats} />
        </div>
      </div>
    </section>
  );
}


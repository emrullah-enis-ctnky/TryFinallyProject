
import Link from "next/link";
import { ArrowRight, BrainCircuit, MessageSquare } from "lucide-react";
import { ForumThreadCard } from "@/features/forum";
import { AiExplanationCard } from "@/features/ai";

type CommunitySectionProps = {
  threads: Awaited<
    ReturnType<typeof import("@/features/forum").getForumThreads>
  >;
};

export default function CommunitySection({
  threads,
}: CommunitySectionProps) {
  return (
    <section
      id="community"
      className="h-[100dvh] w-full snap-start bg-surface border-t border-border flex flex-col items-center justify-center px-4 md:px-12"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-background rounded-2xl p-6 border border-border shadow-md">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
              <BrainCircuit className="w-5 h-5 text-primary" />
              <span>Yapay Zeka Asistanı</span>
            </h3>

            <AiExplanationCard
              explanation={{
                simpleExplanation:
                  "Bir yerde takıldın mı? Asistanımız sana doğrudan cevabı vermek yerine, seni doğru mantığa yönlendirir.",
                suggestedConcept: "Hata Ayıklama (Debugging) Tüyoları",
                encouragingMessage:
                  "Unutma, her hata yeni bir şey öğrenmek için fırsattır!",
              }}
            />
          </div>

          <div className="bg-background rounded-2xl p-6 border border-border shadow-md">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-accent" />
              <span>Topluluk Forumu</span>
            </h3>

            <div className="space-y-3">
              {threads.slice(0, 1).map((thread) => (
                <ForumThreadCard key={thread.id} thread={thread} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-surface-foreground">
            Yalnız Değilsin, <br />
            <span className="text-primary">Birlikte Gelişiyoruz</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Takıldığın algoritmalarda diğer öğrencilerin nasıl yaklaştığını
            gör, forumda tartış ve yapay zeka desteğiyle ipuçları al.
            Projeye başlamak için daha ne bekliyorsun?
          </p>

          <div className="pt-6">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-xl hover:opacity-90 transition-transform hover:scale-105 shadow-xl shadow-primary/30"
            >
              Kariyerine İlk Adımı At
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { getPuzzles } from "@/features/puzzles";
import { getForumThreads } from "@/features/forum";
import { getUserStats } from "@/features/gamification";

import Navbar from "@/components/homepage/Navbar";
import Herosection from "@/components/homepage/Herosection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import GamificationSection from "@/components/homepage/GamificationSection";
import CommunitySection from "@/components/homepage/CommunitySection";

export default async function LandingPage() {
  const [puzzles, threads, stats] = await Promise.all([
    getPuzzles(),
    getForumThreads(),
    getUserStats(),
  ]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-border/20 bg-background/50 backdrop-blur-md">
        <Navbar/>
      </header>

      <main className="h-[100dvh] w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-background text-foreground">
        
        <Herosection />

        <FeaturesSection puzzles={puzzles} />

        <GamificationSection stats={stats} />

        <CommunitySection threads={threads} />

      </main>
    </>
  );
}
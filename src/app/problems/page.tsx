import { Code2 } from "lucide-react";
import { getProblems } from "@/features/problems";
import { ProblemsList } from "@/components/problems/ProblemsList";

export default async function ProblemsPage() {
  const problems = await getProblems();

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
            Yeni başlayanlar için özenle seçilmiş, kurulumsuz tarayıcıda
            çözülebilen pratik problemleri.
          </p>
        </div>
      </div>

      {/* İnteraktif Arama, Filtreleme ve Liste Bileşeni */}
      <ProblemsList problems={problems} />
    </div>
  );
}

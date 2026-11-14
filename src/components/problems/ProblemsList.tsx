"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, X } from "lucide-react";
import { DifficultyBadge, TopicBadges } from "@/features/problems/ui";
import { ProblemDifficulty } from "@/features/problems";

interface Problem {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: ProblemDifficulty;
  topics: string[];
  points: number;
}

interface ProblemsListProps {
  problems: Problem[];
}

const DIFFICULTY_FILTERS: {
  label: string;
  value: "ALL" | ProblemDifficulty;
}[] = [
  { label: "Tümü", value: "ALL" },
  { label: "Kolay", value: "kolay" },
  { label: "Orta", value: "orta" },
  { label: "Zor", value: "zor" },
];

export function ProblemsList({ problems }: ProblemsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("ALL");

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      // Zorluk Filtresi
      const matchesDifficulty =
        selectedDifficulty === "ALL" ||
        problem.difficulty.toLowerCase().trim() ===
          selectedDifficulty.toLowerCase();

      // Arama Filtresi (Başlık, açıklama veya etiketlerde arıyor)
      const query = searchQuery.toLocaleLowerCase("tr-TR").trim();
      if (!query) return matchesDifficulty;

      const matchesTitle = problem.title
        .toLocaleLowerCase("tr-TR")
        .includes(query);
      const matchesDescription = problem.description
        .toLocaleLowerCase("tr-TR")
        .includes(query);
      const matchesTopics = problem.topics?.some((topic) =>
        topic.toLocaleLowerCase("tr-TR").includes(query),
      );

      return (
        matchesDifficulty &&
        (matchesTitle || matchesDescription || matchesTopics)
      );
    });
  }, [problems, searchQuery, selectedDifficulty]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedDifficulty("ALL");
  };

  return (
    <div className="space-y-6">
      {/* Arama ve Filtreleme Barı */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Soru veya etiket ara..."
            className="w-full pl-9 pr-8 py-2 rounded-lg bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Aramayı temizle"
              className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          <Filter className="w-4 h-4 text-muted-foreground mr-1 shrink-0" />
          {DIFFICULTY_FILTERS.map((filter) => {
            const isActive = selectedDifficulty === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setSelectedDifficulty(filter.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 cursor-pointer transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Soru Listesi veya Boş Durum */}
      {filteredProblems.length > 0 ? (
        <div className="space-y-3">
          {filteredProblems.map((problem) => (
            <Link
              key={problem.id}
              href={`/problems/${problem.slug}`}
              className="block p-5 rounded-lg border border-border bg-surface text-surface-foreground hover:border-primary/50 transition-all shadow-sm group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <DifficultyBadge difficulty={problem.difficulty} />
                    <TopicBadges topics={problem.topics} />
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                    {problem.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                  <span className="font-semibold text-foreground">
                    +{problem.points} Puan
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors font-medium">
                    Çöz
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-border rounded-lg bg-surface/50">
          <p className="text-sm text-muted-foreground">
            Arama kriterlerinize uygun soru bulunamadı.
          </p>
          <button
            onClick={resetFilters}
            className="mt-3 text-xs font-semibold text-primary hover:underline cursor-pointer"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}
    </div>
  );
}

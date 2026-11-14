"use client";

/**
 * ==============================================================================
 * TryFinally — Problem UI bileşenleri
 * ==============================================================================
 * Soru kartı, zorluk derecesi rozeti ve soru listesi sunum bileşenleri.
 * ==============================================================================
 */

import React from "react";
import type { Problem, ProblemDifficulty, ProblemContentLanguage } from "./types";
import { Code2, Award, ChevronRight } from "lucide-react";

export const TopicBadges: React.FC<{ topics: string[] }> = ({ topics }) => (
  <span className="inline-flex flex-wrap items-center gap-1">
    {topics.map((topic) => (
      <span key={topic} className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] text-muted-foreground">
        {topic}
      </span>
    ))}
  </span>
);

interface DifficultyBadgeProps {
  difficulty: ProblemDifficulty;
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty }) => {
  const styles: Record<ProblemDifficulty, string> = {
    kolay: "bg-accent/20 text-accent border border-accent/30",
    orta: "bg-primary/20 text-primary border border-primary/30",
    zor: "bg-destructive/20 text-destructive border border-destructive/30",
  };

  return (
    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium capitalize ${styles[difficulty]}`}>
      {difficulty}
    </span>
  );
};

interface ProblemCardProps {
  problem: Problem;
  onSelect?: (slug: string) => void;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({ problem, onSelect }) => {
  return (
    <div
      onClick={() => onSelect?.(problem.slug)}
      className="p-5 rounded-lg border border-border bg-surface text-surface-foreground hover:border-primary/50 transition-all cursor-pointer shadow-sm flex items-center justify-between group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-secondary text-primary mt-1">
          <Code2 className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <DifficultyBadge difficulty={problem.difficulty} />
            <TopicBadges topics={problem.topics} />
          </div>
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {problem.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
            {problem.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
        <span className="flex items-center gap-1 font-medium text-foreground">
          <Award className="w-4 h-4 text-accent" />
          +{problem.points} Puan
        </span>
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export const PROBLEM_CONTENT_LANGUAGES: { id: ProblemContentLanguage; label: string }[] = [
  { id: "tr", label: "Türkçe" },
  { id: "en", label: "English" },
  { id: "de", label: "Deutsch" },
];

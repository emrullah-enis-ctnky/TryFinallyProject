"use client";

/**
 * ==============================================================================
 * TryFinally — Algoritma Soruları UI Bileşenleri (Puzzles UI)
 * ==============================================================================
 * Soru kartı, zorluk derecesi rozeti ve soru listesi sunum bileşenleri.
 * ==============================================================================
 */

import React from "react";
import type { Puzzle, PuzzleDifficulty } from "./types";
import { Code2, Award, ChevronRight } from "lucide-react";

interface DifficultyBadgeProps {
  difficulty: PuzzleDifficulty;
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty }) => {
  const styles: Record<PuzzleDifficulty, string> = {
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

interface PuzzleCardProps {
  puzzle: Puzzle;
  onSelect?: (slug: string) => void;
}

export const PuzzleCard: React.FC<PuzzleCardProps> = ({ puzzle, onSelect }) => {
  return (
    <div
      onClick={() => onSelect?.(puzzle.slug)}
      className="p-5 rounded-lg border border-border bg-surface text-surface-foreground hover:border-primary/50 transition-all cursor-pointer shadow-sm flex items-center justify-between group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-secondary text-primary mt-1">
          <Code2 className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <DifficultyBadge difficulty={puzzle.difficulty} />
            <span className="text-xs text-muted-foreground">{puzzle.category}</span>
          </div>
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {puzzle.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
            {puzzle.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
        <span className="flex items-center gap-1 font-medium text-foreground">
          <Award className="w-4 h-4 text-accent" />
          +{puzzle.points} Puan
        </span>
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";
import { DifficultyBadge, TopicBadges } from "../ui";
import { MarkdownContent } from "./MarkdownContent";
import type { Problem, ProblemContentLanguage } from "../types";

interface ProblemDescriptionPanelProps {
  difficulty: Problem["difficulty"];
  translation: Problem["translations"][ProblemContentLanguage];
}

export function ProblemDescriptionPanel({ difficulty, translation }: ProblemDescriptionPanelProps) {
  const [isHintVisible, setIsHintVisible] = useState(false);

  return (
    <section className="space-y-5 overflow-y-auto rounded-lg border border-border bg-surface p-6 text-surface-foreground lg:col-span-5">
      <div className="flex items-center gap-2">
        <DifficultyBadge difficulty={difficulty} />
        <TopicBadges topics={translation.topics} />
      </div>

      <h1 className="text-2xl font-black text-foreground">{translation.title}</h1>

      <MarkdownContent markdown={translation.contentMarkdown} />

      {translation.hints.length > 0 && (
        <div className="border-t border-border pt-4">
          <button
            type="button"
            aria-expanded={isHintVisible}
            onClick={() => setIsHintVisible((visible) => !visible)}
            className="flex w-full items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 p-3 text-left text-sm font-semibold text-foreground transition-colors hover:bg-primary/15"
          >
            <Lightbulb className="h-4 w-4 shrink-0 text-primary" />
            <span>{isHintVisible ? "İpucunu gizle" : "İpucunu göster"}</span>
            <span className="ml-auto text-xs text-muted-foreground" aria-hidden="true">
              {isHintVisible ? "−" : "+"}
            </span>
          </button>

          {isHintVisible && (
            <div className="mt-2 rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm leading-relaxed text-foreground/90">
              {translation.hints.map((hint, index) => (
                <p key={index}>{hint}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
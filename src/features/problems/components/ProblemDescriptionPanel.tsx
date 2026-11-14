"use client";

import { useState, type ReactNode } from "react";
import { BookOpen, Lightbulb, Sparkles } from "lucide-react";
import { DifficultyBadge, TopicBadges } from "../ui";
import { MarkdownContent } from "./MarkdownContent";
import type { Problem, ProblemContentLanguage } from "../types";

interface ProblemDescriptionPanelProps {
  difficulty: Problem["difficulty"];
  translation: Problem["translations"][ProblemContentLanguage];
  aiPanel?: ReactNode;
}

export function ProblemDescriptionPanel({
  difficulty,
  translation,
  aiPanel,
}: ProblemDescriptionPanelProps) {
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "ai">(
    "description",
  );

  return (
    <section className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface text-surface-foreground lg:col-span-5">
      {/* Üst Sekme Çubuğu */}
      {aiPanel && (
        <div className="flex items-center gap-1 border-b border-border bg-secondary/40 px-4 py-2">
          <button
            type="button"
            onClick={() => setActiveTab("description")}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === "description"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            Açıklama
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("ai")}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === "ai"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            AI Asistan
          </button>
        </div>
      )}

      {/* Sekme İçeriği */}
      {activeTab === "ai" && aiPanel ? (
        <div className="flex-1 overflow-y-auto">{aiPanel}</div>
      ) : (
        <div className="space-y-5 overflow-y-auto p-6">
          <div className="flex items-center gap-2">
            <DifficultyBadge difficulty={difficulty} />
            <TopicBadges topics={translation.topics} />
          </div>

          <h1 className="text-2xl font-black text-foreground">
            {translation.title}
          </h1>

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
                <span>
                  {isHintVisible ? "İpucunu gizle" : "İpucunu göster"}
                </span>
                <span
                  className="ml-auto text-xs text-muted-foreground"
                  aria-hidden="true"
                >
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
        </div>
      )}
    </section>
  );
}

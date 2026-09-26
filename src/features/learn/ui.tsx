"use client";

/**
 * ==============================================================================
 * TryFinally — Öğrenme Yol Haritası UI (Learn UI)
 * ==============================================================================
 * Müfredat kartları, konu adımları ve ilerleme göstergeleri.
 * ==============================================================================
 */

import React from "react";
import type { RoadmapModule } from "./types";
import { BookOpen, CheckCircle, Clock, ArrowRight } from "lucide-react";

interface RoadmapModuleCardProps {
  module: RoadmapModule;
  onSelectTopic?: (slug: string) => void;
}

export const RoadmapModuleCard: React.FC<RoadmapModuleCardProps> = ({ module, onSelectTopic }) => {
  return (
    <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">{module.title}</h3>
          <p className="text-xs text-muted-foreground">{module.description}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {module.topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => onSelectTopic?.(topic.slug)}
            className="flex items-center justify-between p-3 rounded-md bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              {topic.isCompleted ? (
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              ) : (
                <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/40 shrink-0" />
              )}
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {topic.title}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {topic.durationMinutes} dk
              </span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

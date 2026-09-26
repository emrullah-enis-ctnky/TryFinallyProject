"use client";

/**
 * ==============================================================================
 * TryFinally — Forum Görsel Arayüz Bileşenleri (Forum UI)
 * ==============================================================================
 * Forum kartları, tartışma listesi ve filtreleme arayüzleri.
 * Tüm stiller semantik renk token'ları (surface, primary, muted, border) kullanır.
 * ==============================================================================
 */

import React from "react";
import type { ForumThread } from "./types";
import { MessageSquare, ThumbsUp, Tag, CheckCircle2 } from "lucide-react";

interface ForumThreadCardProps {
  thread: ForumThread;
  onClick?: (id: string) => void;
}

export const ForumThreadCard: React.FC<ForumThreadCardProps> = ({ thread, onClick }) => {
  return (
    <div
      onClick={() => onClick?.(thread.id)}
      className="p-5 rounded-lg border border-border bg-surface text-surface-foreground hover:border-primary/50 transition-colors cursor-pointer shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium uppercase tracking-wider">
              {thread.category}
            </span>
            {thread.isResolved && (
              <span className="flex items-center gap-1 text-xs text-accent font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Çözüldü
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
            {thread.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {thread.content}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {thread.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* İstatistikler */}
        <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground shrink-0">
          <span className="flex items-center gap-1 bg-secondary/60 px-2 py-1 rounded">
            <ThumbsUp className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">{thread.votes}</span>
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            {thread.commentCount} yanıt
          </span>
        </div>
      </div>
    </div>
  );
};

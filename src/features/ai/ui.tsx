"use client";

/**
 * ==============================================================================
 * TryFinally — Google Gemini AI Asistanı UI Bileşenleri (AI UI)
 * ==============================================================================
 * Akıllı ipucu paneli ve hata açıklaması kartları.
 * ==============================================================================
 */

import React from "react";
import type { CodeErrorExplanationResponse } from "./types";
import { Sparkles, Lightbulb, BookMarked } from "lucide-react";

interface AiExplanationCardProps {
  explanation: CodeErrorExplanationResponse;
  onClose?: () => void;
}

export const AiExplanationCard: React.FC<AiExplanationCardProps> = ({ explanation, onClose }) => {
  return (
    <div className="p-5 rounded-lg border border-primary/30 bg-surface text-surface-foreground shadow-md relative overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-md bg-primary/20 text-primary">
          <Sparkles className="w-4 h-4" />
        </div>
        <h4 className="text-sm font-bold text-foreground">Akıllı Kod Rehberi</h4>
      </div>

      <p className="text-sm text-foreground/90 leading-relaxed mb-3">
        {explanation.simpleExplanation}
      </p>

      <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/60 p-2.5 rounded-md mb-3">
        <BookMarked className="w-4 h-4 text-accent shrink-0" />
        <span>
          <strong>Önerilen Konu:</strong> {explanation.suggestedConcept}
        </span>
      </div>

      <div className="flex items-center gap-2 text-xs text-accent">
        <Lightbulb className="w-4 h-4 shrink-0" />
        <span>{explanation.encouragingMessage}</span>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="mt-3 text-xs text-muted-foreground hover:text-foreground underline"
        >
          Kapat
        </button>
      )}
    </div>
  );
};

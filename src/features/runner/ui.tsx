"use client";

/**
 * ==============================================================================
 * TryFinally — Kod Koşturucu Konsol UI (Runner UI)
 * ==============================================================================
 * Çalıştırılan kodun stdout, stderr ve süre bilgilerini gösteren konsol paneli.
 * ==============================================================================
 */

import React from "react";
import type { ExecutionResult } from "./types";
import { Terminal, AlertCircle, CheckCircle, Clock } from "lucide-react";

interface ConsoleOutputPanelProps {
  result: ExecutionResult | null;
  isRunning?: boolean;
}

export const ConsoleOutputPanel: React.FC<ConsoleOutputPanelProps> = ({ result, isRunning }) => {
  return (
    <div className="rounded-lg border border-border bg-surface text-surface-foreground overflow-hidden">
      {/* Konsol Başlık Çubuğu */}
      <div className="flex items-center justify-between px-4 py-2 bg-secondary border-b border-border text-xs font-medium">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span>Çıktı Konsolu</span>
        </div>
        {result && (
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {result.executionTimeMs} ms
            </span>
            {result.hasError ? (
              <span className="flex items-center gap-1 text-destructive font-semibold">
                <AlertCircle className="w-3.5 h-3.5" />
                Hata
              </span>
            ) : (
              <span className="flex items-center gap-1 text-accent font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                Başarılı
              </span>
            )}
          </div>
        )}
      </div>

      {/* Konsol İçerik Alanı */}
      <div className="p-4 font-mono text-xs min-h-[120px] max-h-[220px] overflow-y-auto space-y-1">
        {isRunning ? (
          <p className="text-muted-foreground animate-pulse">Kod çalıştırılıyor...</p>
        ) : !result ? (
          <p className="text-muted-foreground">Çıktıyı görmek için &quot;Çalıştır&quot; butonuna basın.</p>
        ) : (
          <>
            {result.stdout.map((line, idx) => (
              <p key={idx} className="text-foreground">
                {line}
              </p>
            ))}
            {result.stderr.map((line, idx) => (
              <p key={idx} className="text-destructive font-semibold">
                {line}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

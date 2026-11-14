"use client";

import { useMemo } from "react";
import { Play, RotateCcw, Send } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { tryFinallyEditorTheme } from "../editorTheme";
import { getLanguageExtensions } from "../completions";
import type { SupportedLanguage } from "../types";

const STARTER_LANGUAGE_OPTIONS: { id: SupportedLanguage; label: string }[] = [
  { id: "cpp", label: "C++" },
  { id: "java", label: "Java" },
  { id: "python", label: "Python" },
];

interface CodeEditorPanelProps {
  language: SupportedLanguage;
  code: string;
  onLanguageChange: (language: SupportedLanguage) => void;
  onCodeChange: (newCode: string) => void;
  onResetCode: () => void;
  onRun?: () => void;
  onSubmit?: () => void;
  isRunning?: boolean;
  isSubmitting?: boolean;
}

export function CodeEditorPanel({
  language,
  code,
  onLanguageChange,
  onCodeChange,
  onResetCode,
  onRun,
  onSubmit,
  isRunning = false,
  isSubmitting = false,
}: CodeEditorPanelProps) {
  const languageExtensions = useMemo(() => getLanguageExtensions(language), [language]);

  const isRunDisabled = !onRun || isRunning || isSubmitting;
  const isSubmitDisabled = !onSubmit || isRunning || isSubmitting;

  return (
    <>
      <div className="flex items-center justify-between rounded-lg border border-border bg-surface p-3">
        <div className="flex items-center gap-1 rounded-md bg-secondary p-1">
          {STARTER_LANGUAGE_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => onLanguageChange(option.id)}
              className={`rounded px-3 py-1 text-xs font-semibold ${
                language === option.id ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={isRunDisabled}
            onClick={onRun}
            title={!onRun ? "Kod çalıştırma motoru henüz bağlı değil." : "Örnek testlerle çalıştır"}
            className={`flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold ${
              isRunDisabled
                ? "cursor-not-allowed text-muted-foreground opacity-60"
                : "cursor-pointer text-foreground hover:bg-secondary/80"
            }`}
          >
            <Play className="h-3.5 w-3.5 text-accent" />
            <span>{isRunning ? "Çalışıyor..." : "Çalıştır"}</span>
          </button>

          <button
            type="button"
            disabled={isSubmitDisabled}
            onClick={onSubmit}
            title={!onSubmit ? "Gönderme akışı henüz bağlı değil." : "Tüm testlerle gönder"}
            className={`flex items-center gap-1.5 rounded-md bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground ${
              isSubmitDisabled
                ? "cursor-not-allowed opacity-60"
                : "cursor-pointer hover:bg-primary/90"
            }`}
          >
            <Send className="h-3.5 w-3.5" />
            <span>{isSubmitting ? "Gönderiliyor..." : "Gönder"}</span>
          </button>
        </div>
      </div>

      <div className="flex min-h-[350px] flex-1 flex-col overflow-hidden rounded-lg border border-border bg-background text-foreground shadow-sm">
        <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5 text-[11px] text-muted-foreground">
          <span className="font-mono font-medium text-foreground">
            Solution.{language === "cpp" ? "cpp" : language === "java" ? "java" : "py"}
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onResetCode}
              title="Mevcut dildeki kodu ilk haline sıfırla"
              className="flex cursor-pointer items-center gap-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Kodu Sıfırla</span>
            </button>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {language} • UTF-8
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-background">
          <CodeMirror
            value={code}
            height="320px"
            theme={tryFinallyEditorTheme}
            extensions={languageExtensions}
            onChange={onCodeChange}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              foldGutter: true,
              dropCursor: true,
              allowMultipleSelections: true,
              indentOnInput: true,
              syntaxHighlighting: true,
              bracketMatching: true,
              closeBrackets: true,
              autocompletion: true,
              highlightActiveLine: true,
            }}
            className="font-mono text-xs"
          />
        </div>
      </div>
    </>
  );
}
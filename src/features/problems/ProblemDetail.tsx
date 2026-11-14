"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROBLEM_CONTENT_LANGUAGES } from "./ui";
import { ProblemDescriptionPanel } from "./components/ProblemDescriptionPanel";
import { CodeEditorPanel } from "./components/CodeEditorPanel";
import { TestPanel } from "./components/TestPanel";
import type { Problem, ProblemContentLanguage, SupportedLanguage } from "./types";

export function ProblemDetail({ problem }: { problem: Problem }) {
  const [contentLanguage, setContentLanguage] = useState<ProblemContentLanguage>("tr");
  const [language, setLanguage] = useState<SupportedLanguage>("cpp");
  const [activeTestPanel, setActiveTestPanel] = useState<"testcase" | "result">("testcase");

  const [codes, setCodes] = useState<Record<SupportedLanguage, string>>({
    cpp: problem.starterCode.cpp,
    java: problem.starterCode.java,
    python: problem.starterCode.python,
  });

  const translation = problem.translations[contentLanguage];

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedCpp = localStorage.getItem(`tryfinally_code_${problem.slug}_cpp`);
      const storedJava = localStorage.getItem(`tryfinally_code_${problem.slug}_java`);
      const storedPython = localStorage.getItem(`tryfinally_code_${problem.slug}_python`);

      setCodes((prev) => ({
        cpp: storedCpp ?? prev.cpp,
        java: storedJava ?? prev.java,
        python: storedPython ?? prev.python,
      }));
    } catch {
      // localStorage erişim kısıtları durumunda varsayılan kodlar korunur
    }
  }, [problem.slug]);

  function handleCodeChange(newCode: string) {
    setCodes((prev) => ({ ...prev, [language]: newCode }));
    try {
      localStorage.setItem(`tryfinally_code_${problem.slug}_${language}`, newCode);
    } catch {
      // localStorage hatası yoksayılır
    }
  }

  function handleResetCode() {
    const starter = translation.starterCode[language];
    setCodes((prev) => ({ ...prev, [language]: starter }));
    try {
      localStorage.removeItem(`tryfinally_code_${problem.slug}_${language}`);
    } catch {
      // localStorage hatası yoksayılır
    }
  }

  function updateContentLanguage(nextLanguage: ProblemContentLanguage) {
    setContentLanguage(nextLanguage);
    const nextTranslation = problem.translations[nextLanguage];
    setCodes((prev) => {
      const updated = { ...prev };
      for (const lang of ["cpp", "java", "python"] as const) {
        const stored =
          typeof window !== "undefined"
            ? localStorage.getItem(`tryfinally_code_${problem.slug}_${lang}`)
            : null;
        if (!stored) {
          updated[lang] = nextTranslation.starterCode[lang];
        }
      }
      return updated;
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/problems"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Problemlere Dön
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Soru dili</span>
          <select
            value={contentLanguage}
            onChange={(event) => updateContentLanguage(event.target.value as ProblemContentLanguage)}
            className="rounded-md border border-border bg-surface px-2 py-1.5 text-xs text-foreground"
            aria-label="Problem dili"
          >
            {PROBLEM_CONTENT_LANGUAGES.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid min-h-[580px] grid-cols-1 gap-6 lg:grid-cols-12">
        <ProblemDescriptionPanel difficulty={problem.difficulty} translation={translation} />

        <section className="flex flex-col gap-4 lg:col-span-7">
          <CodeEditorPanel
            language={language}
            code={codes[language]}
            onLanguageChange={setLanguage}
            onCodeChange={handleCodeChange}
            onResetCode={handleResetCode}
          />

          <TestPanel
            testCases={problem.testCases}
            inputNames={translation.inputNames}
            activeTab={activeTestPanel}
            onTabChange={setActiveTestPanel}
          />
        </section>
      </div>
    </div>
  );
}
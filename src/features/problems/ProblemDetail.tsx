"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROBLEM_CONTENT_LANGUAGES } from "./ui";
import { ProblemDescriptionPanel } from "./components/ProblemDescriptionPanel";
import { CodeEditorPanel } from "./components/CodeEditorPanel";
import { TestPanel } from "./components/TestPanel";
import { SubmissionResultView } from "./components/SubmissionResultView";
import type { Problem, ProblemContentLanguage, SupportedLanguage } from "./types";
import type {
  CreateSubmissionRequest,
  CreateSubmissionResponse,
  SubmissionKind,
  SubmissionView,
} from "@/features/judge";

const POLL_INTERVAL_MS = 1000;
const MAX_POLL_ATTEMPTS = 60; // 60 saniye zaman aşımı koruması

export function ProblemDetail({ problem }: { problem: Problem }) {
  const [contentLanguage, setContentLanguage] = useState<ProblemContentLanguage>("tr");
  const [language, setLanguage] = useState<SupportedLanguage>("cpp");
  const [activeTestPanel, setActiveTestPanel] = useState<"testcase" | "result">("testcase");

  // Judge state'leri
  const [activeKind, setActiveKind] = useState<SubmissionKind | null>(null);
  const [submission, setSubmission] = useState<SubmissionView | null>(null);
  const [judgeError, setJudgeError] = useState<string | null>(null);
  const pollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [codes, setCodes] = useState<Record<SupportedLanguage, string>>({
    cpp: problem.starterCode.cpp,
    java: problem.starterCode.java,
    python: problem.starterCode.python,
  });

  const translation = problem.translations[contentLanguage];

  const clearPollTimer = useCallback(() => {
    if (pollTimerRef.current) {
      clearTimeout(pollTimerRef.current);
      pollTimerRef.current = null;
    }
  }, []);

  // Bileşen unmount olduğunda aktif polling'i temizle
  useEffect(() => {
    return () => clearPollTimer();
  }, [clearPollTimer]);

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

  async function executeCode(kind: SubmissionKind) {
    if (activeKind !== null) return;

    clearPollTimer();
    setActiveKind(kind);
    setJudgeError(null);
    setSubmission(null);
    setActiveTestPanel("result");

    try {
      const payload: CreateSubmissionRequest = {
        problemSlug: problem.slug,
        language,
        code: codes[language],
        kind,
      };

      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const errMsg =
          typeof data === "string"
            ? data
            : data?.error ?? data?.message ?? data?.detail ?? JSON.stringify(data);
        setJudgeError(`(${res.status}) ${errMsg || "Gönderim oluşturulamadı."}`);
        setActiveKind(null);
        return;
      }

      const { submissionId } = data as CreateSubmissionResponse;
      let attempts = 0;

      const poll = async () => {
        attempts += 1;
        try {
          const pollRes = await fetch(`/api/submissions/${submissionId}`, {
            cache: "no-store",
          });
          const pollData = await pollRes.json().catch(() => null);

          if (!pollRes.ok) {
            setJudgeError(pollData?.error ?? pollData?.message ?? "Sonuç alınamadı.");
            setActiveKind(null);
            return;
          }

          const view = pollData as SubmissionView;
          setSubmission(view);

          if (view.status === "PENDING" || view.status === "RUNNING") {
            if (attempts >= MAX_POLL_ATTEMPTS) {
              setJudgeError("Değerlendirme zaman aşımına uğradı. Lütfen daha sonra tekrar dene.");
              setActiveKind(null);
              return;
            }
            pollTimerRef.current = setTimeout(poll, POLL_INTERVAL_MS);
          } else {
            // Nihai verdict geldi
            setActiveKind(null);
          }
        } catch {
          setJudgeError("Sunucu ile bağlantı kesildi.");
          setActiveKind(null);
        }
      };

      pollTimerRef.current = setTimeout(poll, POLL_INTERVAL_MS);
    } catch {
      setJudgeError("İstek gönderilirken bir ağ hatası oluştu.");
      setActiveKind(null);
    }
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
            onRun={() => executeCode("run")}
            onSubmit={() => executeCode("submit")}
            isRunning={activeKind === "run"}
            isSubmitting={activeKind === "submit"}
          />

          <TestPanel
            testCases={problem.testCases}
            inputNames={translation.inputNames}
            activeTab={activeTestPanel}
            onTabChange={setActiveTestPanel}
            resultContent={
              <SubmissionResultView
                submission={submission}
                error={judgeError}
                isPolling={activeKind !== null}
              />
            }
          />
        </section>
      </div>
    </div>
  );
}
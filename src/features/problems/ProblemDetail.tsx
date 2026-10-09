"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Lightbulb, Play, Send, Terminal } from "lucide-react";
import { DifficultyBadge, PROBLEM_CONTENT_LANGUAGES, TopicBadges } from "./ui";
import type { Problem, ProblemContentLanguage, SupportedLanguage } from "./types";

function inlineMarkdown(text: string): ReactNode[] {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index} className="rounded bg-secondary px-1 py-0.5 text-accent">{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function MarkdownContent({ markdown }: { markdown: string }) {
  const lines = markdown.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    const heading = line.match(/^##\s+(.+)$/);
    if (heading) {
      blocks.push(<h2 key={index} className="pt-3 text-base font-bold text-foreground">{inlineMarkdown(heading[1])}</h2>);
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: ReactNode[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(<li key={index}>{inlineMarkdown(lines[index].trim().slice(2))}</li>);
        index += 1;
      }
      blocks.push(<ul key={`list-${index}`} className="list-disc space-y-1 pl-5">{items}</ul>);
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length && lines[index].trim() && !/^##\s/.test(lines[index].trim()) && !lines[index].trim().startsWith("- ")) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`paragraph-${index}`}>{inlineMarkdown(paragraph.join(" "))}</p>);
  }

  return <div className="space-y-3 text-sm leading-relaxed text-foreground/90">{blocks}</div>;
}

function formatCompactJson(value: string): string {
  try {
    return JSON.stringify(JSON.parse(value));
  } catch {
    return value;
  }
}

function formatInputs(input: string, inputNames: string[]): string {
  try {
    const values: unknown = JSON.parse(input);
    if (!Array.isArray(values)) return input;
    return values
      .map((value, index) => `${inputNames[index] ?? `arg${index + 1}`} = ${JSON.stringify(value)}`)
      .join("\n");
  } catch {
    return input;
  }
}

export function ProblemDetail({ problem }: { problem: Problem }) {
  const [contentLanguage, setContentLanguage] = useState<ProblemContentLanguage>("tr");
  const [language, setLanguage] = useState<SupportedLanguage>("cpp");
  const [code, setCode] = useState(problem.starterCode.cpp);
  const [hasEditedCode, setHasEditedCode] = useState(false);
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [activeTestPanel, setActiveTestPanel] = useState<"testcase" | "result">("testcase");
  const [selectedTestCaseId, setSelectedTestCaseId] = useState<string | null>(
    problem.testCases.find((testCase) => !testCase.isHidden)?.id ?? null,
  );

  const translation = problem.translations[contentLanguage];
  const visibleCases = problem.testCases.filter((testCase) => !testCase.isHidden);
  const hiddenCasesCount = problem.testCases.length - visibleCases.length;
  const selectedTestCase = visibleCases.find((testCase) => testCase.id === selectedTestCaseId) ?? visibleCases[0];

  function updateContentLanguage(nextLanguage: ProblemContentLanguage) {
    setContentLanguage(nextLanguage);
    if (!hasEditedCode) setCode(problem.translations[nextLanguage].starterCode[language]);
  }

  function updateCodeLanguage(nextLanguage: SupportedLanguage) {
    setLanguage(nextLanguage);
    if (!hasEditedCode) setCode(translation.starterCode[nextLanguage]);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/problems" className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground">
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
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid min-h-[580px] grid-cols-1 gap-6 lg:grid-cols-12">
        <section className="space-y-5 overflow-y-auto rounded-lg border border-border bg-surface p-6 text-surface-foreground lg:col-span-5">
          <div className="flex items-center gap-2">
            <DifficultyBadge difficulty={problem.difficulty} />
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
                <span className="ml-auto text-xs text-muted-foreground" aria-hidden="true">{isHintVisible ? "−" : "+"}</span>
              </button>
              {isHintVisible && (
                <div className="mt-2 rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm leading-relaxed text-foreground/90">
                  {translation.hints.map((hint, index) => <p key={index}>{hint}</p>)}
                </div>
              )}
            </div>
          )}
        </section>

        <section className="flex flex-col gap-4 lg:col-span-7">
          <div className="flex items-center justify-between rounded-lg border border-border bg-surface p-3">
            <div className="flex items-center gap-1 rounded-md bg-secondary p-1">
              {STARTER_LANGUAGE_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => updateCodeLanguage(option.id)}
                  className={`rounded px-3 py-1 text-xs font-semibold ${language === option.id ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled
                title="Kod çalıştırma motoru henüz bağlı değil."
                className="flex cursor-not-allowed items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-muted-foreground opacity-60"
              >
                <Play className="h-3.5 w-3.5 text-accent" /> Çalıştır
              </button>
              <button
                type="button"
                disabled
                title="Gönderme akışı henüz bağlı değil."
                className="flex cursor-not-allowed items-center gap-1.5 rounded-md bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground opacity-60"
              >
                <Send className="h-3.5 w-3.5" /> Gönder
              </button>
            </div>
          </div>

          <div className="min-h-[300px] flex-1 overflow-hidden rounded-lg border border-border bg-[#0d1117] p-4 text-[#c9d1d9]">
            <div className="mb-3 flex justify-between border-b border-border/40 pb-2 text-[11px] text-muted-foreground/70">
              <span>Solution.{language === "cpp" ? "cpp" : language === "java" ? "java" : "py"}</span>
              <span>UTF-8</span>
            </div>
            <textarea
              value={code}
              onChange={(event) => {
                setCode(event.target.value);
                setHasEditedCode(true);
              }}
              spellCheck={false}
              aria-label="Çözüm kodu"
              className="h-[260px] w-full resize-none bg-transparent font-mono text-xs leading-relaxed text-foreground/90 focus:outline-none"
            />
          </div>

          <section className="min-h-[210px] overflow-hidden rounded-lg border border-border bg-surface text-surface-foreground">
            <div role="tablist" aria-label="Test paneli" className="flex items-center gap-5 border-b border-border px-4">
              <button
                type="button"
                role="tab"
                aria-selected={activeTestPanel === "testcase"}
                onClick={() => setActiveTestPanel("testcase")}
                className={`border-b-2 py-3 text-xs font-semibold transition-colors ${activeTestPanel === "testcase" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
              >
                Testcase
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTestPanel === "result"}
                onClick={() => setActiveTestPanel("result")}
                className={`flex items-center gap-1.5 border-b-2 py-3 text-xs font-semibold transition-colors ${activeTestPanel === "result" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
              >
                <Terminal className="h-3.5 w-3.5" /> Test Result
              </button>
            </div>

            {activeTestPanel === "testcase" ? (
              <div role="tabpanel" className="p-4">
                <div role="tablist" aria-label="Testcase seçimi" className="mb-4 flex gap-2 overflow-x-auto">
                  {visibleCases.map((testCase, index) => (
                    <button
                      key={testCase.id}
                      type="button"
                      role="tab"
                      aria-selected={(selectedTestCase?.id ?? null) === testCase.id}
                      onClick={() => setSelectedTestCaseId(testCase.id)}
                      className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${(selectedTestCase?.id ?? null) === testCase.id ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`}
                    >
                      Case {index + 1}
                    </button>
                  ))}
                </div>
                {selectedTestCase ? (
                  <div className="space-y-3">
                    <div>
                      <h3 className="mb-1.5 text-[11px] font-semibold text-muted-foreground">Input</h3>
                      <pre className="overflow-x-auto rounded-md border border-border bg-secondary/40 p-3 font-mono text-xs text-foreground">{formatInputs(selectedTestCase.input, translation.inputNames)}</pre>
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-[11px] font-semibold text-muted-foreground">Expected output</h3>
                      <pre className="overflow-x-auto rounded-md border border-border bg-secondary/40 p-3 font-mono text-xs text-accent">{formatCompactJson(selectedTestCase.expectedOutput)}</pre>
                    </div>
                    {hiddenCasesCount > 0 && <p className="text-[11px] text-muted-foreground">Bu problemde ayrıca {hiddenCasesCount} gizli judge testi bulunur.</p>}
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">Bu problem için testcase bulunmuyor.</p>
                )}
              </div>
            ) : (
              <div role="tabpanel" className="flex min-h-[155px] flex-col items-center justify-center gap-2 p-6 text-center">
                <Terminal className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">Test sonuçları burada görünecek</p>
                <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
                  Kod çalıştırma altyapısı bağlandığında her testcase için durum, çıktı ve çalışma süresi burada listelenecek.
                </p>
              </div>
            )}
          </section>
        </section>
      </div>
    </div>
  );
}

const STARTER_LANGUAGE_OPTIONS: { id: SupportedLanguage; label: string }[] = [
  { id: "cpp", label: "C++" },
  { id: "java", label: "Java" },
  { id: "python", label: "Python" },
];

"use client";

import { useState, type ReactNode } from "react";
import { Terminal } from "lucide-react";
import type { Problem } from "../types";

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

interface TestPanelProps {
  testCases: Problem["testCases"];
  inputNames: string[];
  activeTab: "testcase" | "result";
  onTabChange: (tab: "testcase" | "result") => void;
  resultContent?: ReactNode;
}

export function TestPanel({
  testCases,
  inputNames,
  activeTab,
  onTabChange,
  resultContent,
}: TestPanelProps) {
  const visibleCases = testCases.filter((testCase) => !testCase.isHidden);
  const hiddenCasesCount = testCases.length - visibleCases.length;

  const [selectedTestCaseId, setSelectedTestCaseId] = useState<string | null>(
    visibleCases[0]?.id ?? null
  );

  const selectedTestCase =
    visibleCases.find((testCase) => testCase.id === selectedTestCaseId) ?? visibleCases[0];

  return (
    <section className="min-h-[210px] overflow-hidden rounded-lg border border-border bg-surface text-surface-foreground">
      <div role="tablist" aria-label="Test paneli" className="flex items-center gap-5 border-b border-border px-4">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "testcase"}
          onClick={() => onTabChange("testcase")}
          className={`border-b-2 py-3 text-xs font-semibold transition-colors ${
            activeTab === "testcase"
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Testcase
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "result"}
          onClick={() => onTabChange("result")}
          className={`flex items-center gap-1.5 border-b-2 py-3 text-xs font-semibold transition-colors ${
            activeTab === "result"
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Terminal className="h-3.5 w-3.5" /> Test Result
        </button>
      </div>

      {activeTab === "testcase" ? (
        <div role="tabpanel" className="p-4">
          <div role="tablist" aria-label="Testcase seçimi" className="mb-4 flex gap-2 overflow-x-auto">
            {visibleCases.map((testCase, index) => (
              <button
                key={testCase.id}
                type="button"
                role="tab"
                aria-selected={(selectedTestCase?.id ?? null) === testCase.id}
                onClick={() => setSelectedTestCaseId(testCase.id)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  (selectedTestCase?.id ?? null) === testCase.id
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                }`}
              >
                Case {index + 1}
              </button>
            ))}
          </div>

          {selectedTestCase ? (
            <div className="space-y-3">
              <div>
                <h3 className="mb-1.5 text-[11px] font-semibold text-muted-foreground">Input</h3>
                <pre className="overflow-x-auto rounded-md border border-border bg-secondary/40 p-3 font-mono text-xs text-foreground">
                  {formatInputs(selectedTestCase.input, inputNames)}
                </pre>
              </div>
              <div>
                <h3 className="mb-1.5 text-[11px] font-semibold text-muted-foreground">Expected output</h3>
                <pre className="overflow-x-auto rounded-md border border-border bg-secondary/40 p-3 font-mono text-xs text-accent">
                  {formatCompactJson(selectedTestCase.expectedOutput)}
                </pre>
              </div>
              {hiddenCasesCount > 0 && (
                <p className="text-[11px] text-muted-foreground">
                  Bu problemde ayrıca {hiddenCasesCount} gizli judge testi bulunur.
                </p>
              )}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">Bu problem için testcase bulunmuyor.</p>
          )}
        </div>
      ) : resultContent ? (
        <div role="tabpanel" className="p-4">
          {resultContent}
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
  );
}
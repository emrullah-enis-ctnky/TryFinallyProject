/**
 * Judge'ın ihtiyaç duyduğu soru verisini problems/<slug>/ klasöründen okur:
 *   - testcases.json      -> testler
 *   - tr.md               -> puan ve her dilin başlangıç kodu
 *
 * Sitedeki soru servisi (src/features/problems/service.ts) aynı dosyaları okur;
 * judge, Next.js'e bağımlı olmadan çalışabilsin diye burada küçük bir okuyucu var.
 */

import { readFile } from "node:fs/promises";
import path from "node:path";
import type { JudgeLanguage, JudgeTestCase } from "../../src/features/judge/types.ts";

export interface JudgeProblem {
  slug: string;
  points: number;
  starterCode: Record<JudgeLanguage, string>;
  tests: JudgeTestCase[];
}

const PROBLEMS_DIR = process.env.JUDGE_PROBLEMS_DIR ?? path.join(process.cwd(), "problems");

export async function loadJudgeProblem(slug: string): Promise<JudgeProblem | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const directory = path.join(PROBLEMS_DIR, slug);

  let markdown: string;
  let rawTests: string;
  try {
    [markdown, rawTests] = await Promise.all([
      readFile(path.join(directory, "tr.md"), "utf8"),
      readFile(path.join(directory, "testcases.json"), "utf8"),
    ]);
  } catch {
    return null;
  }

  const points = Number(markdown.match(/^points:\s*(\d+)/m)?.[1] ?? 0);
  const starterCode = {} as Record<JudgeLanguage, string>;
  for (const block of markdown.matchAll(/```(cpp|java|python)\s*\r?\n([\s\S]*?)\r?\n```/g)) {
    starterCode[block[1] as JudgeLanguage] = block[2];
  }

  const parsed = JSON.parse(rawTests) as {
    cases: Array<{ id: string; input: unknown[]; expectedOutput: unknown; isHidden?: boolean }>;
  };
  const tests = parsed.cases.map((testCase) => ({
    id: testCase.id,
    input: JSON.stringify(testCase.input),
    expectedOutput: JSON.stringify(testCase.expectedOutput),
    isHidden: testCase.isHidden ?? false,
  }));

  return { slug, points, starterCode, tests };
}

/** "Çalıştır" sadece görünür testleri, "Gönder" hepsini kullanır. */
export function testsFor(problem: JudgeProblem, kind: "run" | "submit"): JudgeTestCase[] {
  return kind === "run" ? problem.tests.filter((test) => !test.isHidden) : problem.tests;
}

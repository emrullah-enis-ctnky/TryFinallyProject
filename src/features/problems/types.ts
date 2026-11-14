/** Problem content and judging result types. */

export type ProblemDifficulty = "kolay" | "orta" | "zor";
export type SupportedLanguage = "cpp" | "java" | "python";
export type ProblemContentLanguage = "tr" | "en" | "de";

export interface TestCase {
  id: string;
  /** JSON encoded function arguments, for example `[3,5]`. */
  input: string;
  /** JSON encoded expected return value, for example `8`. */
  expectedOutput: string;
  isHidden?: boolean;
  explanation?: string;
}

export interface ProblemTranslation {
  title: string;
  topics: string[];
  description: string;
  starterCode: Record<SupportedLanguage, string>;
  /** Function parameter names in the same order as each testcase's input array. */
  inputNames: string[];
  hints: string[];
  contentMarkdown: string;
}

/**
 * The original problem shape is retained for existing list/profile consumers.
 * `translations` and `contentMarkdown` provide the localized Markdown content.
 */
export interface Problem {
  id: string;
  slug: string;
  title: string;
  difficulty: ProblemDifficulty;
  topics: string[];
  description: string;
  starterCode: Record<SupportedLanguage, string>;
  testCases: TestCase[];
  hints: string[];
  points: number;
  contentMarkdown: string;
  translations: Record<ProblemContentLanguage, ProblemTranslation>;
}

export interface TestCaseResult {
  testCaseId: string;
  passed: boolean;
  actualOutput: string;
  expectedOutput: string;
  error?: string;
  executionTimeMs: number;
}

export interface SubmissionResult {
  problemId: string;
  status: "accepted" | "wrong_answer" | "runtime_error" | "time_limit_exceeded";
  results: TestCaseResult[];
  totalTimeMs: number;
  message?: string;
}

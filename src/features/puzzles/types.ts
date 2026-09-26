/**
 * ==============================================================================
 * TryFinally — Algoritma Soruları Tip Tanımları (Puzzles Types)
 * ==============================================================================
 * Algoritma problemleri, test senaryoları (test cases) ve çözüm sonuçları.
 * ==============================================================================
 */

export type PuzzleDifficulty = "kolay" | "orta" | "zor";
export type SupportedLanguage = "javascript" | "python";

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  isHidden?: boolean; // Kullanıcıdan gizlenen uç durum testleri (edge cases)
  explanation?: string;
}

export interface Puzzle {
  id: string;
  slug: string;
  title: string;
  difficulty: PuzzleDifficulty;
  category: string;
  description: string;
  starterCode: {
    javascript: string;
    python: string;
  };
  testCases: TestCase[];
  hints: string[];
  points: number;
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
  puzzleId: string;
  status: "accepted" | "wrong_answer" | "runtime_error" | "time_limit_exceeded";
  results: TestCaseResult[];
  totalTimeMs: number;
  message?: string;
}

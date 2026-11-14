/** Reads localized problem statements and judge cases from the root problems directory. */

import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { logger } from "@/lib/logger";
import type {
  Problem,
  ProblemContentLanguage,
  ProblemDifficulty,
  ProblemTranslation,
  SupportedLanguage,
  TestCase,
} from "./types";

const CONTENT_LANGUAGES: ProblemContentLanguage[] = ["tr", "en", "de"];
const STARTER_LANGUAGES: SupportedLanguage[] = ["cpp", "java", "python"];
const PROBLEMS_DIRECTORY = path.join(process.cwd(), "problems");

interface ProblemMetadata {
  slug: string;
  title: string;
  difficulty: ProblemDifficulty;
  topics: string[];
  points: number;
}

interface RawTestCase {
  id: string;
  input: unknown[];
  expectedOutput: unknown;
  isHidden?: boolean;
  explanation?: string;
}

interface RawTestCasesFile {
  cases: RawTestCase[];
}

function parseMarkdownFile(markdown: string, filePath: string) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)([\s\S]*)$/);
  if (!match) {
    throw new Error(`Markdown frontmatter bulunamadı: ${filePath}`);
  }

  const metadata: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator < 1) continue;
    const key = line.slice(0, separator).trim();
    metadata[key] = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "");
  }

  const { slug, title, difficulty, points } = metadata;
  const topicsValue = (metadata.topics ?? "").replace(/^\[/, "").replace(/\]$/, "");
  const topics = topicsValue.split(",").map((topic) => topic.trim()).filter(Boolean);
  if (!slug || !title || !difficulty || topics.length === 0 || !points) {
    throw new Error(`Eksik problem metadata alanı: ${filePath}`);
  }
  if (!["kolay", "orta", "zor"].includes(difficulty)) {
    throw new Error(`Geçersiz zorluk seviyesi (${difficulty}): ${filePath}`);
  }
  const parsedPoints = Number(points);
  if (!Number.isInteger(parsedPoints) || parsedPoints < 0) {
    throw new Error(`Geçersiz puan değeri (${points}): ${filePath}`);
  }

  return {
    metadata: {
      slug,
      title,
      difficulty: difficulty as ProblemDifficulty,
      topics,
      points: parsedPoints,
    } satisfies ProblemMetadata,
    body: match[2].trim(),
  };
}

function sectionBody(markdown: string, heading: string): string {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim().toLowerCase() === `## ${heading.toLowerCase()}`);
  if (start < 0) return "";
  const content: string[] = [];
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^#{1,2}\s/.test(lines[index])) break;
    content.push(lines[index]);
  }
  return content.join("\n").trim();
}

function parseStarterCode(markdown: string, filePath: string): Record<SupportedLanguage, string> {
  const code: Partial<Record<SupportedLanguage, string>> = {};
  const blocks = markdown.matchAll(/```(cpp|java|python)\s*\r?\n([\s\S]*?)\r?\n```/g);
  for (const block of blocks) {
    code[block[1] as SupportedLanguage] = block[2];
  }
  for (const language of STARTER_LANGUAGES) {
    if (!code[language]) {
      throw new Error(`${language} başlangıç kodu bulunamadı: ${filePath}`);
    }
  }
  return code as Record<SupportedLanguage, string>;
}

function parseInputNames(pythonCode: string, filePath: string): string[] {
  const signature = pythonCode.match(/^\s*def\s+\w+\s*\(([^)]*)\)\s*:/m);
  if (!signature) throw new Error(`Python fonksiyon imzası bulunamadı: ${filePath}`);

  const names = signature[1]
    .split(",")
    .map((parameter) => parameter.trim().match(/^([A-Za-z_]\w*)/)?.[1])
    .filter((name): name is string => Boolean(name) && name !== "self" && name !== "cls");
  if (names.length === 0) throw new Error(`Fonksiyon girdileri bulunamadı: ${filePath}`);
  return names;
}

function toPlainText(markdown: string): string {
  return markdown
    .replace(/\r?\n/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

async function readTranslation(
  directory: string,
  language: ProblemContentLanguage,
): Promise<{ metadata: ProblemMetadata; translation: ProblemTranslation }> {
  const filePath = path.join(directory, `${language}.md`);
  const markdown = await readFile(filePath, "utf8");
  const { metadata, body } = parseMarkdownFile(markdown, filePath);
  const problemStatement = sectionBody(body, "Problem");
  const description = toPlainText(problemStatement);
  if (!description) throw new Error(`Problem bölümü boş: ${filePath}`);

  const constraintsHeading = language === "tr" ? "Kısıtlamalar" : language === "de" ? "Einschränkungen" : "Constraints";
  const constraints = sectionBody(body, constraintsHeading);
  const hintHeading = language === "tr" ? "İpucu" : language === "de" ? "Hinweis" : "Hint";
  const hint = toPlainText(sectionBody(body, hintHeading));
  const starterCodeHeadingBody = body;
  const starterCode = parseStarterCode(starterCodeHeadingBody, filePath);
  const inputNames = parseInputNames(starterCode.python, filePath);
  const contentMarkdown = [
    `## Problem\n\n${problemStatement}`,
    constraints ? `## ${constraintsHeading}\n\n${constraints}` : "",
  ].filter(Boolean).join("\n\n");

  return {
    metadata,
    translation: {
      title: metadata.title,
      topics: metadata.topics,
      description,
      starterCode,
      inputNames,
      hints: hint ? [hint] : [],
      contentMarkdown,
    },
  };
}

async function readTestCases(directory: string): Promise<TestCase[]> {
  const filePath = path.join(directory, "testcases.json");
  const raw = JSON.parse(await readFile(filePath, "utf8")) as RawTestCasesFile;
  if (!Array.isArray(raw.cases) || raw.cases.length === 0) {
    throw new Error(`Test case listesi boş veya geçersiz: ${filePath}`);
  }

  return raw.cases.map((testCase) => {
    if (!testCase.id || !Array.isArray(testCase.input) || !("expectedOutput" in testCase)) {
      throw new Error(`Geçersiz test case: ${filePath}`);
    }
    return {
      id: testCase.id,
      input: JSON.stringify(testCase.input),
      expectedOutput: JSON.stringify(testCase.expectedOutput),
      isHidden: testCase.isHidden ?? false,
      ...(testCase.explanation ? { explanation: testCase.explanation } : {}),
    };
  });
}

async function readProblem(directoryName: string, language: ProblemContentLanguage): Promise<Problem> {
  const directory = path.join(PROBLEMS_DIRECTORY, directoryName);
  const localized = await Promise.all(
    CONTENT_LANGUAGES.map(async (contentLanguage) => [
      contentLanguage,
      await readTranslation(directory, contentLanguage),
    ] as const),
  );
  const loaded = Object.fromEntries(localized) as Record<
    ProblemContentLanguage,
    { metadata: ProblemMetadata; translation: ProblemTranslation }
  >;

  const canonical = loaded.tr.metadata;
  if (canonical.slug !== directoryName) {
    throw new Error(`Klasör adı ile slug eşleşmiyor: ${directoryName}`);
  }
  for (const contentLanguage of CONTENT_LANGUAGES) {
    if (loaded[contentLanguage].metadata.slug !== canonical.slug) {
      throw new Error(`Dil dosyalarının slug değerleri eşleşmiyor: ${directory}`);
    }
    if (loaded[contentLanguage].metadata.difficulty !== canonical.difficulty) {
      throw new Error(`Dil dosyalarının difficulty değerleri eşleşmiyor: ${directory}`);
    }
    if (loaded[contentLanguage].metadata.points !== canonical.points) {
      throw new Error(`Dil dosyalarının points değerleri eşleşmiyor: ${directory}`);
    }
  }

  const translations = Object.fromEntries(
    CONTENT_LANGUAGES.map((contentLanguage) => [contentLanguage, loaded[contentLanguage].translation]),
  ) as Record<ProblemContentLanguage, ProblemTranslation>;
  const selected = translations[language];

  return {
    id: canonical.slug,
    slug: canonical.slug,
    title: selected.title,
    difficulty: canonical.difficulty,
    topics: selected.topics,
    description: selected.description,
    starterCode: selected.starterCode,
    testCases: await readTestCases(directory),
    hints: selected.hints,
    points: canonical.points,
    contentMarkdown: selected.contentMarkdown,
    translations,
  };
}

/** Load every problem folder, using the requested statement language (Turkish by default). */
export async function getProblems(language: ProblemContentLanguage = "tr"): Promise<Problem[]> {
  logger.info("Problems", "Problem içerikleri yükleniyor", { language });
  const entries = await readdir(PROBLEMS_DIRECTORY, { withFileTypes: true });
  const directories = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  return Promise.all(directories.map((directory) => readProblem(directory, language)));
}

/** Find one problem by slug and load its localized Markdown statements. */
export async function getProblemBySlug(
  slug: string,
  language: ProblemContentLanguage = "tr",
): Promise<Problem | null> {
  logger.info("Problems", "Problem detayı yükleniyor", { slug, language });
  const problems = await getProblems(language);
  return problems.find((problem) => problem.slug === slug) ?? null;
}

/** Load only problems tagged with the requested topic. Topic labels are exact and language-specific. */
export async function getProblemsByTopic(
  topic: string,
  language: ProblemContentLanguage = "tr",
): Promise<Problem[]> {
  const problems = await getProblems(language);
  return problems.filter((problem) => problem.topics.includes(topic));
}

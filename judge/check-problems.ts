/**
 * Soru kontrol aracı: problems/ altındaki her sorunun judge'a uygun olup olmadığını denetler.
 *
 *   npm run judge:check                      (resmi çözümleri Docker'da çalıştırır)
 *   npm run judge:check -- --local           (resmi çözümleri bu bilgisayarda çalıştırır)
 *   npm run judge:check -- --no-run          (çözümleri çalıştırmadan sadece dosyaları kontrol eder)
 *   npm run judge:check -- two-sum           (sadece bir soru)
 *
 * ✗ hata   : düzeltilmeden soru judge'da çalışmaz ya da yanlış sonuç verir
 * ⚠ uyarı  : çalışır ama bir eksik ya da risk var
 */

import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { JudgeLanguage, JudgeTestCase } from "../src/features/judge/types.ts";
import { judge } from "./engine/index.ts";
import { parseSignature, type MethodSignature, type ValueType } from "./engine/signature.ts";

const PROBLEMS_DIR = process.env.JUDGE_PROBLEMS_DIR ?? path.join(process.cwd(), "problems");
const CONTENT_LANGUAGES = ["tr", "en", "de"] as const;
const CODE_LANGUAGES: JudgeLanguage[] = ["cpp", "java", "python"];
const SOLUTION_FILES: Record<JudgeLanguage, string> = { cpp: "solution.cpp", java: "Solution.java", python: "solution.py" };
const INT_MIN = -(2 ** 31);
const INT_MAX = 2 ** 31 - 1;

interface Report {
  errors: string[];
  warnings: string[];
  notes: string[];
}

function typeName(type: ValueType): string {
  return type.kind === "array" || type.kind === "list" ? `${typeName(type.of)}[]` : type.kind;
}

/** Bir JSON değerinin tipe uyup uymadığını kontrol eder. Uymuyorsa nedenini döner. */
function checkValue(value: unknown, type: ValueType, where: string): string | null {
  switch (type.kind) {
    case "int":
      if (!Number.isInteger(value)) return `${where}: tam sayı (int) bekleniyordu, ${JSON.stringify(value)} geldi`;
      if ((value as number) < INT_MIN || (value as number) > INT_MAX) {
        return `${where}: ${value} int sınırlarının dışında (C++/Java'da taşar); tipi long yapın`;
      }
      return null;
    case "long":
      if (!Number.isInteger(value)) return `${where}: tam sayı (long) bekleniyordu, ${JSON.stringify(value)} geldi`;
      if (!Number.isSafeInteger(value)) return `${where}: ${value} çok büyük, JSON'da hassasiyet kaybolur (±9007199254740991 sınırı)`;
      return null;
    case "double":
      return typeof value === "number" ? null : `${where}: sayı bekleniyordu, ${JSON.stringify(value)} geldi`;
    case "bool":
      return typeof value === "boolean" ? null : `${where}: true/false bekleniyordu, ${JSON.stringify(value)} geldi`;
    case "string":
      return typeof value === "string" ? null : `${where}: metin bekleniyordu, ${JSON.stringify(value)} geldi`;
    case "array":
    case "list": {
      if (!Array.isArray(value)) return `${where}: liste bekleniyordu, ${JSON.stringify(value)?.slice(0, 40)} geldi`;
      for (let index = 0; index < value.length; index += 1) {
        const problem = checkValue(value[index], type.of, `${where}[${index}]`);
        if (problem) return problem;
      }
      return null;
    }
  }
}

function hasNonAscii(value: unknown): boolean {
  if (typeof value === "string") return /[^\x00-\x7F]/.test(value);
  if (Array.isArray(value)) return value.some(hasNonAscii);
  return false;
}

function sameType(a: ValueType, b: ValueType): boolean {
  const normalize = (kind: ValueType["kind"]) => (kind === "list" ? "array" : kind);
  if (normalize(a.kind) !== normalize(b.kind)) return false;
  if ((a.kind === "array" || a.kind === "list") && (b.kind === "array" || b.kind === "list")) return sameType(a.of, b.of);
  return true;
}

function signatureText(signature: MethodSignature): string {
  const params = signature.params.map((param) => `${typeName(param.type)} ${param.name}`).join(", ");
  return `${signature.returns ? typeName(signature.returns) : "?"} ${signature.name}(${params})`;
}

function frontmatter(markdown: string): Record<string, string> {
  const block = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
  return Object.fromEntries(
    block
      .split(/\r?\n/)
      .map((line) => line.split(/:(.*)/s).map((part) => part.trim()))
      .filter((parts) => parts.length >= 2 && parts[0]),
  );
}

function starterBlocks(markdown: string): Partial<Record<JudgeLanguage, string>> {
  const blocks: Partial<Record<JudgeLanguage, string>> = {};
  for (const block of markdown.matchAll(/```(cpp|java|python)\s*\r?\n([\s\S]*?)\r?\n```/g)) {
    blocks[block[1] as JudgeLanguage] = block[2];
  }
  return blocks;
}

async function checkProblem(slug: string, runSolutions: boolean, local: boolean): Promise<Report> {
  const report: Report = { errors: [], warnings: [], notes: [] };
  const directory = path.join(PROBLEMS_DIR, slug);

  // --- 1. Dil dosyaları ---------------------------------------------------------
  const markdowns: Partial<Record<(typeof CONTENT_LANGUAGES)[number], string>> = {};
  for (const language of CONTENT_LANGUAGES) {
    const file = path.join(directory, `${language}.md`);
    if (!existsSync(file)) {
      report.errors.push(`${language}.md dosyası yok`);
      continue;
    }
    markdowns[language] = await readFile(file, "utf8");
  }
  if (!markdowns.tr) return report;

  const trMeta = frontmatter(markdowns.tr);
  if (trMeta.slug !== slug) report.errors.push(`tr.md içindeki slug (${trMeta.slug}) klasör adıyla aynı değil`);
  if (!["kolay", "orta", "zor"].includes(trMeta.difficulty)) report.errors.push(`difficulty "${trMeta.difficulty}" geçersiz (kolay/orta/zor)`);
  if (!/^\d+$/.test(trMeta.points ?? "")) report.errors.push(`points "${trMeta.points}" geçersiz`);
  for (const language of CONTENT_LANGUAGES) {
    const meta = markdowns[language] ? frontmatter(markdowns[language]!) : null;
    if (!meta) continue;
    for (const key of ["slug", "difficulty", "points"]) {
      if (meta[key] !== trMeta[key]) report.errors.push(`${language}.md "${key}" değeri tr.md ile farklı (${meta[key]} ≠ ${trMeta[key]})`);
    }
    if (!meta.title) report.errors.push(`${language}.md başlık (title) eksik`);
  }

  // --- 2. Başlangıç kodları ve imzalar --------------------------------------------
  const signatures: Partial<Record<JudgeLanguage, MethodSignature>> = {};
  const trStarter = starterBlocks(markdowns.tr);
  for (const language of CODE_LANGUAGES) {
    const code = trStarter[language];
    if (!code) {
      report.errors.push(`tr.md içinde ${language} başlangıç kodu yok`);
      continue;
    }
    try {
      signatures[language] = parseSignature(language, code);
    } catch (error) {
      report.errors.push(`${language} başlangıç kodu judge'a uygun değil: ${(error as Error).message}`);
    }
  }
  // Diğer dillerdeki metinlerde de aynı imza olmalı (sadece yorumlar farklı olabilir).
  for (const language of ["en", "de"] as const) {
    if (!markdowns[language]) continue;
    const blocks = starterBlocks(markdowns[language]!);
    for (const codeLanguage of CODE_LANGUAGES) {
      const reference = signatures[codeLanguage];
      const code = blocks[codeLanguage];
      if (!reference) continue;
      if (!code) {
        report.errors.push(`${language}.md içinde ${codeLanguage} başlangıç kodu yok`);
        continue;
      }
      try {
        if (signatureText(parseSignature(codeLanguage, code)) !== signatureText(reference)) {
          report.errors.push(`${language}.md'deki ${codeLanguage} imzası tr.md'den farklı`);
        }
      } catch {
        report.errors.push(`${language}.md'deki ${codeLanguage} başlangıç kodu okunamadı`);
      }
    }
  }

  const { cpp, java, python } = signatures;
  if (cpp && java) {
    if (cpp.name !== java.name || (python && python.name !== cpp.name)) {
      report.errors.push(`Metot adı dillere göre farklı: cpp=${cpp.name}, java=${java.name}, python=${python?.name}`);
    }
    const sameParams =
      cpp.params.length === java.params.length && cpp.params.every((param, index) => sameType(param.type, java.params[index].type));
    if (!sameParams || !cpp.returns || !java.returns || !sameType(cpp.returns, java.returns)) {
      report.errors.push(`C++ ve Java imzaları uyuşmuyor: "${signatureText(cpp)}" ≠ "${signatureText(java)}"`);
    }
    if (python && python.params.length !== cpp.params.length) {
      report.errors.push(`Python'daki parametre sayısı (${python.params.length}) C++'takiyle (${cpp.params.length}) farklı`);
    }
  }
  const reference = cpp ?? java;
  if (reference) report.notes.push(`İmza: ${signatureText(reference)}`);

  // --- 3. Testler ----------------------------------------------------------------
  let tests: JudgeTestCase[] = [];
  const testsFile = path.join(directory, "testcases.json");
  if (!existsSync(testsFile)) {
    report.errors.push("testcases.json yok");
  } else {
    let cases: Array<{ id?: unknown; input?: unknown; expectedOutput?: unknown; isHidden?: unknown }> = [];
    try {
      cases = (JSON.parse(await readFile(testsFile, "utf8")) as { cases: typeof cases }).cases;
      if (!Array.isArray(cases) || cases.length === 0) throw new Error("cases listesi boş");
    } catch (error) {
      report.errors.push(`testcases.json okunamadı: ${(error as Error).message}`);
      cases = [];
    }

    const ids = new Set<string>();
    let nonAscii = false;
    for (const [index, testCase] of cases.entries()) {
      const id = typeof testCase.id === "string" ? testCase.id : `#${index + 1}`;
      if (typeof testCase.id !== "string") report.errors.push(`${id}: "id" alanı yok`);
      if (ids.has(id)) report.errors.push(`${id}: aynı id iki kez kullanılmış`);
      ids.add(id);
      if (!Array.isArray(testCase.input)) {
        report.errors.push(`${id}: "input" bir liste olmalı (fonksiyon argümanları)`);
        continue;
      }
      if (!("expectedOutput" in testCase)) report.errors.push(`${id}: "expectedOutput" yok`);
      if (hasNonAscii(testCase.input) || hasNonAscii(testCase.expectedOutput)) nonAscii = true;

      if (reference) {
        if (testCase.input.length !== reference.params.length) {
          report.errors.push(`${id}: ${testCase.input.length} argüman var, fonksiyon ${reference.params.length} parametre alıyor`);
        } else {
          reference.params.forEach((param, paramIndex) => {
            const problem = checkValue((testCase.input as unknown[])[paramIndex], param.type, `${id} ${param.name}`);
            if (problem) report.errors.push(problem);
          });
        }
        if (reference.returns) {
          const problem = checkValue(testCase.expectedOutput, reference.returns, `${id} beklenen çıktı`);
          if (problem) report.errors.push(problem);
        }
      }
    }

    tests = cases
      .filter((testCase) => typeof testCase.id === "string" && Array.isArray(testCase.input))
      .map((testCase) => ({
        id: testCase.id as string,
        input: JSON.stringify(testCase.input),
        expectedOutput: JSON.stringify(testCase.expectedOutput ?? null),
        isHidden: testCase.isHidden === true,
      }));
    const visible = tests.filter((test) => !test.isHidden).length;
    const hidden = tests.length - visible;
    report.notes.push(`${tests.length} test (${visible} görünür, ${hidden} gizli)`);
    if (visible === 0) report.warnings.push("Hiç görünür test yok; \"Çalıştır\" butonu boş çalışır");
    if (hidden === 0) report.warnings.push("Hiç gizli test yok; kullanıcı görünür testlere göre ezber kod yazabilir");
    if (nonAscii) {
      report.warnings.push("Testlerde Türkçe/ASCII dışı karakter var; C++'ta string bayt bayt işlendiği için doğru çözümler yanlış alabilir");
    }
  }

  // --- 4. Resmi çözümler -----------------------------------------------------------
  const solutionsDir = path.join(directory, "solutions");
  const available = CODE_LANGUAGES.filter((language) => existsSync(path.join(solutionsDir, SOLUTION_FILES[language])));
  const missing = CODE_LANGUAGES.filter((language) => !available.includes(language));
  if (available.length === 0) report.warnings.push("Resmi çözüm yok (solutions/solution.py, Solution.java, solution.cpp)");
  else if (missing.length > 0) report.warnings.push(`Resmi çözüm eksik: ${missing.join(", ")}`);

  if (runSolutions && tests.length > 0 && report.errors.length === 0) {
    for (const language of available) {
      const result = await judge(
        {
          language,
          code: await readFile(path.join(solutionsDir, SOLUTION_FILES[language]), "utf8"),
          starterCode: trStarter[language]!,
          tests,
        },
        local ? { mode: "local" } : {},
      );
      const summary = `${result.verdict} ${result.passedCount}/${result.totalCount}, en uzun ${result.runtimeMs ?? "-"} ms`;
      if (result.verdict === "ACCEPTED") {
        report.notes.push(`Resmi çözüm (${language}): ${summary}`);
      } else if (result.verdict === "INTERNAL_ERROR") {
        report.warnings.push(`Resmi çözüm (${language}) çalıştırılamadı: ${result.internalMessage?.split("\n")[0]}`);
      } else {
        const failed = result.failedTest;
        const detail = failed
          ? ` — ${failed.id}: beklenen ${failed.expectedOutput}, gelen ${failed.actualOutput ?? failed.error?.split("\n").pop() ?? "-"}`
          : result.compileOutput
            ? ` — ${result.compileOutput.split("\n")[0]}`
            : "";
        report.errors.push(`Resmi çözüm (${language}) geçmedi: ${summary}${detail}`);
      }
    }
  }

  return report;
}

async function main() {
  const args = process.argv.slice(2);
  const local = args.includes("--local");
  const runSolutions = !args.includes("--no-run");
  const only = args.filter((arg) => !arg.startsWith("--"));

  const entries = await readdir(PROBLEMS_DIR, { withFileTypes: true });
  const slugs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => only.length === 0 || only.includes(slug))
    .sort();

  let errorCount = 0;
  let warningCount = 0;
  for (const slug of slugs) {
    const report = await checkProblem(slug, runSolutions, local);
    errorCount += report.errors.length;
    warningCount += report.warnings.length;
    const mark = report.errors.length > 0 ? "✗" : report.warnings.length > 0 ? "⚠" : "✓";
    console.log(`\n${mark} ${slug}`);
    for (const note of report.notes) console.log(`    ${note}`);
    for (const warning of report.warnings) console.log(`  ⚠ ${warning}`);
    for (const error of report.errors) console.log(`  ✗ ${error}`);
  }

  console.log(`\n${slugs.length} soru kontrol edildi: ${errorCount} hata, ${warningCount} uyarı`);
  process.exit(errorCount > 0 ? 1 : 0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

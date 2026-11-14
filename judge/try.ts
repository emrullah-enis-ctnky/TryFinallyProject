/**
 * Veritabanı ve site olmadan judge'ı denemek için komut.
 *
 *   npm run judge:try -- <soru-slug> <cpp|java|python> <kod-dosyası> [--run] [--local]
 *
 * Örnek:
 *   npm run judge:try -- two-sum python judge/examples/two-sum/accepted.py
 *
 * --run   : sadece görünür testler ("Çalıştır" butonu gibi)
 * --local : Docker yerine doğrudan bu bilgisayarda çalıştır (sadece geliştirme için)
 */

import { readFile } from "node:fs/promises";
import type { JudgeLanguage } from "../src/features/judge/types.ts";
import { judge, loadJudgeProblem, testsFor } from "./engine/index.ts";

async function main() {
  const args = process.argv.slice(2);
  const flags = new Set(args.filter((arg) => arg.startsWith("--")));
  const [slug, language, file] = args.filter((arg) => !arg.startsWith("--"));

  if (!slug || !language || !file || !["cpp", "java", "python"].includes(language)) {
    console.log("Kullanım: npm run judge:try -- <soru-slug> <cpp|java|python> <kod-dosyası> [--run] [--local]");
    process.exit(1);
  }

  const problem = await loadJudgeProblem(slug);
  if (!problem) {
    console.error(`Soru bulunamadı: problems/${slug}`);
    process.exit(1);
  }

  const result = await judge(
    {
      language: language as JudgeLanguage,
      code: await readFile(file, "utf8"),
      starterCode: problem.starterCode[language as JudgeLanguage],
      tests: testsFor(problem, flags.has("--run") ? "run" : "submit"),
    },
    flags.has("--local") ? { mode: "local" } : {},
  );

  console.log(`\nSonuç: ${result.verdict}  (${result.passedCount}/${result.totalCount} test, en uzun ${result.runtimeMs ?? "-"} ms)\n`);
  for (const test of result.tests) {
    const mark = test.passed ? "✓" : test.verdict ? "✗" : "·";
    console.log(`  ${mark} ${test.id}${test.isHidden ? " (gizli)" : ""}  ${test.verdict ?? "çalışmadı"}  ${test.timeMs ?? "-"} ms`);
  }
  if (result.compileOutput) console.log(`\nDerleme çıktısı:\n${result.compileOutput}`);
  if (result.failedTest) {
    const failed = result.failedTest;
    console.log(`\nİlk başarısız test: ${failed.id}`);
    console.log(`  Girdi    : ${failed.input}`);
    console.log(`  Beklenen : ${failed.expectedOutput}`);
    if (failed.actualOutput !== undefined) console.log(`  Senin    : ${failed.actualOutput}`);
    if (failed.stdout) console.log(`  Stdout   :\n${failed.stdout}`);
    if (failed.error) console.log(`  Hata     :\n${failed.error}`);
  }
  if (result.internalMessage) console.log(`\nJudge hatası: ${result.internalMessage}`);
  if (result.extraStdout) console.log(`\nEk çıktı:\n${result.extraStdout}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

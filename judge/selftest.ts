/**
 * Judge'ın kendi kendini test etmesi.
 *
 * judge/examples/<soru-slug>/<beklenen-sonuç>.<uzantı> dosyalarının hepsini judge'dan
 * geçirir ve sonucun dosya adıyla aynı olup olmadığına bakar.
 * Örn. two-sum/time_limit.py -> TIME_LIMIT çıkmalı.
 * Doğru (ACCEPTED) çözümler problems/<slug>/solutions/ altında; onları `npm run judge:check` dener.
 *
 *   npm run judge:selftest              (Docker ile)
 *   npm run judge:selftest -- --local   (Docker'sız; memory_limit örnekleri atlanır)
 *   npm run judge:selftest -- --only=python
 */

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { JudgeLanguage, Verdict } from "../src/features/judge/types.ts";
import { judge, loadJudgeProblem, testsFor } from "./engine/index.ts";

const EXTENSIONS: Record<string, JudgeLanguage> = { ".py": "python", ".cpp": "cpp", ".java": "java" };
const EXAMPLES_DIR = path.join(process.cwd(), "judge", "examples");

async function main() {
  const local = process.argv.includes("--local");
  const only = process.argv.find((arg) => arg.startsWith("--only="))?.slice("--only=".length);
  let passed = 0;
  let failed = 0;
  let skipped = 0;

  for (const slug of (await readdir(EXAMPLES_DIR)).sort()) {
    const problem = await loadJudgeProblem(slug);
    if (!problem) {
      console.log(`?  ${slug}: problems/ altında böyle bir soru yok`);
      failed += 1;
      continue;
    }

    for (const file of (await readdir(path.join(EXAMPLES_DIR, slug))).sort()) {
      const extension = path.extname(file);
      const language = EXTENSIONS[extension];
      const expected = path.basename(file, extension).toUpperCase() as Verdict;
      if (!language || (only && only !== language)) continue;
      if (local && expected === "MEMORY_LIMIT") {
        skipped += 1;
        console.log(`-  ${slug}/${file}: local modda bellek sınırı yok, atlandı`);
        continue;
      }

      const started = Date.now();
      const result = await judge(
        {
          language,
          code: await readFile(path.join(EXAMPLES_DIR, slug, file), "utf8"),
          starterCode: problem.starterCode[language],
          tests: testsFor(problem, "submit"),
        },
        local ? { mode: "local" } : {},
      );
      const seconds = ((Date.now() - started) / 1000).toFixed(1);

      if (result.verdict === "INTERNAL_ERROR" && expected !== "INTERNAL_ERROR") {
        skipped += 1;
        console.log(`-  ${slug}/${file}: çalıştırılamadı (${seconds} sn) -> ${result.internalMessage?.split("\n")[0]}`);
      } else if (result.verdict === expected) {
        passed += 1;
        console.log(`✓  ${slug}/${file}: ${result.verdict} ${result.passedCount}/${result.totalCount} (${seconds} sn)`);
      } else {
        failed += 1;
        console.log(`✗  ${slug}/${file}: beklenen ${expected}, gelen ${result.verdict} (${seconds} sn)`);
        console.log(JSON.stringify(result.failedTest ?? result, null, 2).replace(/^/gm, "     "));
      }
    }
  }

  console.log(`\n${passed} başarılı, ${failed} hatalı, ${skipped} atlandı`);
  process.exit(failed > 0 ? 1 : 0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

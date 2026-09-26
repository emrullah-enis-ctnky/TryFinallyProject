/**
 * ==============================================================================
 * TryFinally — Algoritma Soruları Servisi (Puzzles Service)
 * ==============================================================================
 * Soru listesi getirme, detay yükleme ve test senaryosu doğrulamalarını yönetir.
 * ==============================================================================
 */

import { logger } from "@/lib/logger";
import type { Puzzle } from "./types";

// Başlangıç için örnek sorular (Seed Data)
const INITIAL_PUZZLES: Puzzle[] = [
  {
    id: "puz-01",
    slug: "iki-sayinin-toplami",
    title: "İki Sayının Toplamı",
    difficulty: "kolay",
    category: "Diziler ve Nesneler",
    description: "Verilen bir tamsayı dizisi `nums` ve bir hedef tamsayı `target` için, toplamları `target` eden iki sayının dizideki indislerini döndürün.",
    starterCode: {
      javascript: `function twoSum(nums, target) {\n  // Çözümünüzü buraya yazın\n  return [0, 1];\n}`,
      python: `def two_sum(nums, target):\n    # Çözümünüzü buraya yazın\n    return [0, 1]`,
    },
    testCases: [
      {
        id: "tc-1",
        input: "[2, 7, 11, 15], 9",
        expectedOutput: "[0, 1]",
        explanation: "nums[0] + nums[1] == 9, bu yüzden [0, 1] döndürülür.",
      },
      {
        id: "tc-2",
        input: "[3, 2, 4], 6",
        expectedOutput: "[1, 2]",
      },
    ],
    hints: [
      "İç içe iki döngü O(n^2) sürede çözer. Daha hızlı bir yol için bir Sözlük (Hash Map) kullanmayı deneyebilirsiniz.",
    ],
    points: 10,
  },
  {
    id: "puz-02",
    slug: "metni-ters-cevirme",
    title: "Metni Ters Çevirme",
    difficulty: "kolay",
    category: "Karakter Dizileri (Strings)",
    description: "Verilen bir karakter dizisini (string) tersine çeviren bir fonksiyon yazın.",
    starterCode: {
      javascript: `function reverseString(str) {\n  // Çözümünüzü buraya yazın\n  return "";\n}`,
      python: `def reverse_string(s):\n    # Çözümünüzü buraya yazın\n    return ""`,
    },
    testCases: [
      {
        id: "tc-1",
        input: '"merhaba"',
        expectedOutput: '"abahrem"',
      },
      {
        id: "tc-2",
        input: '"tryfinally"',
        expectedOutput: '"yllanifyrt"',
      },
    ],
    hints: [
      "JavaScript'te split(''), reverse() ve join('') fonksiyonlarını düşünebilirsiniz. Python'da ise string dilimleme [::-1] oldukça etkilidir.",
    ],
    points: 10,
  },
];

/**
 * Tüm soruları listeler.
 */
export async function getPuzzles(): Promise<Puzzle[]> {
  logger.info("Puzzles", "Algoritma soruları listeleniyor");
  return Promise.resolve(INITIAL_PUZZLES);
}

/**
 * Slug veya ID değerine göre soru detayını getirir.
 */
export async function getPuzzleBySlug(slug: string): Promise<Puzzle | null> {
  logger.info("Puzzles", "Soru detayı sorgulanıyor", { slug });
  const puzzle = INITIAL_PUZZLES.find((p) => p.slug === slug || p.id === slug) || null;
  return Promise.resolve(puzzle);
}

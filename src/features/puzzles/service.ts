/**
 * ==============================================================================
 * TryFinally — Algoritma ve Pratik Soruları Servisi (Puzzles Service)
 * ==============================================================================
 * Yeni başlayan dostu başlangıç problemleri.
 * ==============================================================================
 */

import { logger } from "@/lib/logger";
import type { Puzzle } from "./types";

// Başlangıç için sade ve anlaşılır örnek sorular (Seed Data)
const INITIAL_PUZZLES: Puzzle[] = [
  {
    id: "puz-01",
    slug: "iki-sayiyi-toplama",
    title: "İki Sayıyı Toplama",
    difficulty: "kolay",
    category: "Temel Matematik",
    description: "Verilen iki sayıyı toplayıp sonucunu döndüren bir fonksiyon yazın.",
    starterCode: {
      javascript: `function topla(a, b) {\n  // Çözümünüzü buraya yazın\n  return a + b;\n}`,
      python: `def topla(a, b):\n    # Çözümünüzü buraya yazın\n    return a + b`,
    },
    testCases: [
      {
        id: "tc-1",
        input: "a = 3, b = 5",
        expectedOutput: "8",
        explanation: "3 + 5 = 8",
      },
      {
        id: "tc-2",
        input: "a = 10, b = 20",
        expectedOutput: "30",
      },
    ],
    hints: [
      "Toplama işlemi için artı (+) operatörünü kullanabilirsiniz.",
    ],
    points: 10,
  },
  {
    id: "puz-02",
    slug: "kelimeyi-ters-cevirme",
    title: "Kelimeyi Ters Çevirme",
    difficulty: "kolay",
    category: "Metin İşlemleri",
    description: "Verilen bir kelimeyi tersten yazan bir fonksiyon yazın (Örn: 'kod' -> 'dok').",
    starterCode: {
      javascript: `function tersCevir(kelime) {\n  // Çözümünüzü buraya yazın\n  return kelime;\n}`,
      python: `def ters_cevir(kelime):\n    # Çözümünüzü buraya yazın\n    return kelime`,
    },
    testCases: [
      {
        id: "tc-1",
        input: '"merhaba"',
        expectedOutput: '"abahrem"',
      },
      {
        id: "tc-2",
        input: '"kod"',
        expectedOutput: '"dok"',
      },
    ],
    hints: [
      "Metindeki harfleri sondan başa doğru sırayla okumayı düşünebilirsiniz.",
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

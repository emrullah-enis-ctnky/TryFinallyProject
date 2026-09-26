/**
 * ==============================================================================
 * TryFinally — Öğrenme Yol Haritası Servisi (Learn Service)
 * ==============================================================================
 * Müfredat modüllerini ve konu anlatımlarını yönetir.
 * ==============================================================================
 */

import { logger } from "@/lib/logger";
import type { RoadmapModule } from "./types";

// Başlangıç müfredatı (Seed Data)
const INITIAL_ROADMAP: RoadmapModule[] = [
  {
    id: "mod-01",
    title: "1. Temel Algoritmik Düşünce",
    description: "Programlama mantığı, akış şemaları ve temel problem çözme adımları.",
    order: 1,
    topics: [
      {
        id: "top-01",
        slug: "algoritma-nedir",
        title: "Algoritma Nedir?",
        description: "Gündelik hayattan bilgisayar bilimine adım adım algoritmik düşünce.",
        order: 1,
        durationMinutes: 10,
        isCompleted: true,
      },
      {
        id: "top-02",
        slug: "zaman-ve-alan-karmasikligi",
        title: "Büyük O (Big-O) Notasyonu",
        description: "Yazdığımız kodun ne kadar hızlı ve verimli olduğunu nasıl ölçeriz?",
        order: 2,
        durationMinutes: 15,
        isCompleted: false,
      },
    ],
  },
  {
    id: "mod-02",
    title: "2. Diziler ve Karakter Katarları",
    description: "Verileri sıralı tutma, arama, filtreleme ve manipülasyon.",
    order: 2,
    topics: [
      {
        id: "top-03",
        slug: "dizi-islemleri",
        title: "Dizilerde Gezinme ve İki Gösterici (Two Pointers)",
        description: "Dizileri etkili tarama teknikleri ve pratik yöntemler.",
        order: 1,
        durationMinutes: 20,
        isCompleted: false,
        relatedPuzzleIds: ["puz-01"],
      },
    ],
  },
];

/**
 * Tüm yol haritası modüllerini getirir.
 */
export async function getRoadmapModules(): Promise<RoadmapModule[]> {
  logger.info("Learn", "Öğrenme yol haritası modülleri listeleniyor");
  return Promise.resolve(INITIAL_ROADMAP);
}

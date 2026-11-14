
/**
 * ==============================================================================
 * TryFinally — Başarım ve Rozet Kuralları
 * ==============================================================================
 * Kullanıcının toplam puanına ve çözdüğü problem sayısına göre
 * hangi rozetleri kazanmaya hak kazandığını belirler.
 *
 * Bu dosya veritabanında değişiklik yapmaz.
 * ==============================================================================
 */

import { POINTS_PER_LEVEL } from "./levels";

/**
 * Rozet kazanmak için kullanılabilecek koşul türleri.
 */
export type AchievementCondition =
  | {
      type: "solvedProblems";
      target: number;
    }
  | {
      type: "totalPoints";
      target: number;
    };

/**
 * Sistemde tanımlanan bir rozetin bilgileri.
 */
export interface AchievementDefinition {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: AchievementCondition;
}

/**
 * Kullanıcının rozet değerlendirmesinde kullanılacak istatistikleri.
 */
export interface AchievementProgress {
  totalPoints: number;
  solvedProblemsCount: number;
}

/**
 * Kullanıcıların kazanabileceği rozetler.
 *
 * Her rozetin benzersiz ve değişmeyen bir ID'si bulunur.
 */
export const ACHIEVEMENT_DEFINITIONS: readonly AchievementDefinition[] = [
  {
    id: "badge-first-code",
    name: "İlk Kod",
    description: "İlk programlama problemini başarıyla çözdün.",
    icon: "Code",
    condition: {
      type: "solvedProblems",
      target: 1,
    },
  },
  {
    id: "badge-five-solves",
    name: "İstikrarlı Çözücü",
    description: "5 farklı programlama problemini başarıyla çözdün.",
    icon: "Target",
    condition: {
      type: "solvedProblems",
      target: 5,
    },
  },
  {
    id: "badge-ten-solves",
    name: "Problem Ustası",
    description: "10 farklı programlama problemini başarıyla çözdün.",
    icon: "Trophy",
    condition: {
      type: "solvedProblems",
      target: 10,
    },
  },
  {
    id: "badge-hundred-points",
    name: "Puan Avcısı",
    description: "Toplam 100 puana ulaştın.",
    icon: "Star",
    condition: {
      type: "totalPoints",
      target: POINTS_PER_LEVEL,
    },
  },
];

/**
 * Kullanıcının bir rozetin koşulunu karşılayıp karşılamadığını kontrol eder.
 */
export function meetsAchievementCondition(
  progress: AchievementProgress,
  condition: AchievementCondition
): boolean {
  switch (condition.type) {
    case "solvedProblems":
      return progress.solvedProblemsCount >= condition.target;

    case "totalPoints":
      return progress.totalPoints >= condition.target;
  }
}

/**
 * Kullanıcının kazanmaya hak kazandığı bütün rozetleri döndürür.
 *
 * Bu fonksiyon yalnızca koşulları değerlendirir.
 * Rozetlerin veritabanına kaydedilmesi ayrı bir servis tarafından yapılacaktır.
 */
export function getEligibleAchievements(
  progress: AchievementProgress
): AchievementDefinition[] {
  return ACHIEVEMENT_DEFINITIONS.filter((achievement) =>
    meetsAchievementCondition(progress, achievement.condition)
  );
}

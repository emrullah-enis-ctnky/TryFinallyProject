
/**
 * ==============================================================================
 * TryFinally — Seviye Hesaplama Sistemi
 * ==============================================================================
 * Kullanıcının toplam puanına göre seviyesini ve bir sonraki seviyeye
 * ilerleme durumunu hesaplar.
 * ==============================================================================
 */

/**
 * Bir seviye ilerlemek için gereken puan miktarı.
 */
export const POINTS_PER_LEVEL = 100;

/**
 * Seviye hesaplamasının döndürdüğü bilgiler.
 */
export interface LevelInfo {
  level: number;
  currentLevelPoints: number;
  nextLevelPoints: number;
  pointsRemaining: number;
  progressPercent: number;
}

/**
 * Toplam puana göre kullanıcı seviyesini ve ilerlemesini hesaplar.
 */
export function getLevelInfo(totalPoints: number): LevelInfo {
  // Geçersiz veya negatif değerleri güvenli şekilde sıfıra indir.
  const safePoints = Number.isFinite(totalPoints)
    ? Math.max(0, Math.floor(totalPoints))
    : 0;

  // Her kullanıcı birinci seviyeden başlar.
  const level = Math.floor(safePoints / POINTS_PER_LEVEL) + 1;

  // Mevcut seviyede kazanılan puan miktarı.
  const currentLevelPoints = safePoints % POINTS_PER_LEVEL;

  // Bir sonraki seviye için gereken toplam puan.
  const nextLevelPoints = level * POINTS_PER_LEVEL;

  // Bir sonraki seviyeye kalan puan.
  const pointsRemaining = POINTS_PER_LEVEL - currentLevelPoints;

  // İlerleme çubuğunda kullanılacak yüzde.
  const progressPercent = Math.round(
    (currentLevelPoints / POINTS_PER_LEVEL) * 100
  );

  return {
    level,
    currentLevelPoints,
    nextLevelPoints,
    pointsRemaining,
    progressPercent,
  };
}

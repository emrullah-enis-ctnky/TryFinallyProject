/**
 * ==============================================================================
 * TryFinally — Merkezi Tema ve Renk Token'ları (Theme Tokens)
 * ==============================================================================
 * Bu dosya, tüm uygulamadaki semantik renklerin tek bir merkezden yönetildiği
 * sözleşmedir (Design System Contract).
 *
 * 🎨 TEMA NASIL DEĞİŞTİRİLİR?
 * İleride nihai renk paletini belirlediğinizde, tek yapmanız gereken aşağıdaki
 * "DRAFT_THEME_TOKENS" nesnesindeki renk kodlarını güncellemek olacaktır.
 * Bileşenlerin içine statik renkler yazılmadığı için, buradaki tek bir değişiklik
 * tüm platformun temasını anında güncelleyecektir.
 * ==============================================================================
 */

export interface ThemeColors {
  background: string;
  foreground: string;
  surface: string;
  surfaceForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
}

export interface ThemeDefinition {
  name: string;
  light: ThemeColors;
  dark: ThemeColors;
}

/**
 * Başlangıç Taslak Teması (Draft Theme)
 * Modern, göz yormayan, yazılımcı dostu koyu/açık palet.
 */
export const DRAFT_THEME: ThemeDefinition = {
  name: "TryFinally Slate & Indigo",
  light: {
    background: "#f8fafc",          // Çok açık gri-mavi
    foreground: "#0f172a",          // Koyu lacivert-siyah metin
    surface: "#ffffff",             // Beyaz kartlar ve paneller
    surfaceForeground: "#0f172a",
    primary: "#4f46e5",             // İndigo / Morumsu mavi (Canlı aksiyon rengi)
    primaryForeground: "#ffffff",
    secondary: "#f1f5f9",           // Açık gri butonlar
    secondaryForeground: "#1e293b",
    muted: "#f1f5f9",               // Pasif arka plan
    mutedForeground: "#64748b",     // Soluk gri metin
    accent: "#06b6d4",              // Turkuaz / Cyan vurgular
    accentForeground: "#ffffff",
    destructive: "#ef4444",         // Hata kırmızı
    destructiveForeground: "#ffffff",
    border: "#e2e8f0",              // İnce kenarlık
    input: "#e2e8f0",               // Form alanları kenarlığı
    ring: "#4f46e5",                // Odaklanma halkası
  },
  dark: {
    background: "#0a0f1d",          // Derin gece mavisi
    foreground: "#f8fafc",          // Parlak beyazımsı metin
    surface: "#111827",             // Koyu panel ve kart arka planı
    surfaceForeground: "#f8fafc",
    primary: "#6366f1",             // Canlı indigo vurgu
    primaryForeground: "#ffffff",
    secondary: "#1e293b",           // Koyu buton arka planı
    secondaryForeground: "#f8fafc",
    muted: "#1e293b",               // Pasif elemanlar
    mutedForeground: "#94a3b8",     // İkincil metinler
    accent: "#38bdf8",              // Buz mavisi / Parlak cyan
    accentForeground: "#0a0f1d",
    destructive: "#f87171",         // Yumuşak kırmızı
    destructiveForeground: "#ffffff",
    border: "#1f2937",              // Koyu ayırıcı çizgiler
    input: "#1f2937",
    ring: "#6366f1",
  },
};

/**
 * ==============================================================================
 * TryFinally — Google Gemini AI Asistanı Tip Tanımları (AI Types)
 * ==============================================================================
 * Kod hataları açıklamaları, yönlendirici ipuçları ve model yanıtları.
 * Tek harici API bağımlılığımız olan Google Gemini API (gemini-3.8-flash) için tipler.
 * ==============================================================================
 */

export interface CodeErrorExplanationRequest {
  code: string;
  language: "javascript" | "python";
  errorMessage: string;
  puzzleDescription?: string;
}

export interface CodeErrorExplanationResponse {
  simpleExplanation: string; // Yeni başlayanın anlayacağı Türkçe özet
  suggestedConcept: string;  // Araştırılması tavsiye edilen konu (örn: "Dizi İndisleri")
  encouragingMessage: string;
}

export interface CodeHintRequest {
  puzzleTitle: string;
  puzzleDescription: string;
  userCode: string;
  language: "javascript" | "python";
  hintLevel: 1 | 2 | 3; // 1: Küçük ipucu, 2: Mantıksal yönlendirme, 3: Sözde kod yaklaşımı
}

export interface CodeHintResponse {
  hint: string;
  hintLevel: number;
}

/**
 * ==============================================================================
 * TryFinally — Google Gemini AI Servisi (AI Service)
 * ==============================================================================
 * Model: gemini-3.8-flash (Zorunlu Tek Harici API Bağımlılığı)
 * 
 * Yeni başlayanların kodlama esnasında aldıkları derleme ve çalışma zamanı
 * hatalarını Türkçe, şefkatli ve yönlendirici bir dille açıklar.
 * Doğrudan tam cevabı verip öğrenmeyi baltalamak yerine pedagojik ipuçları sunar.
 * ==============================================================================
 */

import { logger } from "@/lib/logger";
import type {
  CodeErrorExplanationRequest,
  CodeErrorExplanationResponse,
  CodeHintRequest,
  CodeHintResponse,
} from "./types";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.8-flash";

/**
 * Kodlama hatasını yeni başlayanlar için Türkçe ve anlaşılır şekilde açıklar.
 */
export async function explainCodeError(
  request: CodeErrorExplanationRequest
): Promise<CodeErrorExplanationResponse> {
  logger.info("AI", "Kod hatası açıklaması talep edildi", {
    model: GEMINI_MODEL,
    language: request.language,
  });

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === "buraya_gemini_api_anahtarinizi_yazin") {
    logger.warn("AI", "GEMINI_API_KEY tanımlanmamış, şablon yanıt döndürülüyor");
    return {
      simpleExplanation: `Kodunuzda bir hata oluştu: "${request.errorMessage}". Genellikle bu hata, değişken veya fonksiyon isimlerinin doğru tanımlanmamasından ya da dizi sınırlarının aşılmasından kaynaklanır.`,
      suggestedConcept: "Değişken Kapsamı ve Hata Ayıklama",
      encouragingMessage: "Hata yapmak yazılım öğrenmenin en doğal parçasıdır! Satırları tek tek kontrol ederek tekrar deneyin.",
    };
  }

  // Faz 4'te resmi Gemini REST/SDK çağrısı buraya bağlanacaktır.
  return {
    simpleExplanation: `Aldığınız hata (${request.errorMessage}) kodun beklenen türde bir veri alamadığını gösteriyor.`,
    suggestedConcept: "Veri Tipleri ve Kontrol Mekanizmaları",
    encouragingMessage: "Harika gidiyorsun! Küçük bir düzeltmeyle çalışacaktır.",
  };
}

/**
 * Kullanıcı takıldığında yönlendirici ipucu (hint) üretir.
 */
export async function generateCodeHint(
  request: CodeHintRequest
): Promise<CodeHintResponse> {
  logger.info("AI", "Akıllı ipucu talep edildi", {
    model: GEMINI_MODEL,
    hintLevel: request.hintLevel,
  });

  return {
    hint: "Döngüye başlamadan önce aradığınız elemanı daha hızlı bulabilmek için bir değişken içinde önceki değerleri saklamayı düşünebilirsiniz.",
    hintLevel: request.hintLevel,
  };
}

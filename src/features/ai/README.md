# AI Destek Sistemi (`features/ai`) — 8. Kısım

Kullanıcı problem çözerken Google Gemini'den yardım alır. Asistan **tam çözümü vermez**; hatayı açıklar, ipucu verir, yönlendirir.

## Özellikler
| Eylem | Ne yapar |
| --- | --- |
| `hint` | 3 kademeli ipucu: 1) küçük ipucu 2) yaklaşım 3) sözde kod |
| `review` | Kodu inceler: olası hatalar, uç durumlar, zaman/alan karmaşıklığı |
| `chat` | Problemle ilgili serbest soru-cevap (son 6 mesaj bağlam olarak gider) |
| `explain-error` | Judge/Runner hatasını sade dille açıklar |

Yanıt dili problemin içerik diliyle aynıdır (tr / en / de).

## Dosyalar
| Dosya | Görev |
| --- | --- |
| `types.ts` | İstek/yanıt tipleri ve `/api/ai` sözleşmesi |
| `prompts.ts` | Asistanın kuralları ve prompt şablonları (davranış buradan değişir) |
| `gemini.ts` | Gemini REST istemcisi — **sadece sunucu** |
| `service.ts` | İş mantığı, istek doğrulama, hız sınırı — **sadece sunucu** |
| `client.ts` | Tarayıcıdan `/api/ai` çağıran fonksiyonlar |
| `ui.tsx` | `AiAssistantPanel`, `AiErrorExplainButton`, `AiExplanationCard` |

API rotası: `src/app/api/ai/route.ts` (`POST /api/ai`).

## Kurulum
`.env.local` içine `GEMINI_API_KEY` yazın (https://aistudio.google.com/app/apikey). Anahtar yoksa sistem çökmez, hazır şablon yanıtlar döner (`fallback: true`); arayüz geliştirmesi anahtarsız yapılabilir.

Opsiyonel ortam değişkenleri (yazılmazsa varsayılanlar kullanılır):

| Değişken | Varsayılan | Açıklama |
| --- | --- | --- |
| `AI_RATE_LIMIT_PER_MINUTE` | `10` | Kullanıcı/IP başına dakikadaki en fazla AI isteği |
| `GEMINI_TIMEOUT_MS` | `20000` | Gemini isteği zaman aşımı (her deneme için) |
| `GEMINI_MAX_RETRIES` | `2` | Gemini geçici hata (429/5xx) verirse kaç kez daha denensin |
| `GEMINI_API_BASE_URL` | Google adresi | Sadece test için (sahte Gemini sunucusu) |

Yeni paket eklenmedi; Gemini'ye yerel `fetch` ile bağlanılır.

## Diğer ekipler için entegrasyon
AI modülü kendi alanı dışındaki dosyalara dokunmaz. Problem ekranına bağlamak **6. kısmın** (`ProblemDetail.tsx`) işidir:

**1) Bağlam fonksiyonu** — `ProblemDetail` bileşeninin içine:

```tsx
import { AiAssistantPanel, AiErrorExplainButton, type AiProblemContext } from "@/features/ai";

function getAiContext(): AiProblemContext {
  return {
    problemSlug: problem.slug,
    problemTitle: translation.title,
    problemDescription: translation.contentMarkdown,
    userCode: codes[language],
    language,
    responseLanguage: contentLanguage,
  };
}
```

**2) AI paneli** — örneğin alt paneldeki Testcase / Test Result sekmelerinin yanına üçüncü bir "AI Asistan" sekmesi:

```tsx
<AiAssistantPanel getContext={getAiContext} />
```

**3) Hata açıklama butonu (6. ve 7. kısım)** — gönderim hata döndürdüğünde sonuç paneline:

```tsx
<AiErrorExplainButton getContext={getAiContext} errorMessage={result.errorMessage} />
``` Programatik kullanım için `requestErrorExplanation`, `requestHint`, `requestCodeReview`, `requestChatAnswer` (client.ts).

## Güvenlik ve maliyet
- API anahtarı sadece sunucuda kullanılır, tarayıcıya gitmez.
- Kullanıcı (giriş yapmışsa) veya IP başına dakikada `AI_RATE_LIMIT_PER_MINUTE` istek (varsayılan 10). Sayaç bellekte tutulur; birden fazla sunucuya geçilirse veritabanına taşınmalı.
- Girdi uzunlukları sınırlıdır (kod 12.000, soru 1.000 karakter).
- Kullanıcı kodu/problem metni modele "veri" olarak işaretlenir; içindeki "kuralları unut" gibi ifadeler yok sayılır.

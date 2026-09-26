# TryFinally — Teknik Bağlam (Tech Context)

Bu belge, **TryFinally** projesinde kullanılan teknolojileri, geliştirme ortamını, teknik kısıtları, bağımlılıkları ve çalıştırma/test standartlarını tanımlar.

---

## 1. Kullanılan Teknolojiler (Tech Stack)

| Kategori | Teknoloji | Açıklama |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | React tabanlı tam kapsamlı (fullstack) modern web çerçevesi |
| **Dil** | TypeScript | Tip güvenliği, sıfır `any` prensibi, oto-tamamlama |
| **Stil & Arayüz** | Tailwind CSS + shadcn/ui | Yardımcı sınıf tabanlı stil sistemi ve erişilebilir UI bileşenleri |
| **İkonlar** | Lucide React | Sade ve hafif modern ikon seti |
| **Kod Editörü** | `@monaco-editor/react` | VS Code deneyimini tarayıcıya getiren sektör standardı editör |
| **Tarayıcı Koşturucu** | Web Worker + Pyodide (WASM) | Sunucusuz izole JS ve Python çalıştırma motorları |
| **Yapay Zeka (AI)** | Google Gemini API | Tek harici API; yeni başlayanlara kod rehberliği ve ipuçları |
| **Sunucu Veritabanı** | PostgreSQL / SQLite | Sunucu tarafında veri kalıcılığı (Prisma / Drizzle ORM) |
| **Merkezi Loglama** | `@/lib/logger.ts` | Zaman damgalı, seviyeli ve modül etiketli loglama altyapısı |

---

## 2. Geliştirme Ortamı (Development Setup)

* **İşletim Sistemi:** Linux
* **Node.js Sürümü:** `v26.8.2` veya üzeri
* **Paket Yöneticisi:** `npm v12.0.2` veya üzeri
* **RTK Kuralı:** Terminalde çalıştırılan her komut **kesinlikle** `rtk` öneki ile çağrılmalıdır:
  ```bash
  rtk npm run dev
  rtk npm run build
  rtk npm test
  rtk git status
  ```

---

## 3. Çevre Değişkenleri (Environment Variables)

Hassas bilgiler `.env.local` içinde saklanır ve `.env.example` dosyasında şablonu bulunur:

* `GEMINI_API_KEY`: Google Gemini API anahtarı (Google AI Studio'dan alınır).
* `GEMINI_MODEL`: Kullanılan model (`gemini-1.5-flash`).
* `DATABASE_URL`: Sunucu veritabanı bağlantı adresi.
* `NEXT_PUBLIC_APP_URL`: Uygulama alan adı (`http://localhost:3000`).
* `NEXT_PUBLIC_LOG_LEVEL`: Log seviyesi (`debug`, `info`, `warn`, `error`).

---

## 4. Build, Test ve Çalıştırma Komutları

Geliştiricilerin ve CI/CD süreçlerinin kullanacağı standart komutlar:

| Komut | Açıklama |
| :--- | :--- |
| `rtk npm run dev` | Yerel geliştirme sunucusunu başlatır (`localhost:3000`). Kod değişiklikleri anında yansır (HMR). |
| `rtk npm run build` | Projeyi üretim (production) için optimize edilmiş statik ve sunucu varlıklarına derler. Hata ve tip kontrolleri yapılır. |
| `rtk npm run start` | Üretim derlemesini çalıştırır. Canlıya almadan önceki son doğrulama için kullanılır. |
| `rtk npm run lint` | ESLint ve Next.js lint kurallarına göre kod kalitesini ve sözdizimi hatalarını denetler. |
| `rtk npm test` | Vitest / Jest ile birim ve servis testlerini çalıştırır. |
| `rtk npm run test:e2e` | Playwright ile tarayıcı uçtan uca kullanıcı senaryolarını test eder. |

---

## 5. Teknik Kısıtlar ve Sözleşmeler

1. **Harici API Kısıtı:** Google Gemini API haricinde sisteme hiçbir üçüncü parti ücretli/harici API eklenemez.
2. **Sunucu Odaklılık:** Veritabanı ve veri saklama sunucuda yer alır; istemcide yalnızca oturum ve geçici arayüz durumu tutulur.
3. **Katı Renk Paleti:** Renkler yalnızca `src/lib/theme/` altındaki semantik tasarım token'larından alınır; bileşenlere statik renk sınıfları yazılamaz.
4. **Clean Code & Modülerlik:** Gereksiz, kullanılmayan kod ve derin içe aktarmalar yasaktır.

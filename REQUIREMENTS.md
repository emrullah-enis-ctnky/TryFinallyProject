# TryFinally — Bağımlılık ve Gereksinimler Rehberi (REQUIREMENTS)

> **Bu belge, TryFinally projesinde kullanılan tüm sistem gereksinimlerini, kütüphaneleri, paketleri ve yeni bağımlılık ekleme kurallarını tanımlar.**

---

## 🚨 Katı Kural: Yeni Kütüphane / Bağımlılık Ekleme Prosedürü

Projeye rastgele veya keyfi kütüphane eklenemez. **Yeni bir kütüphane veya paket kurulacağı zaman aşağıdaki kurallara harfiyen uyulmalıdır:**

1. **Önce Dokümantasyon (`REQUIREMENTS.md`):** Yeni bir paket `npm install` ile projeye eklenmeden önce veya eklendiği anda bu dosyaya eklenmeli; paketin **adı**, **sürümü**, **eklenme gerekçesi (neden ihtiyaç duyulduğu)** ve **kullanıldığı alan** açıkça listelenmelidir.
2. **Sıfır Harici API Kuralı:** Google Gemini API haricinde hiçbir 3. parti/ücretli harici API veya istemci kütüphanesi projeye dahil edilemez.
3. **Minimalizm ve Hafiflik:** Mümkün olduğunca yerel Web API'ları (`fetch`, `crypto`, `performance`, vb.) ve TypeScript/Node.js yerel modülleri tercih edilmelidir. Aynı işlevi gören birden fazla kütüphane kurulamaz.
4. **Güvenlik ve Bakım:** Yalnızca aktif olarak korunan, bilinen güvenlik açığı (vulnerability) bulunmayan ve projenin Node/Next.js/React sürümleriyle tam uyumlu paketler seçilmelidir.

---

## 💻 Sistem ve Ortam Gereksinimleri

| Gereksinim | Minimum Sürüm | Açıklama |
| :--- | :--- | :--- |
| **Node.js** | `v26.8.0`+ | Uygulama çalışma zamanı ortamı |
| **npm** | `v12.0.0`+ | Paket yöneticisi |
| **Docker & Docker Compose** | En güncel | Yerel PostgreSQL veritabanı konteynerini çalıştırmak için |
| **RTK (Rust Token Killer)** | En güncel | Shell komutlarını optimize eden CLI proxy'si (`rtk <komut>`) |

---

## 📦 Üretim Bağımlılıkları (Production Dependencies)

Bu paketler son kullanıcının deneyiminde ve uygulamanın canlı çalışma zamanında (`dependencies`) görev alır:

| Paket | Sürüm | Kullanım Alanı ve Eklenme Gerekçesi |
| :--- | :--- | :--- |
| **`next`** | `^15.2.0` | Temel web çatısı (App Router, Server-Side Rendering, Server Actions, API rotaları). |
| **`react`** | `^19.0.0` | Kullanıcı arayüzü bileşenleri çekirdek kütüphanesi. |
| **`react-dom`** | `^19.0.0` | React bileşenlerini DOM'a bağlayan render motoru. |
| **`@prisma/client`** | `^7.10.0` | PostgreSQL veritabanı sorguları, model tipleri ve veri katmanı erişim ORM istemcisi. |
| **`next-auth`** | `^5.0.0-beta.32` | Güvenli kullanıcı kimlik doğrulama, Google OAuth ve oturum yönetimi (Auth.js v5). |
| **`lucide-react`** | `^0.475.0` | Arayüz genelinde kullanılan modern ve tutarlı ikon seti. |
| **`sonner`** | `^2.0.8` | Hızlı ve modern toast bildirimleri (başarı, hata ve uyarı mesajları için). |
| **`clsx`** | `^2.1.1` | Koşullu CSS sınıf isimlerini (class names) temiz şekilde birleştirmek için yardımcı kütüphane. |
| **`tailwind-merge`** | `^3.0.2` | Tailwind CSS sınıflarını çakışma olmadan dinamik birleştirmek için yardımcı kütüphane. |
| **`@uiw/react-codemirror`** | `^4.25.12` | Problem çözme ekranında zengin sözdizimi vurgulu kod editörü bileşeni. |
| **`@codemirror/lang-cpp`** | `^6.0.3` | CodeMirror için C++ dili sözdizimi ve renklendirme desteği. |
| **`@codemirror/lang-java`** | `^6.0.2` | CodeMirror için Java dili sözdizimi ve renklendirme desteği. |
| **`@codemirror/lang-python`** | `^6.2.1` | CodeMirror için Python dili sözdizimi ve renklendirme desteği. |
| **`@codemirror/theme-one-dark`** | `^6.1.3` | Kod editörü için koyu tema (One Dark) eklentisi. |

---

## 🛠️ Geliştirme Bağımlılıkları (Dev Dependencies)

Bu paketler yalnızca geliştirme, tip denetimi ve derleme aşamalarında (`devDependencies`) kullanılır:

| Paket | Sürüm | Kullanım Alanı ve Eklenme Gerekçesi |
| :--- | :--- | :--- |
| **`typescript`** | `^5.7.3` | Statik tip güvenliği ve TypeScript derleyicisi. |
| **`@types/node`** | `^22.13.4` | Node.js çekirdek modülleri için TypeScript tip tanımları. |
| **`@types/react`** | `^19.0.10` | React için TypeScript tip tanımları. |
| **`@types/react-dom`** | `^19.0.4` | React DOM için TypeScript tip tanımları. |
| **`prisma`** | `^7.10.0` | Veritabanı şema yönetimi, migrasyonlar ve Prisma Studio için CLI aracı. |
| **`tailwindcss`** | `^3.4.17` | Utility-first CSS tasarım çatısı ve semantik tema sistemi. |
| **`postcss`** | `^8.5.2` | Tailwind ve CSS dönüşümlerini gerçekleştiren CSS işlemcisi. |
| **`autoprefixer`** | `^10.4.20` | CSS kurallarına tarayıcı ön eklerini (vendor prefixes) otomatik ekleyen PostCSS eklentisi. |
| **`eslint`** | `^9.20.1` | Kod kalitesi ve sözdizimi denetimi aracı. |
| **`eslint-config-next`** | `^15.2.0` | Next.js'e özel ESLint kuralları ve optimizasyon denetleyicileri. |

---

## 🌐 Harici API ve Servisler

| Servis | Model / Sürüm | Durum | Açıklama |
| :--- | :--- | :--- | :--- |
| **Google Gemini API** | `gemini-3.8-flash` | **Tek İzin Verilen API** | Yeni başlayanlara şefkatli Türkçe hata açıklamaları ve algoritmik ipuçları sunar. Sunucu ortamında güvenle çağrılır. |

---

## 📝 Güncelleme Kaydı

* **2026-10-11:** `REQUIREMENTS.md` dosyası oluşturuldu; mevcut tüm üretim, geliştirme bağımlılıkları ve yeni paket ekleme kuralı dokümante edildi.

# TryFinally — İlerleme Durumu (Progress)

Bu belge, **TryFinally** projesinin mevcut durumunu, tamamlanan adımları, geliştirilmekte olan fazları ve kararların evrimini takip eder.

---

## 1. Genel İlerleme Tablosu

| Faz | Açıklama | Durum | İlerleme |
| :--- | :--- | :--- | :--- |
| **Ön Hazırlık** | Memory Bank Kurulumu, Çevre Değişkenleri, README & Temel Plan | **Tamamlandı** | 100% |
| **Faz 0** | Temel Proje Yapısı, İskelet, Log Servisi ve Çevre Değişkenleri | Sırada | 0% |
| **Faz 1** | Merkezi Taslak Tema Sistemi, Arayüz İskeleti ve Taslak Ekranlar | Bekliyor | 0% |
| **Faz 2** | Sunucu Veri Katmanı ve Çekirdek Servisler (Backend & DB) | Bekliyor | 0% |
| **Faz 3** | Tarayıcı İçi İzole Kod Koşturucu (Web Worker & Pyodide) | Bekliyor | 0% |
| **Faz 4** | Google Gemini API ile Akıllı Asistan Servisi (`features/ai`) | Bekliyor | 0% |
| **Faz 5** | Arayüz ve Sunucu Entegrasyonu (Dinamik UI & Runner Bağlantısı) | Bekliyor | 0% |
| **Faz 6** | Test, Kalite Güvencesi ve CI/CD (Vitest, Playwright, Actions) | Bekliyor | 0% |
| **Faz 7** | Dokümantasyon, Topluluk ve Yayına Alma | Bekliyor | 0% |

---

## 2. Neler Tamamlandı? (What Works)

- [x] **Git Deposu & Lisans:** Depo oluşturuldu, GNU General Public License v3.0 (GPL-3.0) eklendi.
- [x] **Çevre Değişkenleri Şablonu (`.env.example`):** Gemini API, veritabanı ve log yapılandırmaları detaylı açıklamalarla hazırlandı.
- [x] **Cline Memory Bank Çekirdeği:**
  - [x] `projectbrief.md`: Vizyon, kapsam ve temel kurallar.
  - [x] `productContext.md`: Çözülen problemler ve UX hedefleri.
  - [x] `activeContext.md`: Aktif odak, takım kararları ve sonraki adımlar.
  - [x] `systemPatterns.md`: Clean Architecture, ultra-modüler tema token'ları ve runner mimarisi.
  - [x] `techContext.md`: Teknoloji stack'i, Node/npm ortamı, build/test komutları ve RTK kuralı.
  - [x] `progress.md`: Durum takibi ve karar evrimi.
- [x] **Mimari Kararlar:**
  - Çevrimdışı yerine sunucu tabanlı (server-centric) veri yönetimi.
  - Tek harici API: Google Gemini API.
  - İstemcide izole kod çalıştırma (Web Worker & Pyodide).
  - Kolayca güncellenebilir merkezi taslak tema sistemi.
  - Takım kararıyla önce iskelet+log, hemen ardından taslak UI geliştirme sırası.

---

## 3. Yapılacaklar (What's Left to Build)

* [ ] **Faz 0:** Next.js kurulumu, TypeScript/Tailwind entegrasyonu, `features/` klasör iskeleti, `lib/logger.ts` log servisi ve domain tipleri.
* [ ] **Faz 1:** Taslak tema token'ları, shadcn/ui altyapısı, Navbar/Footer ve 4 ana taslak ekran (Kodlama, Forum, Öğrenme, Profil).
* [ ] **Faz 2:** Sunucu veritabanı (PostgreSQL/SQLite), Server Actions/API'ler ve mock tohum verileri.
* [ ] **Faz 3:** JavaScript Web Worker ve Python Pyodide izole koşturucu altyapısı.
* [ ] **Faz 4:** Gemini API istemcisi, hata açıklaması ve yönlendirici ipucu servisleri.
* [ ] **Faz 5:** Taslak ekranların gerçek servislerle, runner'la ve Gemini AI ile buluşturulması.
* [ ] **Faz 6:** Vitest birim testleri, Playwright E2E testleri ve GitHub Actions otomasyonu.
* [ ] **Faz 7:** Geliştirici katkı kılavuzu ve canlı üretim yayını.

---

## 4. Kararların Evrimi (Evolution of Decisions)

1. **Çevrimdışı/Dexie -> Sunucu Odaklılık:** İlk taslakta Dexie.js ile çevrimdışı öncelikli mimari düşünülmüştü; verilerin güvenliği, forum bütünlüğü ve topluluk deneyimi için sunucu tarafında merkezi veritabanı modeline geçildi.
2. **Sıfır Harici API -> Tek Bağımlılık Olarak Gemini API:** Harici API maliyetlerinden kaçınırken öğrenciye rehberlik edecek akıllı hata açıklamaları ve ipuçları için Google Gemini API tek harici bağımlılık olarak belirlendi.
3. **Erken Taslak UI (Takım Kararı):** Ekibin tasarımı erkenden görebilmesi için servislerden önce arayüzün taslak olarak çıkarılmasına karar verildi.
4. **Ultra-Modüler Taslak Tema:** İleride kullanıcı esas temayı verdiğinde tüm sistemi tek bir konfigürasyondan değiştirebilmek amacıyla semantik token tabanlı taslak tema sistemi benimsendi.

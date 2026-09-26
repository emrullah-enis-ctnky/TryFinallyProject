# TryFinally — Uygulama ve Yol Haritası Planı (Base Plan)

Bu belge, **TryFinally** projesinin geliştirme adımlarını, takım kararlarına ve mimari prensiplere uygun olarak mantıksal bir sırayla tanımlar.

---

## Faz 0: Temel Proje Yapısı, İskelet, Log Servisi ve Çevre Değişkenleri

> Bu aşamada Next.js App Router projesi başlatılır, klasör iskeleti kurulur, tip modelleri ve merkezi log servisi hazırlanır.

* [ ] **0.1 Proje İskeleti ve Bağımlılıkların Kurulması**
  * Next.js, TypeScript, Tailwind CSS ve temel yapılandırmaların oluşturulması.
  * `.env.example` dosyasının doğrulanması ve yerel `.env.local` oluşturulması.
* [ ] **0.2 Modüler Klasör Yapısının Kurulması (`src/features/`)**
  * `forum`, `puzzles`, `runner`, `learn`, `gamification`, `ai` modül klasörlerinin oluşturulması.
  * Her modülün içine `types.ts`, `service.ts`, `ui.tsx`, `index.ts` dosyalarının yerleştirilmesi.
* [ ] **0.3 Merkezi Log Servisi (`src/lib/logger.ts`)**
  * `debug`, `info`, `warn`, `error` seviyelerini yöneten merkezi logger yapısının kurulması.
  * Modül adı, zaman damgası ve parametreleri okunaklı formatta gösteren fonksiyonların yazılması.
* [ ] **0.4 Çekirdek Domain Tiplerinin Belirlenmesi**
  * Soru, test case, forum başlığı, yorum, kullanıcı profili ve AI yanıtı veri modellerinin tanımlanması.

---

## Faz 1: Merkezi Taslak Tema Sistemi, Arayüz İskeleti ve Taslak Ekranlar (UI Shell & Wireframes)

> Takım kararı gereği; ekibin tasarımı erkenden görebilmesi ve geri bildirim verebilmesi için görsel arayüz bu aşamada taslak olarak kurulur.

* [ ] **1.1 Merkezi Taslak Tema Sistemi ve Renk Token'ları**
  * Semantik renk token'larının (`background`, `surface`, `primary`, `secondary`, `accent`, `muted`, `border`, `destructive`) CSS variables ve Tailwind'e bağlanması.
  * Kolayca güncellenebilir merkezi tema sözleşmesinin (`src/lib/theme/`) hazırlanması.
* [ ] **1.2 Temel Arayüz Kabuğu (Shell)**
  * shadcn/ui temel bileşenlerinin eklenmesi (`Button`, `Card`, `Tabs`, `Dialog`, `Badge`, `Input`, vb.).
  * Kök layout, üst menü (Navbar), alt bilgi (Footer) ve tema desteğinin (Light/Dark mode) ayarlanması.
* [ ] **1.3 Taslak Ekranların Geliştirilmesi (Mock Verilerle)**
  * **Kodlama & Soru Paneli Taslağı (`features/puzzles/ui.tsx`):** Sol tarafta soru kartı, sağda Monaco Editor alanı, altta konsol/çıktı paneli ve Gemini AI yardım butonu.
  * **Topluluk Forumu Taslağı (`features/forum/ui.tsx`):** Başlık listesi, arama kutusu, başlık detay görünümü ve yanıt formu.
  * **Yol Haritası & Öğrenme Taslağı (`features/learn/ui.tsx`):** Konu adımları haritası ve Markdown okuyucu paneli.
  * **Profil & İlerleme Taslağı (`features/gamification/ui.tsx`):** Skor kartları, çözülen soru istatistikleri ve rozet vitrini.

---

## Faz 2: Sunucu Veri Katmanı ve Çekirdek Servisler (Server Backend & Database)

> Taslak ekranların arkasında çalışacak sunucu veritabanı ve iş mantığı servisleri hazırlanır.

* [ ] **2.1 Sunucu Veritabanı ve Şema Yapılandırması**
  * PostgreSQL / SQLite ORM şemasının (kullanıcılar, sorular, test senaryoları, forum başlıkları, yorumlar, çözümler) oluşturulması.
* [ ] **2.2 Forum Servisi (`features/forum/service.ts`)**
  * Konu açma, yanıtlama, oylama ve etiketleme için Server Actions / API fonksiyonlarının yazılması.
* [ ] **2.3 Algoritma ve Soru Servisi (`features/puzzles/service.ts`)**
  * Soruları getirme, filtreleme ve çözüm geçmişi kaydetme servislerinin yazılması.
* [ ] **2.4 Gamification Servisi (`features/gamification/service.ts`)**
  * Puan hesaplama, streak ve rozet kazanım kurallarının kodlanması.
* [ ] **2.5 Başlangıç İçerikleri (Seed Data)**
  * Yeni başlayanlar için 10 örnek algoritma sorusu, test case'leri ve başlangıç konu anlatımı verilerinin hazırlanması.

---

## Faz 3: Tarayıcı İçi İzole Kod Koşturucu (Runner) ve Güvenlik Altyapısı

> Kullanıcı kodlarının sunucuya yük bindirmeden doğrudan istemci tarayıcısında güvenle çalışmasını sağlar.

* [ ] **3.1 JavaScript Web Worker Koşturucusu (`features/runner/service.ts`)**
  * Ana thread'i dondurmayan Web Worker altyapısı.
  * 3 saniyelik zaman aşımı (infinite loop koruması) ve bellek limiti yönetimi.
  * `console.log` çıktılarının yakalanarak ekrandaki konsola aktarılması.
* [ ] **3.2 Python Pyodide (WASM) Entegrasyonu**
  * Tarayıcı üzerinde çalışan Python motorunun kurulması ve girdi/çıktı akışlarının bağlanması.
* [ ] **3.3 Test Case Değerlendirme Motoru**
  * Kod çıktısı ile beklenen test case sonuçlarını karşılaştıran ve başarı/başarısızlık üreten motorun yazılması.

---

## Faz 4: Google Gemini API ile Akıllı Asistan Servisi (`features/ai`)

> Sistemin tek harici API bağımlılığı olan Gemini API ile yeni başlayanlara yönelik akıllı rehberlik sağlanır.

* [ ] **4.1 Gemini API İstemcisi ve Güvenlik**
  * API anahtarının sunucu ortamında (`process.env.GEMINI_API_KEY`) güvenli yönetimi.
* [ ] **4.2 Kod Hata Açıklayıcı Servis**
  * Kodlama sırasında derleme veya çalışma zamanı hatası alan öğrenciye hatayı anlaşılır Türkçe ile açıklayan servis.
* [ ] **4.3 Yönlendirici İpucu (Hint) Üretimi**
  * Kullanıcı takıldığında doğrudan çözümü vermeden, algoritmik düşünmesini sağlayan ipuçları üreten servis.
* [ ] **4.4 Forum Akıllı Öneri Servisi**
  * Benzer forum konularını ve etiketleri otomatik öneren yardımcı servis.

---

## Faz 5: Arayüz ve Sunucu Entegrasyonu (Full Dynamic UI)

> Faz 1'deki taslak ekranlar gerçek sunucu servislerine, runner motoruna ve Gemini asistanına bağlanır.

* [ ] **5.1 Kodlama Paneli Entegrasyonu**
  * Monaco Editor'ın Runner servisine ve test case motoruna bağlanması; gerçek zamanlı çalıştırma.
  * Gemini Asistan butonunun hata paneline entegre edilmesi.
* [ ] **5.2 Forum ve Topluluk Entegrasyonu**
  * Başlık listeleme, arama ve yorum gönderme işlevlerinin sunucuya bağlanması.
* [ ] **5.3 Öğrenme & Yol Haritası Entegrasyonu**
  * Konu anlatımlarının dinamik yüklenmesi ve tamamlandı işaretleme.
* [ ] **5.4 Profil ve Gamification Entegrasyonu**
  * Çözülen soruların kullanıcı puanına ve rozet vitrinine dinamik olarak yansıması.

---

## Faz 6: Test, Kalite Güvencesi ve CI/CD

> Sistemin kararlılığını ve kod kalitesini güvenceye alan test adımları.

* [ ] **6.1 Birim ve Servis Testleri (Vitest)**
  * Runner, test case değerlendirici ve gamification mantığının otomatik testleri.
* [ ] **6.2 Uçtan Uca (E2E) Testleri (Playwright)**
  * Kullanıcının soru açıp kod çalıştırdığı ve sonuç aldığı ana akışın test edilmesi.
* [ ] **6.3 GitHub Actions CI Pipeline**
  * Her Pull Request'te otomatik lint, tip kontrolü ve test çalıştıran iş akışı.

---

## Faz 7: Dokümantasyon, Topluluk ve Yayına Alma

* [ ] **7.1 Geliştirici & Katkı Kılavuzu (`CONTRIBUTING.md`)**
* [ ] **7.2 Canlıya Alma (Deployment)**
  * Vercel veya sunucu barındırma ortamına üretim dağıtımı.
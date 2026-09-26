# TryFinally — Uygulama Planı

Altyapıdan arayüze doğru mantıksal bir sırayla ilerleyen geliştirme adımları.

---

## Faz 0: Dizin Yapısı, Tipler ve Loglama Altyapısı

> Bu aşamada arayüze girilmeden önce klasörler, veri modelleri, yerel depolama ve log servisi hazırlanır.

* [ ] **0.1 Dizin İskeletinin Kurulması**
  * `features/` altında `forum`, `puzzles`, `runner`, `learn`, `gamification` klasörlerini oluştur.
  * Her modülün içine `types.ts`, `service.ts`, `ui.tsx`, `index.ts` dosyalarını yerleştir.

* [ ] **0.2 Merkezi Log Servisi (`src/lib/logger.ts`)**
  * `info`, `warn`, `error`, `debug` seviyelerini yöneten logger yapısını kur.
  * Modül adı, zaman damgası ve parametreleri okunaklı formatta göster.

* [ ] **0.3 Offline Depolama Şeması (`src/lib/storage.ts`)**
  * Dexie.js kurulumunu yap.
  * `puzzles`, `submissions`, `forum_drafts`, `user_stats` tablolarını ve indekslerini belirle.

* [ ] **0.4 Domain Tiplerinin Belirlenmesi**
  * Modüllerin `types.ts` dosyalarında soru, çözüm, forum başlığı, yorum ve profil veri tiplerini tanımla.

---

## Faz 1: Çekirdek İş Mantığı & Servisler

> Arayüz tasarlanmadan önce servis fonksiyonları yazılır ve logger ile doğrulanır.

* [ ] **1.1 Tarayıcı İçi Kod Koşturucu Servisi (`features/runner/service.ts`)**
  * JavaScript kodunu ana thread'i tıkamadan çalıştıracak Web Worker yapısını kur.
  * Çıktıları (`stdout`, `stderr`, çalışma süresi) yakala ve log üzerinden doğrula.

* [ ] **1.2 Test Case Değerlendirme Servisi (`features/puzzles/service.ts`)**
  * Kod çıktısı ile beklenen test sonuçlarını karşılaştıran fonksiyonu yaz.
  * Sonuçları (Accepted, Wrong Answer, Hata) yerel veritabanına kaydet.

* [ ] **1.3 Çevrimdışı Forum Servisi (`features/forum/service.ts`)**
  * Başlık oluşturma, yorum yazma ve oylama fonksiyonlarını Dexie.js üzerinde çalışacak şekilde hazırla.

* [ ] **1.4 Gamification & Skor Servisi (`features/gamification/service.ts`)**
  * Çözülen sorulara göre puan hesaplama ve rozet kazanım kurallarını yaz.

* [ ] **1.5 Başlangıç İçerikleri (`features/learn`, `features/puzzles`)**
  * Yeni başlayanlar için 10 örnek algoritma sorusu ve temel konu anlatımı verilerini hazırla.

---

## Faz 2: Kullanıcı Arayüzü (UI) & Sayfa Entegrasyonu

> Hazırlanan servis fonksiyonları görsel bileşenlere ve sayfalara bağlanır.

* [ ] **2.1 Temel Arayüz Kabuğu**
  * shadcn/ui temel bileşenlerini ekle (`Button`, `Card`, `Resizable`, `Badge`, vb.).
  * Kök layout, gezinme çubuğu (Navbar) ve tema desteğini ayarla.

* [ ] **2.2 Kodlama ve Soru Ekranı (`features/puzzles/ui.tsx`)**
  * Sol tarafta soru metni, sağ tarafta Monaco Editor ve alt kısımda çıktı konsolunu içeren bölmeli paneli hazırla.
  * "Çalıştır" ve "Gönder" butonlarını runner servisine bağla.

* [ ] **2.3 Topluluk Forumu Ekranı (`features/forum/ui.tsx`)**
  * Başlık listesi, başlık detayları, oy butonları ve yorum yazma alanını kur.

* [ ] **2.4 Yol Haritası ve Konu Anlatımı Ekranı (`features/learn/ui.tsx`)**
  * Konu sıralamasını gösteren yol haritasını ve markdown okuyucu panelini oluştur.

* [ ] **2.5 Profil ve Başarım Ekranı (`features/gamification/ui.tsx`)**
  * Kullanıcı puanını, çözülen soruları ve kazanılan rozetleri listeleyen sayfayı hazırla.

---

## Faz 3: Offline-First İyileştirmeleri & Python Desteği

> Sistemin internet olmadan da eksiksiz çalışabilmesi için ek özellikler eklenir.

* [ ] **3.1 Pyodide (WASM) Entegrasyonu**
  * Python kodlarını tarayıcıda çalıştırmak üzere Pyodide kütüphanesini runner servisine bağla.

* [ ] **3.2 PWA ve Önbellekleme**
  * Statik sayfaların ve editör dosyalarının çevrimdışıyken de açılabilmesi için PWA desteğini ayarla.

* [ ] **3.3 Çevrimdışı Senkronizasyon Kuyruğu**
  * Çevrimdışıyken yapılan işlemleri sıraya alan ve bağlantı geldiğinde ileten yapıyı kur.

* [ ] **3.4 Bağlantı Durumu Göstergesi**
  * Arayüze internet bağlantı durumunu (çevrimiçi/çevrimdışı) bildiren ufak bir gösterge ekle.

---

## Faz 4: Doğrulama ve Testler

> Kod kalitesini ve akışları gözden geçirme adımları.

* [ ] **4.1 Çevrimdışı Çalışma Testi**
  * İnternet bağlantısı kesilerek soru çözme, taslak kaydı ve puan kazanım akışlarını test et.

* [ ] **4.2 Log Analizi & Hata Ayıklama**
  * Logger çıktılarını inceleyerek olası hataları ve performans darboğazlarını temizle.
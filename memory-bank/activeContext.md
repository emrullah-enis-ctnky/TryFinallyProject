# TryFinally — Aktif Bağlam (Active Context)

Bu belge, projenin anlık çalışma odağını, son alınan kararları, atılan adımları ve bir sonraki eylemleri takip eder. Her oturum başlangıcında ve önemli değişikliklerden sonra güncellenir.

---

## 1. Mevcut Çalışma Odağı (Current Focus)

Şu anki odak: **Proje Temellerinin ve Dokümantasyonunun Eksiksiz Kurulması.**
* Cline Memory Bank çekirdek dosyalarının oluşturulması.
* `.env.example` şablonunun hazırlanması.
* `base_plan.md` yol haritasının takım kararları ve güncel mimari doğrultusunda güncellenmesi.
* `README.md` dosyasının yeni başlayan birinin dahi rahatça anlayacağı derinlikte yeniden yazılması.
* Standartlara uygun Git commit'lerinin atılması.

---

## 2. Son Alınan Kritik Kararlar ve Değişiklikler

1. **Sunucu Odaklı Mimari (Server-Centric):**
   - Çevrimdışı (offline-first) yaklaşım terk edildi. Veriler (forum, kullanıcılar, çözümler, sorular) sunucu tarafındaki merkezi veritabanında tutulacak.
2. **Tek Harici API Bağımlılığı (Google Gemini API):**
   - Projede Gemini API dışında hiçbir harici veya ücretli API kullanılmayacak.
   - Gemini API; kod hatalarını açıklamak, ipucu (hint) vermek ve forum akıllı asistanlığı için kullanılacak.
3. **İstemci Kod Koşturucu (Web Worker & Pyodide):**
   - Kod derleme ve çalıştırma sunucuya yük bindirmemek için tarayıcıda izole çalışacak.
4. **Ultra-Modüler Yapı ve Taslak Tema Sistemi:**
   - Tema sistemi ilk başta taslak bir renk paleti ile semantik token'lar (`primary`, `background`, `surface`, `border` vb.) üzerinden kurulacak.
   - Kullanıcı daha sonra esas tema paletini bildirdiğinde tek bir yapılandırma dosyasından tüm sistem kolayca yeni temaya geçirilebilecek.
5. **Geliştirme Sıralaması (Takım Kararı):**
   - Ekip tasarımı ve görsel akışı erken aşamada görebilsin diye:
     - **Faz 0:** Temel Proje Yapısı, İskelet ve Merkezi Log Servisi.
     - **Faz 1:** Arayüz İskeleti ve Taslak Ekranlar (UI Shell & Wireframes).
     - **Faz 2:** Sunucu Veri Katmanı ve Servisler.
     - **Faz 3:** İstemci Kod Koşturucu.
     - **Faz 4:** Google Gemini API Entegrasyonu.
     - **Faz 5:** UI ve Sunucu Entegrasyonu.
     - **Faz 6:** Test ve CI/CD.
     - **Faz 7:** Dokümantasyon ve Yayına Alma.
6. **Disiplinli Ortam & Terminal Kuralları:**
   - Tüm komutlar istisnasız `rtk` ile çalıştırılacak (`rtk git ...`).
   - Hassas veriler `.env.example` rehberliğinde `.env.local` içinde tutulacak.
   - Her önemli adımdan sonra Git commit atılacak.

---

## 3. Sıradaki Adımlar (Next Steps)

1. `memory-bank/systemPatterns.md` dosyasını oluştur (Mimari detayları ve Clean Architecture sözleşmesi).
2. `memory-bank/techContext.md` dosyasını oluştur (Teknoloji stack'i, ortam değişkenleri, build/test komutları).
3. `memory-bank/progress.md` dosyasını oluştur (Faz 0 - Faz 7 ilerleme takip matrisi).
4. `base_plan.md` dosyasını güncellenen 8 faz ile senkronize et.
5. İlk commit'i gerçekleştir (`rtk git commit -m "docs: initialize Cline Memory Bank with server architecture, Gemini AI, modular theme, and env template"`).
6. `README.md` dosyasını sıfırdan başlayan birinin kolayca anlayacağı detayda yeniden yaz.
7. İkinci commit'i gerçekleştir (`rtk git commit -m "docs: overhaul README with beginner-friendly guides, ultra-modular architecture, theme tokens, and build/test workflows"`).
8. Kullanıcıya Faz 0'a geçiş için net bir rehberlik sun.

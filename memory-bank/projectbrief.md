# TryFinally — Proje Özeti (Project Brief)

Bu belge, **TryFinally** projesinin temel vizyonunu, hedeflerini, kapsamını ve değişmez ilkelerini tanımlayan kaynak belgedir (Source of Truth). Memory Bank içindeki tüm diğer dosyalar bu temelin üzerine inşa edilir.

---

## 1. Proje Vizyonu ve Amacı

**TryFinally**, yazılıma yeni başlayanların hiçbir ücret ödemeden, karmaşık geliştirme ortamları kurmak zorunda kalmadan, doğrudan tarayıcı üzerinden kodlama pratiği yapabileceği ve toplulukla etkileşime girebileceği açık kaynaklı bir web platformudur.

Platform; etkileşimli algoritma soruları çözme alanını (Problem Solving), topluluk forumunu (Community Forum), yapılandırılmış öğrenme yol haritalarını (Learning Roadmap) ve oyunlaştırma (Gamification) öğelerini tek bir modern çatı altında birleştirir.

---

## 2. Temel İlkeler ve Katı Kurallar

1. **Sunucu Odaklı Mimari (Server-Centric):**
   - Kullanıcı profilleri, forum başlıkları, yorumlar, çözülen sorular ve istatistikler sunucu tarafındaki veritabanında güvenli bir şekilde saklanır.
   - Veri bütünlüğü ve yetkilendirme sunucu katmanında denetlenir.

2. **Tek Harici Bağımlılık — Google Gemini API:**
   - Platformun **Google Gemini API** dışında hiçbir harici, ücretli veya üçüncü parti API bağımlılığı yoktur ve olmayacaktır.
   - Gemini API; yeni başlayan geliştiricilere kodlarındaki hataları sade bir Türkçe ile açıklamak, doğrudan cevabı vermeden yönlendirici akıllı ipuçları (hints) sunmak ve forumda soru önerilerinde bulunmak için kullanılır.

3. **İstemci Tarafında Güvenli Kod Koşturucu (Client Runner):**
   - Kullanıcıların yazdığı kodlar sunucu kaynaklarını tüketmemek ve güvenlik risklerini izole etmek amacıyla tarayıcı tarafında çalıştırılır:
     - **JavaScript:** İzole bir Web Worker içinde (ana thread'i dondurmayan, bellek ve zaman aşımı korumalı).
     - **Python:** Tarayıcı içi WebAssembly ortamı olan Pyodide ile.

4. **Ultra-Modüler ve Temiz Mimari (Clean Architecture):**
   - Sistem bileşenleri ve katmanları birbirine sıkı sıkıya bağlı (tightly coupled) olmayacaktır.
   - Her modül (`features/*`) yalnızca kendi sorumluluğunu bilir ve dışa sadece `index.ts` üzerinden konuşur.
   - Herhangi bir bileşen veya kural değiştirilmek istendiğinde sistemin geri kalanı bozulmadan kolayca güncellenebilir.

5. **Merkezi ve Kolayca Değiştirilebilir Taslak Tema Sistemi:**
   - İlk aşamada temiz bir taslak tema ve tutarlı semantik renk token'ları (`primary`, `surface`, `background`, `border`, `accent`, `muted`) tanımlanır.
   - Arayüzde hiçbir zaman rastgele stil veya statik renk (hardcoded hex) kullanılmaz.
   - İlerleyen aşamalarda nihai tema paleti belirlendiğinde tek bir yapılandırma dosyasından tüm sistemin teması saniyeler içinde değiştirilebilir.

6. **Çevre Değişkenleri Güvenliği (`.env.example`):**
   - API anahtarları veya veritabanı yolları kesinlikle kod içine yazılmaz; `.env.local` dosyasında tutulur.
   - Projede her zaman güncel, detaylı Türkçe açıklamalı bir `.env.example` şablonu bulunur.

7. **Açıklayıcı, Sade ve Yeni Başlayan Dostu İlerleme:**
   - Hiç yazılım bilmeyen birisi dahi kodları ve dokümanları okuduğunda her fonksiyonun ve dosyanın ne işe yaradığını anlayabilmelidir.
   - Ölü, kullanılmayan veya gereksiz kod kesinlikle projede barındırılmaz.

8. **Disiplinli Sürüm Kontrolü ve Terminal Kuralı:**
   - Her önemli adımdan sonra standartlara uygun anlamlı Git commit'leri atılır.
   - Tüm terminal komutları token tasarrufu ve optimizasyon için istisnasız `rtk` ile çalıştırılır (`rtk git ...`, `rtk ls ...`, vb.).

---

## 3. Kapsam (Core Scope)

* **Kodlama & Test Case Alanı:** Monaco Editor destekli, syntax renklendirmeli, girdi/çıktı testlerini çalıştıran arayüz.
* **Topluluk Forumu:** Başlık açma, yanıtlama, faydalı yanıtları öne çıkarma ve etiketleme.
* **Öğrenme Yol Haritası:** Adım adım algoritmalar ve temel bilgisayar bilimleri konu anlatımları.
* **Oyunlaştırma (Gamification):** Puanlar, seriler (streak), çözülen soru istatistikleri ve rozetler.
* **Akıllı Gemini Asistanı:** Yeni başlayanlar için rehber kod analizleri ve ipuçları.

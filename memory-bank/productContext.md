# TryFinally — Ürün Bağlamı (Product Context)

Bu belge, **TryFinally** projesinin neden var olduğunu, hangi problemleri çözdüğünü, kullanıcıya nasıl bir deneyim sunduğunu ve ürün vizyonunun arkasındaki motivasyonları açıklar.

---

## 1. Neden Bu Proje Var? (Problem Tanımı)

Yazılıma yeni başlayan geliştirici adayları genellikle şu büyük engellerle karşılaşır:

1. **Karmaşık Ortam Kurulumları (Setup Fatigue):**
   - Bir kod satırı çalıştırmak için dahi derleyici, paket yöneticisi, yerel ortam değişkenleri veya ağır IDE kurulumları gerekir. Birçok hevesli öğrenci daha ilk kodunu yazamadan kurulum hatalarında pes eder.
2. **Korkutucu ve Yarışmacı Platformlar:**
   - Mevcut platformlar (LeetCode, HackerRank vb.) genellikle deneyimli mühendislerin mülakat hazırlığına yöneliktir. Başlangıç seviyesindeki bir kişi için anlaşılmaz algoritmik jargonlar ve acımasız hata mesajları içerir.
3. **Kriptik ve Soğuk Hata Mesajları:**
   - Standart derleyici hata çıktıları (`TypeError: cannot read property of undefined`, `IndentationError`) yeni başlayan biri için korkutucudur ve ne yapması gerektiğini söylemez.
4. **Dağınık Öğrenme Deneyimi:**
   - Öğrenci bir siteden konu videosu izler, başka bir sitede soru çözmeye çalışır, takıldığında forumlarda veya StackOverflow'da azarlanma korkusuyla soru sormaya çekinir.
5. **Yüksek Sunucu Maliyeti Çıkmazı:**
   - Kullanıcıların kodlarını sunucu tarafında sanal makinelerde (Docker sandbox) derlemek ve çalıştırmak devasa sunucu maliyetleri yaratır. Bu durum açık kaynaklı veya ücretsiz projelerin sürdürülebilirliğini engeller.

---

## 2. TryFinally Nasıl Çözer? (Çözüm ve Değer Önerisi)

TryFinally bu sorunları kökten çözmek için tasarlanmıştır:

* **Sıfır Kurulum, Anında Kodlama:**
  - Kullanıcı tarayıcıyı açtığı saniyede modern Monaco Editor karşısındadır. Hiçbir şey indirmesine veya kurmasına gerek yoktur.
* **Sunucuya Sıfır Yükle İstemci Tarafında Kod Koşturma:**
  - JavaScript Web Worker ile, Python ise Pyodide (WASM) ile tamamen kullanıcının kendi tarayıcısında çalışır. Sunucuya kod koşturma maliyeti binmez, kullanıcı da sıra beklemeden milisaniyeler içinde sonucunu görür.
* **Google Gemini API ile Şefkatli ve Akıllı Rehberlik:**
  - Kullanıcı hata aldığında Gemini API devreye girerek o hatayı yeni başlayan birinin anlayabileceği samimi bir dille Türkçeleştirir.
  - Doğrudan cevabı verip öğrenmeyi engellemek yerine, "düşündürücü ipuçları" (hints) sunarak yol gösterir.
* **Bütünleşik Topluluk ve Yol Haritası:**
  - Öğrenme müfredatı, pratik soruları ve yeni başlayan dostu forum tek bir çatı altındadır. Takılan kullanıcı doğrudan sorunun altındaki forum alanından topluluktan destek alır.
* **Görsel Tutarlılık ve Katı Tema Sistemi:**
  - Göz yormayan, dikkat dağıtmayan, belirli ve tutarlı bir renk paletine sahip modern arayüz ile öğrenme deneyimi keyifli hale getirilir.

---

## 3. Kullanıcı Deneyimi (UX) Hedefleri

1. **"İlk 30 Saniye" Kuralı:** Bir kullanıcı siteye ilk girdiğinde 30 saniye içinde ilk "Hello World" kodunu çalıştırabilmeli ve sonucu görmelidir.
2. **Korkusuz Deneyim:** Hata yapmak bir başarısızlık değil, öğrenme adımı olarak sunulmalıdır. Hata ekranları teşvik edici ve öğretici olmalıdır.
3. **Akıcı ve Hızlı:** Tarayıcı içi çalışan koşturucu sayesinde kod çalıştırma ve test çıktısı anında ekrana yansımalıdır.
4. **Tutarlı Görsel Dil:** Her ekran, buton ve kart aynı tasarım token'larını kullanmalı; kullanıcı arayüz karmaşasında kaybolmamalıdır.
5. **Açık Kaynak ve Erişilebilirlik:** Tamamen ücretsiz, topluluk odaklı ve herkesin katkı sunabileceği şeffaf bir yapı.

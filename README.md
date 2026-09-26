# TryFinally 🚀

> **Yazılıma yeni başlayanlar için geliştirilen; tarayıcı tabanlı güvenli algoritma pratiklerini, Google Gemini yapay zeka rehberliğini ve topluluk forumunu bir araya getiren açık kaynaklı, ultra-modüler web platformu.**

---

## 🌟 Projeye Genel Bakış (Neden TryFinally?)

Yazılıma yeni başlayanların en sık karşılaştığı zorluklar; karmaşık derleyici ve ortam kurulumları, mülakat odaklı platformların korkutucu ve soğuk dili, anlaşılmaz derleyici hataları ve takıldıklarında soru sorabilecekleri samimi bir topluluk bulamamalarıdır.

**TryFinally**, bu engelleri tamamen ortadan kaldırmak için tasarlanmıştır:
* **Sıfır Kurulum:** Tarayıcıyı açtığınız anda kod yazabileceğiniz Monaco Editor hazırdır.
* **Sunucuya Sıfır Yükle Güvenli Kod Koşturma:** Yazdığınız JavaScript ve Python kodları sunucuda değil; tarayıcınızda izole bir şekilde (Web Worker ve Pyodide ile) çalışır. Bu sayede sunucu maliyetleri sıfıra iner ve kodunuz anında çalışır.
* **Google Gemini API ile Şefkatli Hata Açıklamaları:** Kodunuzda bir hata olduğunda sistem sizi azarlamaz; Google Gemini API hatayı yeni başlayan birinin anlayabileceği sade bir Türkçe ile açıklar ve doğrudan cevabı vermeden yönlendirici ipuçları (hints) sunar.
* **Bütünleşik Topluluk Forumu:** Soruları çözerken takıldığınız her an, ilgili sorunun hemen altından toplulukla fikir alışverişi yapabilirsiniz.
* **Sunucu Odaklı Güvenli Veri:** Tüm çözümleriniz, profiliniz, puanlarınız ve forum içerikleriniz sunucudaki merkezi veritabanında güvenle saklanır.

---

## 🏛️ Mimari Prensipler ve Standartlar

TryFinally, yazılım mühendisliği ilkelerine tam sadakatle inşa edilmektedir:

### 1. Sıfır Harici API Bağımlılığı (Gemini Hariç)
Platformun **Google Gemini API** haricinde hiçbir ücretli veya üçüncü parti harici API bağımlılığı yoktur ve olmayacaktır. Sistem tamamen kendi sunucusunda ve bağımsız çalışır.

### 2. Clean Architecture & Ultra-Modüler Yapı
Projede dosya karmaşasını önlemek ve gelecekteki değişiklikleri saniyeler içinde yapabilmek adına modüler Clean Architecture uygulanır. Her özellik (`features/*`) kendi kendine yeten bağımsız bir adacıktır:

```text
src/features/<ozellik-adi>/
├── types.ts      # Domain modelleri ve TypeScript arayüzleri
├── service.ts    # İş mantığı, sunucu API çağrıları ve veri işlemleri
├── ui.tsx        # Sadece görsel sunumdan sorumlu UI bileşenleri
└── index.ts      # Modülün dışa açılan genel kapısı (Public Contract)
```

> ⚠️ **Katı Modül Kuralı:** Bir modül başka bir modülün iç dosyalarına (`features/puzzles/service.ts`) doğrudan erişemez. İletişim kesinlikle ilgili modülün `index.ts` dosyası üzerinden yapılır (`import { getPuzzle } from '@/features/puzzles'`).

### 3. Merkezi ve Kolayca Değiştirilebilir Taslak Tema Sistemi
Arayüzde rastgele renk kodları (`#123456`, `bg-blue-600`) kullanmak kesinlikle yasaktır. Tüm tasarım, semantik tasarım token'larına bağlanmıştır:

| Semantik Token | Görevi |
| :--- | :--- |
| `background` | Sayfanın temel zemin rengi |
| `surface` | Kartlar, pencereler ve panellerin rengi |
| `primary` | Ana marka rengi ve birincil aksiyon butonları |
| `secondary` | İkincil eylemler ve yardımcı butonlar |
| `accent` | Rozetler, dikkat çekici etiketler ve vurgular |
| `muted` | Pasif/devre dışı metinler ve arka planlar |
| `border` | Ayırıcı çizgiler ve kenarlıklar |
| `destructive` | Hata mesajları, silme butonları ve uyarılar |

🎨 **Tema Nasıl Değişir?** İleride nihai renk paleti belirlendiğinde tek bir konfigürasyon dosyasındaki (`src/lib/theme/`) renk tanımları güncellenir ve A'dan Z'ye tüm platform anında yeni temaya kusursuz bir şekilde bürünür.

---

## 📁 Dizin Yapısı

```text
TryFinallyProject/
├── .env.example                # Çevre değişkenleri şablonu ve detaylı açıklamaları
├── memory-bank/                # Projenin hafıza bankası (Mimari, kararlar ve ilerleme)
│   ├── projectbrief.md         # Proje vizyonu, kapsam ve değişmez ilkeler
│   ├── productContext.md       # Neden var olduğu, çözülen problemler ve UX hedefleri
│   ├── activeContext.md        # Aktif çalışma odağı, kararlar ve sonraki adımlar
│   ├── systemPatterns.md       # Sistem mimarisi, Clean Architecture ve tema kuralları
│   ├── techContext.md          # Teknoloji stack'i, bağımlılıklar ve teknik kısıtlar
│   └── progress.md             # Tamamlanan ve kalan fazların ilerleme tablosu
├── base_plan.md                # 8 aşamalı detaylı geliştirme yol haritası
├── src/
│   ├── app/                    # Next.js App Router sayfa yönlendirmeleri
│   │   ├── (forum)/            # Topluluk forumu sayfaları
│   │   ├── (puzzles)/          # Algoritma kodlama ve pratik sayfaları
│   │   ├── (learn)/            # Öğrenme müfredatı ve konu anlatımları
│   │   ├── (profile)/          # Kullanıcı profili ve başarım sayfaları
│   │   ├── layout.tsx          # Kök sayfa düzeni (Navbar, Tema, Shell)
│   │   └── page.tsx            # Ana karşılama sayfası
│   ├── features/               # Özellik bazlı Clean Architecture modülleri
│   │   ├── forum/              # Forum tartışmaları ve yorumlama
│   │   ├── puzzles/            # Algoritma soruları ve test senaryoları
│   │   ├── runner/             # Web Worker ve Pyodide kod koşturucu motoru
│   │   ├── learn/              # Öğrenme yol haritası içerikleri
│   │   ├── gamification/       # Skor, streak ve rozet hesaplamaları
│   │   └── ai/                 # Google Gemini API akıllı hata ve ipucu servisi
│   ├── lib/                    # Merkezi ortak altyapı servisleri
│   │   ├── logger.ts           # Seviyeli ve modüler merkezi log servisi
│   │   ├── theme/              # Merkezi semantik renk token'ları ve tema yapılandırması
│   │   └── utils.ts            # Yardımcı fonksiyonlar
│   └── components/ui/          # Paylaşılan atomik UI bileşenleri (shadcn/ui)
├── LICENSE                     # MIT Açık Kaynak Lisansı
└── README.md                   # Proje tanıtım ve kullanım kılavuzu
```

---

## ⚙️ Kurulum ve Geliştirme Rehberi

### Gereksinimler
* **Node.js:** `v26.8.0` veya üzeri
* **npm:** `v12.0.0` veya üzeri
* **Terminal Proxy (RTK):** Tüm terminal komutları token tasarrufu ve optimizasyon için `rtk` ile çalıştırılmalıdır.

### 1. Depoyu Klonlayın
```bash
rtk git clone https://github.com/emrullah-enis-ctnky/TryFinallyProject.git
cd TryFinallyProject
```

### 2. Çevre Değişkenlerini Hazırlayın
Proje dizinindeki `.env.example` dosyasını `.env.local` olarak kopyalayın:
```bash
cp .env.example .env.local
```

`.env.local` dosyasını açarak Google Gemini API anahtarınızı girin:
```env
# https://aistudio.google.com/app/apikey adresinden ücretsiz alabilirsiniz
GEMINI_API_KEY=sizin_gemini_api_anahtariniz
GEMINI_MODEL=gemini-1.5-flash
DATABASE_URL="file:./dev.db"
NODE_ENV=development
NEXT_PUBLIC_LOG_LEVEL=debug
```

### 3. Bağımlılıkları Yükleyin
```bash
rtk npm install
```

### 4. Geliştirme Sunucusunu Başlatın
```bash
rtk npm run dev
```
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyebilirsiniz. Kod değişiklikleriniz anında tarayıcıya yansıyacaktır.

---

## 🧪 Derleme (Build), Test ve Kalite Komutları

| Komut | Ne İşe Yarar? | Ne Zaman Kullanılır? |
| :--- | :--- | :--- |
| `rtk npm run dev` | Geliştirme sunucusunu başlatır. | Kod yazarken ve arayüzü denerken. |
| `rtk npm run build` | Projeyi üretim için derler. Tip kontrolleri ve optimizasyonlar yapılır. | Canlıya almadan önce veya PR açmadan önce. |
| `rtk npm run start` | Üretim derlemesini yerel olarak çalıştırır. | Derleme çıktısının canlıdaki davranışını test etmek için. |
| `rtk npm run lint` | Kodun sözdizimi ve stil kurallarını denetler (ESLint). | Kod kalitesini korumak için commit öncesinde. |
| `rtk npm test` | Vitest ile birim ve servis testlerini çalıştırır. | Servislerin ve runner mantığının doğrulanmasında. |
| `rtk npm run test:e2e` | Playwright ile kullanıcı senaryolarını test eder. | Arayüz ve kullanıcı akışlarının doğrulanmasında. |

---

## 🗺️ Geliştirme Yol Haritası (8 Faz)

Takım kararları doğrultusunda, ekibin arayüzü erkenden görebilmesi için geliştirme sırası mantıklı bir akışa oturtulmuştur:

* [ ] **Faz 0: Temel Proje Yapısı, İskelet, Log Servisi ve Çevre Değişkenleri**
  * Next.js, TypeScript, Tailwind CSS ve klasör iskeletinin kurulması.
  * `lib/logger.ts` ile seviyeli merkezi log altyapısı ve domain tiplerinin tanımlanması.
* [ ] **Faz 1: Merkezi Taslak Tema Sistemi, Arayüz İskeleti ve Taslak Ekranlar (UI Shell)**
  * Semantik renk token'ları ile kolayca değiştirilebilir merkezi taslak tema altyapısı.
  * Kodlama paneli, forum, öğrenme yol haritası ve profil taslak ekranlarının mock verilerle görselleştirilmesi.
* [ ] **Faz 2: Sunucu Veri Katmanı ve Çekirdek Servisler (Backend & Database)**
  * Sunucu veritabanı şeması, Server Actions/API Routes ve 10 başlangıç sorusu tohum verileri.
* [ ] **Faz 3: Tarayıcı İçi İzole Kod Koşturucu (Web Worker & Pyodide)**
  * JavaScript ve Python için tarayıcıda izole, zaman aşımı korumalı kod koşturucu ve test motoru.
* [ ] **Faz 4: Google Gemini API ile Akıllı Asistan Servisi (`features/ai`)**
  * Yeni başlayanlara Türkçe kod hata açıklamaları ve yönlendirici ipuçları sunan servis.
* [ ] **Faz 5: Arayüz ve Sunucu Entegrasyonu (Full Dynamic UI)**
  * Taslak UI ekranlarının gerçek sunucu veritabanına, kod koşturucuya ve Gemini asistanına bağlanması.
* [ ] **Faz 6: Test, Kalite Güvencesi ve CI/CD**
  * Vitest ve Playwright testleri ile GitHub Actions otomatik kontrol iş akışı.
* [ ] **Faz 7: Dokümantasyon, Topluluk ve Yayına Alma**
  * Katkı sağlama kılavuzu (`CONTRIBUTING.md`) ve canlı üretim yayını.

---

## 🧠 Cline Memory Bank

Bu projede yapay zeka asistanları (Cline) için **Memory Bank** standartları uygulanmaktadır. Oturumlar arasında hafıza sıfırlandığı için her görevin başında `memory-bank/` altındaki tüm dosyalar okunmalı, kararlar ve ilerleme bu dosyalara titizlikle kaydedilmelidir:

1. `projectbrief.md`: Temel vizyon ve değişmez ilkeler.
2. `productContext.md`: Neden var olduğu ve kullanıcı deneyimi hedefleri.
3. `activeContext.md`: Anlık odak, kararlar ve sonraki adımlar.
4. `systemPatterns.md`: Clean Architecture ve tema sözleşmeleri.
5. `techContext.md`: Teknoloji stack'i ve teknik kısıtlar.
6. `progress.md`: Faz bazlı ilerleme takip tablosu.

---

## 🤝 Katkıda Bulunma

TryFinally topluluk odaklı, açık kaynaklı bir projedir. Her türlü katkıya (soru ekleme, hata düzeltme, dokümantasyon geliştirme) açığız.
1. Depoyu Fork'layın.
2. Yeni bir özellik dalı (feature branch) açın: `rtk git checkout -b feature/yeni-ozellik`
3. Temiz ve modüler kod yazarak commit atın: `rtk git commit -m "feat: yeni ozellik eklendi"`
4. Dalınızı gönderin: `rtk git push origin feature/yeni-ozellik`
5. Bir Pull Request açın.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır. Tamamen ücretsiz ve açık kaynaklıdır.
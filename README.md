# TryFinally

Yazılıma yeni başlayanlar için geliştirilen, topluluk forumu ve tarayıcı tabanlı algoritma pratiklerini bir araya getiren açık kaynaklı platform.

---

## 1. Temel Yaklaşım

* **Maliyet:** Ücretsiz ve açık kaynaklı kütüphaneler tercih edilir; harici ücretli API bağımlılığı bulunmaz.
* **Offline-First:** Kod çalıştırma, içerik görüntüleme ve taslak kayıtları tarayıcı üzerinde (IndexedDB/Worker) yerel olarak çalışabilecek şekilde tasarlanır.
* **Mimari:** Sade ve anlaşılır Clean Architecture. Gereksiz dosya kalabalığı oluşturmadan, her özellik modülü tek bir klasör altında toplanır.

---

## 2. Dizin Yapısı

Dosya karmaşasını önlemek adına klasör derinliği sığ tutulur:

```text
src/
├── app/                        # Next.js sayfa yönlendirmeleri (routing)
│   ├── (forum)/                # Forum sayfaları
│   ├── (puzzles)/              # Soru ve kodlama sayfaları
│   ├── layout.tsx              # Kök düzen
│   └── page.tsx                # Ana sayfa
├── features/                   # Özellik bazlı modüller
│   ├── forum/
│   │   ├── types.ts            # Tip ve arayüz tanımları
│   │   ├── service.ts          # Veri ve iş mantığı (IndexedDB/API işlemleri)
│   │   ├── ui.tsx              # Arayüz bileşenleri
│   │   └── index.ts            # Modülün dışa aktarılan bileşen ve fonksiyonları
│   ├── puzzles/                # Soru listesi, test case kontrolü
│   ├── runner/                 # Kod çalıştırma motoru (Web Worker / Pyodide)
│   ├── learn/                  # Algoritma yol haritası ve konu anlatımları
│   └── gamification/           # Skor, rozet ve profil durumu
├── lib/                        # Ortak yardımcılar
│   ├── logger.ts               # Merkezi loglama yardımcısı
│   ├── storage.ts              # Dexie.js (IndexedDB) yerel veri şeması
│   └── utils.ts                # Genel yardımcı fonksiyonlar
└── components/ui/              # Paylaşılan temel UI bileşenleri (shadcn/ui)
```

---

## 3. Kodlama Standartları

* **Katman Düzeni:** `ui.tsx` dosyaları görsel sunuma odaklanır; veri erişimi ve ağır hesaplamalar `service.ts` dosyasında tutulur.
* **Modül İletişimi:** Bir modül başka bir modülün işlevlerine ihtiyaç duyduğunda doğrudan iç dosyalara girmek yerine ilgili modülün `index.ts` dosyası üzerinden erişir.
* **Loglama:** Akış takibini ve hata ayıklamayı kolaylaştırmak için `@/lib/logger` kullanılır:
  ```typescript
  logger.info("Runner", "Kod çalıştırma başlatıldı", { puzzleId });
  logger.error("Storage", "Lokal veri yazma hatası", error);
  ```
* **Veri Akışı:** Okuma ve yazma işlemlerinde önce yerel depolama (`@/lib/storage.ts`) kullanılır, bağlantı sağlandığında sunucuyla senkronize edilir.

---

## 4. Kullanılan Teknolojiler

* **Framework:** Next.js (App Router) + TypeScript
* **Stil:** Tailwind CSS + shadcn/ui + Lucide Icons
* **Lokal Veritabanı:** Dexie.js (IndexedDB)
* **Kod Koşturucu:** Web Worker (JavaScript) & Pyodide (Python)
* **PWA:** Çevrimdışı varlık ve sayfa önbellekleme
* **Kod Editörü:** `@monaco-editor/react`
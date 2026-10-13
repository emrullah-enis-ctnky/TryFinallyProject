# Judge Sistemi — Adım Adım Ne Yaptık?

> Bu belge, TryFinally'nin **judge** (kod değerlendirme) sistemini hiç bilmeyen birinin de anlayabileceği şekilde anlatır.
> Dal: `feat/m7-judge` (sadece yerelde, GitHub'a gönderilmedi).

---

## 1. Judge ne iş yapar? (Tek cümlede)

Kullanıcı "Gönder"e basınca, yazdığı kodu **güvenli bir kutunun içinde** çalıştırıp her testin cevabını doğru cevapla karşılaştıran ve sonunda "Doğru / Yanlış / Çok yavaş / Hata verdi" diyen sistem.

**Benzetme:** Judge bir sınav görevlisidir.
- Öğrenci (kullanıcı) kâğıdını (kodunu) teslim eder.
- Görevli kâğıdı bir **cam odaya** koyar. Odadan dışarı hiçbir şey çıkamaz, içeride sınırlı zaman ve kâğıt vardır.
- Her soruyu (testi) tek tek sorar, cevabı cevap anahtarıyla karşılaştırır.
- Cevap anahtarı **asla odaya girmez**. Öğrenci kopya çekemez.

---

## 2. Büyük resim

```
 [Tarayıcı]                [Next.js sitesi]                [Veritabanı]          [Judge worker]          [Docker]
     |                            |                             |                      |                    |
     |-- "Gönder" (kod) --------->|                             |                      |                    |
     |                            |-- gönderimi kaydet -------->|  status = PENDING    |                    |
     |<-- 202 {submissionId} -----|                             |                      |                    |
     |                            |                             |<-- sırada iş var mı?-|                    |
     |                            |                             |--- var: RUNNING ---->|                    |
     |                            |                             |                      |-- kodu çalıştır -->|
     |                            |                             |                      |<-- test sonuçları -|
     |                            |                             |<-- ACCEPTED / ... ---|                    |
     |-- "bitti mi?" (her 1 sn)-->|-- oku --------------------->|                      |                    |
     |<-- sonuç ------------------|                             |                      |                    |
```

Önemli noktalar:
- **Site kodu çalıştırmaz.** Sadece "sıraya" koyar ve hemen cevap verir. Kod çalıştırmak uzun sürebilir; site donmasın diye.
- **Sıra (kuyruk) veritabanında.** Ayrı bir kuyruk programı kurmadık (ekip kararı).
- **Worker ayrı bir programdır.** Sitenin yanında ikinci bir terminalde çalışır.
- **Kod Docker konteynerinde çalışır.** Konteyner = içinde sadece Python veya Java veya C++ olan, internetsiz, tek kullanımlık mini bilgisayar.

---

## 3. Adım adım ne yaptım?

### Adım 0 — Repo'yu yerelde kopyaladım
- Konum: `C:\Users\efena\TryFinallyProject`
- Dal: `feat/m7-judge` (arkadaşların son commit'i `88885ae` üzerine)
- **GitHub'a hiçbir şey gönderilmedi.** Her şey bu bilgisayarda.

### Adım 1 — "Driver"lar (çevirmenler)
📁 `judge/runtimes/python/driver.py`, `judge/runtimes/cpp/judge_io.hpp`, `judge/runtimes/java/JudgeIO.java`

**Sorun:** Kullanıcı sadece bir fonksiyon yazıyor (`twoSum(nums, target)`). Ama bir programın çalışması için birinin o fonksiyonu **çağırması**, girdiyi vermesi ve sonucu alması gerekiyor.

**Çözüm:** Her dil için bir "driver" yazdım. Driver, LeetCode'un gizli tuttuğu kısımdır. Şunu yapar:
1. Testleri okur (ör. `[[2,7,11,15], 9]`)
2. Her test için `Solution().twoSum([2,7,11,15], 9)` çağırır
3. Kullanıcının `print`/`cout`/`System.out` çıktılarını **ayrı bir kutuda** yakalar (LeetCode'daki "Stdout" kısmı)
4. Sonucu ve süreyi `@@JUDGE@@ {...}` diye işaretli bir satırla dışarı yazar
5. Kod hata verirse, hata mesajını sadece kullanıcının kendi satırlarını gösterecek şekilde temizler

Örnek: Kullanıcı `nums[100]` yazarsa, ekranda şu görünür:
```
Traceback (most recent call last):
  File "solution.py", line 3, in twoSum
    return [nums[100], 0]
IndexError: list index out of range
```

> 💡 Driver **beklenen cevabı bilmez.** Cevap anahtarı konteynere hiç gönderilmez; karşılaştırmayı dışarıdaki judge yapar.

### Adım 2 — İmza okuyucu
📁 `judge/engine/signature.ts`

**Sorun:** C++ ve Java'da driver'ın tipleri bilmesi şart. `twoSum`'a `vector<int>` mi veriyoruz, `int[]` mi?

**Çözüm:** Sorunun başlangıç kodundaki satırı okuyup parçalıyoruz:
```
std::vector<int> twoSum(std::vector<int>& nums, int target) {
   └ dönüş tipi    └ ad      └ 1. parametre        └ 2. parametre
```

**Desteklenen tipler** (Emre, soru eklerken bunlara dikkat!):

| Anlam | C++ | Java | Python |
|---|---|---|---|
| tam sayı | `int` | `int` / `Integer` | `int` |
| büyük tam sayı | `long long` | `long` | `int` |
| ondalıklı | `double` | `double` | `float` |
| doğru/yanlış | `bool` | `boolean` | `bool` |
| metin | `string` | `String` | `str` |
| liste | `vector<T>` | `T[]` veya `List<T>` | `list` |
| iki boyutlu liste | `vector<vector<int>>` | `int[][]` / `List<List<Integer>>` | `list[list]` |

❌ Desteklenmeyenler: ağaç (`TreeNode`), bağlı liste (`ListNode`), `map`, `char`, `void` döndüren metotlar. Bunları kullanan bir soru eklenirse judge "INTERNAL_ERROR: başlangıç kodu uygun değil" der.

### Adım 3 — Kod üretici
📁 `judge/engine/codegen.ts`

Kullanıcı kodu + driver'ı birleştirip çalıştırılacak dosyaları hazırlar.

**İnce nokta — satır numaraları:** Kullanıcının koduna bir şey eklersek hata mesajlarındaki satır numaraları kayar ("5. satırda hata" der ama hata 3. satırdadır). Bunu önlemek için:
- **C++:** `#line 1 "solution.cpp"` komutu derleyiciye "buradan itibaren 1. satır say" der.
- **Java:** Gerekli `import`'ları kullanıcının ilk satırının **önüne, aynı satıra** yazdık. Yeni satır eklemediğimiz için numaralar değişmiyor.
- **Python:** Kullanıcının kodu ayrı dosya olarak yükleniyor, dokunulmuyor.

Ayrıca LeetCode'daki gibi kullanıcı `import` yazmadan `vector`, `HashMap`, `List` gibi şeyleri kullanabilir.

### Adım 4 — Kum havuzu (sandbox)
📁 `judge/engine/sandbox.ts`, `judge/engine/config.ts`

Her gönderim için yeni bir Docker konteyneri açılır ve iş bitince silinir. Konteynerin kuralları:

| Kural | Ne işe yarar? |
|---|---|
| `--network none` | İnternet yok. Kod dışarıya veri gönderemez. |
| `--memory 256m` vb. | Belleği sınırlı. Bilgisayarın RAM'ini yiyemez. |
| `--pids-limit` | En fazla belirli sayıda süreç açabilir (fork bombasına karşı). |
| `--read-only` | Diske yazamaz; sadece 64 MB'lık geçici bir `/tmp` var. |
| `--user 65534` | "nobody" kullanıcısı olarak çalışır, yönetici (root) değil. |
| `--cap-drop ALL` | Tüm özel yetkiler kapalı. |
| `--pull never` | İmaj yoksa kendi kendine internetten indirmez, hata verir. |

**Süre sınırları** (`config.ts`):

| Dil | Test başına süre | Bellek |
|---|---|---|
| C++ | 1 sn | 256 MB |
| Java | 2 sn | 256 MB (JVM açılışı yavaş olduğu için süre daha uzun) |
| Python | 3 sn | 256 MB (Python yavaş olduğu için) |

**Sonsuz döngüyü nasıl yakalıyoruz?** Driver her testten önce "başladım" diye haber veriyor. Judge bir kronometre başlatıyor. Süre sınırı + 1,5 sn içinde "bitti" haberi gelmezse konteyneri öldürüyor ve o teste **TIME_LIMIT** diyor.

**"local" modu:** Docker olmadan, kodu doğrudan bu bilgisayarda çalıştıran bir mod da var (`--local` veya `JUDGE_SANDBOX=local`). **Hiçbir koruma yoktur**, sadece geliştirirken denemek için. Bellek sınırı da yoktur.

### Adım 5 — Karar verici (verdict)
📁 `judge/engine/judge.ts`, `judge/engine/compare.ts`

Testler sırayla kontrol edilir; **ilk başarısız testte durulur** (LeetCode gibi):

| Sonuç | Ne zaman? |
|---|---|
| ✅ `ACCEPTED` | Tüm testler doğru |
| ❌ `WRONG_ANSWER` | Çıktı beklenenden farklı |
| ⏱ `TIME_LIMIT` | Süre aşıldı (sonsuz döngü veya yavaş algoritma) |
| 💾 `MEMORY_LIMIT` | Bellek aşıldı |
| 💥 `RUNTIME_ERROR` | Çalışırken hata (dizi dışı erişim, sıfıra bölme...) |
| 📝 `COMPILE_ERROR` | Kod derlenemedi / yazım hatası |
| 🔧 `INTERNAL_ERROR` | **Bizim** hatamız (Docker kapalı, soru dosyası bozuk...) |

Karşılaştırma: Çıktılar JSON olarak karşılaştırılır. Ondalıklı sayılarda çok küçük farklar (0.000001) kabul edilir.

Başarısız testte ekranda gösterilenler (ekip kararı, LeetCode gibi): **girdi, beklenen çıktı, senin çıktın, stdout ve hata mesajı.** Gizli test olsa bile sadece ilk başarısız testin içeriği gösterilir; diğer gizli testler gizli kalır.

### Adım 6 — Deneme komutları ve örnek çözümler
📁 `judge/try.ts`, `judge/selftest.ts`, `judge/examples/`

- `judge/examples/<soru>/<beklenen-sonuç>.<uzantı>`: ör. `two-sum/time_limit.py` mutlaka TIME_LIMIT almalı.
- `npm run judge:selftest`: hepsini çalıştırıp beklenen sonucu alıyor mu bakar.
- `npm run judge:try -- two-sum python dosya.py`: tek bir dosyayı dener. **Veritabanı ve site gerekmez.** Emre, yeni soruların resmi çözümlerini bununla kontrol edebilir.

### Adım 7 — Veritabanı değişiklikleri
📁 `prisma/schema.prisma`

| Değişiklik | Neden? |
|---|---|
| `SubStatus` enum'u: `SUCCESS/FAILED/TIME_LIMIT` → `PENDING, RUNNING, ACCEPTED, WRONG_ANSWER, TIME_LIMIT, MEMORY_LIMIT, RUNTIME_ERROR, COMPILE_ERROR, INTERNAL_ERROR` | Kuyruk için "sırada" ve "çalışıyor" durumları, sonuç için de tüm verdict'ler gerekiyordu. |
| Yeni enum `SubmissionKind` (`RUN` / `SUBMIT`) | "Çalıştır" ile "Gönder"i ayırmak için. |
| `Submission`'a yeni alanlar: `kind`, `passedCount`, `totalCount`, `runtimeMs`, `result` (JSON), `judgedAt` | Sonucu ekranda göstermek için. |
| Yeni tablo `SolvedProblem` | **Puan sadece ilk çözümde** verilsin diye. Aynı (kullanıcı, soru) ikilisi bu tabloya ikinci kez yazılamaz; yazılamazsa puan da verilmez. |

⚠️ **Arkadaşları etkiler:** `SubStatus`'ı ve `Submission`'ı değiştirdim. Şemayı yazan arkadaşla konuşmak gerekiyor.

**Sorular hakkında:** Sorular `problems/` klasöründeki dosyalarda duruyor, ama `Submission` tablosu `Problem` tablosuna bağlı. Bu yüzden biri bir soruya ilk kez kod gönderdiğinde, sorunun bir kopyası `Problem` tablosuna **id = slug** (ör. `two-sum`) olarak yazılıyor.

### Adım 8 — Worker
📁 `judge/worker.ts`

Sonsuz bir döngü:
1. `PENDING` olan en eski gönderimi bul.
2. Onu `RUNNING` yap. Bunu "hâlâ PENDING ise" şartıyla yapıyoruz; böylece iki worker aynı gönderimi alamaz.
3. Judge'dan geçir.
4. Sonucu yaz. "Gönder" ve ilk kez `ACCEPTED` ise `SolvedProblem`'e ekle ve kullanıcının `totalPoints`'ine sorunun puanını ekle. Bunların hepsi tek bir **transaction** içinde: ya hepsi olur, ya hiçbiri.
5. İş yoksa yarım saniye bekle.

Ekstralar:
- Aynı anda 2 gönderim çalıştırır (`JUDGE_CONCURRENCY` ile değiştirilebilir).
- Worker kapanıp açılırsa, yarıda kalan `RUNNING` gönderimleri tekrar sıraya koyar.
- Ctrl+C'ye basınca çalışan işleri bitirip öyle kapanır.

### Adım 9 — API uçları
📁 `src/app/api/submissions/route.ts`, `src/app/api/submissions/[id]/route.ts`

| Uç | Ne yapar? |
|---|---|
| `POST /api/submissions` | `{ problemSlug, language, code, kind }` alır. Giriş yapılmış mı, kod boş mu/çok mu uzun (64 KB), soru var mı diye bakar. Gönderimi `PENDING` olarak kaydeder, `202 { submissionId }` döner. |
| `GET /api/submissions/:id` | Gönderimin durumunu ve sonucunu döner. Sadece gönderimin sahibi görebilir. |

Kötüye kullanıma karşı: Kullanıcının bekleyen bir gönderimi varken yenisini gönderemez (429 hatası).

### Adım 10 — Arayüz için hazır fonksiyonlar (Modül 6)
📁 `src/features/judge/` (`types.ts`, `client.ts`, `index.ts`)

Kodlama ekranını yapan arkadaş için:
```ts
import { createSubmission, waitForSubmission } from "@/features/judge";

const { submissionId } = await createSubmission({ problemSlug: "two-sum", language: "python", code, kind: "submit" });
const sonuc = await waitForSubmission(submissionId, { onUpdate: (v) => setDurum(v.status) });
// sonuc.status, sonuc.result.failedTest, sonuc.pointsAwarded ...
```
⚠️ Editördeki "Çalıştır" / "Gönder" butonlarını bu fonksiyonlara **bağlamadım**; o kısım Modül 6'nın (`src/features/problems/ProblemDetail.tsx`).

### Adım 11 — Soru kontrol aracı
📁 `judge/check-problems.ts` → `npm run judge:check`

Soruları bir sınav kâğıdı gibi düşün: Kâğıdı basmadan önce soruların doğru yazıldığını, cevap anahtarının doğru olduğunu kontrol ediyoruz. Araç her soru için şunlara bakar:
- `tr.md`, `en.md`, `de.md` var mı; `slug`, `difficulty`, `points` üçünde de aynı mı?
- Başlangıç kodu judge'ın anlayacağı tiplerde mi; C++, Java ve Python'da aynı imza mı?
- Her testte argüman sayısı ve tipleri imzaya uyuyor mu; `int` sınırını aşan sayı var mı?
- Görünür ve gizli test var mı; metinlerde Türkçe karakter var mı?
- `solutions/` içindeki resmi çözümler bütün testleri geçiyor mu?

Bilerek bozulmuş bir soruyla denendi: 7 hatanın 7'sini de yakaladı (aynı test id'si, eksik argüman, metin yerine sayı, int taşması, farklı puan, farklı imza, yanlış çıktı tipi).

### Adım 12 — Resmi çözümler ve 5 yeni soru
📁 `problems/<slug>/solutions/`, `problems/fizz-buzz`, `sesli-harf-sayisi`, `gecerli-parantezler`, `merdiven-cikma`, `maksimum-alt-dizi-toplami`

- Mevcut 5 sorunun her birine Python, Java ve C++ resmi çözümü eklendi.
- 5 yeni soru eklendi. Böylece toplam 10 soru oldu: 6 kolay, 4 orta. Her biri Türkçe, İngilizce ve Almanca metinli, 3 dilde resmi çözümlü.
- Testlerin beklenen çıktıları elle yazılmadı, bir script resmi çözümle hesapladı.
- Üç soruya **algoritma hızını ölçen büyük gizli testler** kondu. Bilerek yavaş yazılmış çözümler (`judge/examples/.../time_limit.*`) küçük testleri geçip büyük testte TIME_LIMIT alıyor. Yani judge "doğru ama yavaş" çözümü gerçekten yakalıyor.
- Sitenin kendi soru okuyucusu 10 soruyu üç dilde sorunsuz açıyor.

Kurallar için bkz. [soru-yazma-kurallari.md](soru-yazma-kurallari.md).

### Adım 13 — Güvenlik düzeltmesi: gizli testler tarayıcıya gitmiyor
📁 `src/app/problems/[slug]/page.tsx`

Soru sayfası, sorunun tamamını **gizli testler ve cevapları dahil** tarayıcıya gönderiyordu. Ekranda görünmüyordu ama sayfa kaynağında okunabiliyordu, yani cevap anahtarı öğrencinin eline geçiyordu. Artık gizli testlerin sadece id'leri gidiyor, içerikleri boş. Ekrandaki "N gizli test" yazısı aynı kalıyor. Bu, 100 000 elemanlı testin sayfayı 540 KB şişirmesini de önlüyor.

### Adım 14 — Gönderim geçmişi ve yüzdelik
📁 `src/app/api/submissions/route.ts` (GET), `src/app/api/submissions/[id]/route.ts`, `src/features/judge/ui.tsx`

- **Geçmiş:** `GET /api/submissions?problem=two-sum` kullanıcının o sorudaki "Gönder"lerini en yeniden eskiye döner. "Çalıştır" denemeleri listelenmez (LeetCode gibi).
- **Yüzdelik:** Kabul edilen bir gönderimin sonucunda `runtimeBeatsPercent` var: aynı soru ve dildeki diğer kabul edilmiş çözümlerin yüzde kaçı bundan yavaş. Eşit süreler yarım sayılıyor, çünkü kolay soruların çoğu 0 ms sürüyor ve herkes %100 görürse anlamı kalmaz. Karşılaştıracak başka çözüm yoksa boş kalır.
- **Hazır arayüz parçaları:** Modül 6 bunları ekrana koyabilir:
  - `<VerdictBadge status="ACCEPTED" />`: "Kabul Edildi" gibi renkli rozet
  - `<RuntimeSummary view={sonuc} />`: "Çalışma süresi: 12 ms · Senden yavaş olan Python çözümleri: %72"
  - `<SubmissionHistory problemSlug="two-sum" refreshKey={n} />`: geçmiş tablosu (durum, dil, süre, test, zaman)
- Geçmiş ve yüzdelik sorguları hızlı olsun diye `Submission` tablosuna iki indeks eklendi.

> Not: Temada yeşil bir "başarı" rengi yok. Proje kuralı sabit renk yazmayı yasakladığı için "Kabul Edildi" temanın `accent` rengiyle (camgöbeği) gösteriliyor. Tasarımı yapan arkadaş bir `success` rengi eklerse rozet ona çevrilebilir.

---

## 4. Ne test edildi, ne edilmedi? (Dürüst durum)

| Parça | Durum |
|---|---|
| Python driver + judge motoru | ✅ Bu bilgisayarda (local modda) denendi. ACCEPTED, WRONG_ANSWER, TIME_LIMIT, RUNTIME_ERROR ve COMPILE_ERROR örneklerinin hepsi doğru sonucu verdi. |
| Java driver + judge motoru | ✅ Local modda denendi. ACCEPTED, RUNTIME_ERROR ve COMPILE_ERROR doğru. `int[][]`, `List<List<Integer>>`, `long`, `double`, `boolean[]` tipleri de denendi. |
| Türkçe karakterler (`çiğdem ışık`) ve özel karakterler (`" \ \n`) | ✅ Python ve Java'da denendi. |
| C++ driver | ✅ CodeBlocks'un MinGW 8.1 derleyicisiyle local modda denendi (C++14 ile, aşağıdaki nota bak). ACCEPTED, RUNTIME_ERROR, TIME_LIMIT ve COMPILE_ERROR doğru; iç içe tipler çalışıyor; derleme hatalarında satır numarası doğru (`solution.cpp:6:18`). |
| Judge motoru tip kontrolü | ✅ `judge/engine`, `try.ts`, `selftest.ts`, `check-problems.ts`, `src/features/judge` (arayüz bileşenleri dahil) TypeScript `strict` modda hatasız. |
| 10 soru × 3 dil resmi çözüm | ✅ 30/30 ACCEPTED (local mod). |
| Büyük testlerin yavaş çözümü yakalaması | ✅ 5 yavaş çözümün 5'i de TIME_LIMIT aldı. |
| Docker kum havuzu (3 dil) | ✅ 15/15 örnek doğru, **MEMORY_LIMIT dahil**. 30/30 resmi çözüm Docker'da ACCEPTED. |
| Docker güvenliği | ✅ Bilerek "kötü niyetli" yazılmış kodun 6 denemesinin 6'sı engellendi: internete bağlanma, DNS, judge dosyasını değiştirme, diske yazma, root olma, 200 süreç açma. |
| Worker + API + veritabanı (uçtan uca) | ✅ Sitede test hesabıyla giriş yapılıp API üzerinden gönderildi. Sonuçlar: Çalıştır (3/3, puan yok), Gönder (5/5, **+20 puan**), C++ yanlış cevap (stdout yakalandı), Java derleme hatası, aynı soruyu Java ve Python ile tekrar çözme (**ek puan yok**), 2. eşzamanlı gönderim (**429 reddedildi**), yavaş özyineleme (TIME_LIMIT). Veritabanında kullanıcının puanı 20. |
| Geçmiş ve yüzdelik API'si | ✅ Geçmiş "Çalıştır"ları göstermiyor; ikinci 0 ms çözümde yüzdelik %50 (eşitlik yarım sayılıyor). |
| Tüm projenin tip kontrolü + production derlemesi | ✅ `npx tsc --noEmit` ve `next build` hatasız (arkadaşların kodu + Emre'nin AI'ı + judge birlikte). |
| Geçmiş tablosu / AI paneli gibi arayüz parçalarının ekranda görünüşü | ❌ Kodlama ekranına bağlanmadığı için görülmedi (Modül 6). |

**Not — eski MinGW:** CodeBlocks ile gelen g++ 8.1, C++17 modunda `bits/stdc++.h`'i derleyemiyor (derleyicinin kendi hatası). Local modda denerken:
```bash
# Git Bash
export PATH="/c/Program Files/CodeBlocks/MinGW/bin:$PATH" JUDGE_CPP_STD=c++14
npm run judge:selftest -- --local
```
Docker'daki gcc 14'te bu sorun yok, orada C++17 kullanılıyor.

**Not — Türkçe karakterli metin soruları (Emre için önemli):** C++'ta `string`, Türkçe harfleri (ç, ğ, ı, ö, ş, ü) birden fazla bayt olarak tutar. Örneğin `reverse` ile ters çevirince harfler bozulur. Python ve Java'da doğru çalışan çözüm, C++'ta **haksız yere WRONG_ANSWER** alır (LeetCode da böyle davranır). Kural: **Metin sorularının testlerinde sadece İngilizce harfler (ASCII) kullanın.**

---

## 5. Nasıl çalıştırılır?

**Bir kerelik hazırlık:**
```bash
# 1. Paketleri kur
npm install

# 2. Ayar dosyaları (ikisi de Git'e gitmez)
#    .env.local -> .env.example'ı kopyala, AUTH_SECRET'a rastgele bir metin yaz
#    .env       -> sadece DATABASE_URL satırı (Prisma'nın komut satırı aracı sadece bunu okuyor)
#    Docker'daki geliştirme veritabanı için:
#    DATABASE_URL="postgresql://admin:adminpassword@localhost:5433/tryfinally?schema=public"

# 3. Docker Desktop'ı aç, imajları indir (~3 GB, bir kere)
npm run judge:images

# 4. Veritabanını başlat ve tabloları kur
docker compose up -d
npx prisma migrate deploy
npx prisma generate
```

**Her seferinde (iki ayrı terminal):**
```bash
npm run dev            # site -> http://localhost:3000
npm run judge:worker   # judge
```

**Judge'ı tek başına denemek (site ve veritabanı gerekmez):**
```bash
npm run judge:selftest     # hatalı/yavaş örnekler doğru sonucu alıyor mu
npm run judge:check        # 10 soru + 30 resmi çözüm
npm run judge:try -- two-sum python problems/two-sum/solutions/solution.py
```

> **Sunumda production modunu kullanın:** `npm run build` ve ardından `npm start`. Geliştirme modu (`npm run dev`) React'in hata ayıklama verisi yüzünden soru dosyalarının ham halini (**gizli testler dahil**) sayfaya ekliyor. Production modunda bu yok; denendi, sayfalar 24 KB ve gizli test yok. Ayrıca `npm run dev` açıkken `npm run build` çalıştırmayın: ikisi aynı `.next` klasörünü kullandığı için açık olan site bozulur. Bozulursa `.next` klasörünü silip yeniden başlatın.

---

## 6. Bilinen eksikler ve riskler

1. **Prisma 7 (düzeltildi):** `src/lib/db.ts` `new PrismaClient()`'ı adaptörsüz çağırıyordu. Prisma 7 bunu kabul etmiyor; sadece worker değil, sitenin veritabanı kullanan **bütün** sayfaları bu yüzden çalışmıyordu. `@prisma/adapter-pg` eklenip `db.ts` düzeltildi. Arkadaşlara söylenmeli.
2. **C++ derleme süresi:** Her gönderimde `bits/stdc++.h` yeniden derleniyor (birkaç saniye). Demo için sorun değil.
3. **Bellek ölçümü yok:** Süreyi ölçüyoruz ama "kaç MB kullandı" bilgisini göstermiyoruz. Sadece sınır aşılırsa MEMORY_LIMIT diyoruz.
4. **Local mod güvenli değil:** Sunumda mutlaka Docker modu kullanılmalı.
5. **Windows + Docker Desktop:** Geçici klasörler `C:\Users\...\AppData\Local\Temp` altında açılıyor ve konteynere bağlanıyor. Docker Desktop'ın bu klasöre erişimi olmalı (varsayılan ayarlarla oluyor).

---

## 7. Dosya haritası

```
judge/
├── engine/
│   ├── config.ts       # diller, imajlar, süre/bellek sınırları
│   ├── signature.ts    # başlangıç kodundan metot adı + tipler
│   ├── codegen.ts      # kullanıcı kodu + driver = çalıştırılacak dosyalar
│   ├── sandbox.ts      # Docker (veya local) ile çalıştırma
│   ├── compare.ts      # çıktı karşılaştırma
│   ├── judge.ts        # ana fonksiyon: judge(istek) -> sonuç
│   ├── problems.ts     # problems/<slug>/ dosyalarını okur
│   └── index.ts
├── runtimes/           # konteynerin İÇİNDE çalışan driver'lar
│   ├── python/driver.py
│   ├── cpp/judge_io.hpp
│   └── java/JudgeIO.java
├── examples/           # selftest için hatalı/yavaş örnek çözümler
├── worker.ts           # npm run judge:worker
├── try.ts              # npm run judge:try
├── selftest.ts         # npm run judge:selftest
└── check-problems.ts   # npm run judge:check

problems/<slug>/solutions/   # resmi çözümler (solution.py, Solution.java, solution.cpp)
src/features/judge/          # ortak tipler, istemci yardımcıları, arayüz bileşenleri (ui.tsx)
src/app/api/submissions/     # POST (gönder), GET (geçmiş), GET :id (sonuç + yüzdelik)
src/app/problems/[slug]/page.tsx  # gizli testleri tarayıcıdan gizleyen düzeltme
prisma/schema.prisma         # SubStatus, SubmissionKind, Submission alanları, SolvedProblem, indeksler
prisma/migrations/20261013120000_judge_system/  # bu değişikliklerin veritabanı göçü
src/lib/db.ts                # Prisma 7 adaptör düzeltmesi
src/lib/session-user.ts      # oturumdaki kullanıcı (API uçları ortak kullanıyor)
docs/judge-adim-adim.md      # bu belge
docs/soru-yazma-kurallari.md # soru ekleyenler için kurallar
```

---

## 8. Mini sözlük

| Terim | Anlamı |
|---|---|
| **Judge** | Kodu çalıştırıp doğru mu yanlış mı karar veren sistem |
| **Verdict** | Kararın kendisi (ACCEPTED, WRONG_ANSWER...) |
| **Driver** | Kullanıcının fonksiyonunu çağıran gizli kod |
| **Konteyner** | İçinde sadece gereken programın olduğu, izole, tek kullanımlık mini bilgisayar |
| **İmaj** | Konteynerin kalıbı (ör. "içinde Python 3.12 olan Linux") |
| **Kuyruk** | Sırada bekleyen gönderimler (bizde veritabanında `PENDING` olanlar) |
| **Worker** | Kuyruktan iş alıp yapan ayrı program |
| **Polling** | Arayüzün "bitti mi?" diye her saniye sorması |
| **Stdout** | Programın ekrana yazdığı (`print`) çıktılar |
| **Transaction** | "Ya hepsi ya hiçbiri" şeklinde yapılan veritabanı işlemleri |

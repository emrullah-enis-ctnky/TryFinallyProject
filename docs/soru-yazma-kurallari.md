# Soru Yazma Kuralları

> Yeni bir soru eklerken bu sayfayı takip et. Bitirince `npm run judge:check` çalıştır; ✓ görmeden soruyu ekleme.

---

## 1. Klasör yapısı

```
problems/
└── sesli-harf-sayisi/          ← klasör adı = slug (küçük harf, Türkçe karakter yok, kelimeler arası -)
    ├── tr.md                   ← Türkçe metin
    ├── en.md                   ← İngilizce metin
    ├── de.md                   ← Almanca metin
    ├── testcases.json          ← testler
    └── solutions/              ← resmi çözümler
        ├── solution.py
        ├── Solution.java
        └── solution.cpp
```

En kolay yol: Mevcut bir soru klasörünü kopyalayıp içini değiştirmek.

---

## 2. Metin dosyaları (tr.md, en.md, de.md)

Üç dosyanın da **yapısı aynı** olmalı. Sadece metinler çevrilir.

```markdown
---
slug: sesli-harf-sayisi
title: Sesli Harf Sayısı
difficulty: kolay
topics: [Metin]
points: 10
---

## Problem

Sorunun açıklaması. Metot adını `countVowels` gibi kod biçiminde yaz.

## Örnekler

- `countVowels("hello world")` → `3`

## Kısıtlamalar

- Metin boş olabilir.

## İpucu

Tek cümlelik, çözümü vermeyen bir ipucu.

## Başlangıç Kodu

(cpp, java ve python kod blokları)
```

| Alan | Kural |
|---|---|
| `slug` | Klasör adıyla aynı. Üç dosyada da aynı. |
| `difficulty` | Sadece `kolay`, `orta` veya `zor`. Üç dosyada da aynı (İngilizce/Almanca dosyada da Türkçe yazılır). |
| `points` | Kolay 10–20, orta 25–35, zor 40+. Üç dosyada da aynı. |
| `topics` | Her dilde o dilin kelimeleriyle. Var olan konu adlarını kullan (ör. `Diziler`, `Metin`, `Dinamik Programlama`). |

**Başlık adları dile göre:**

| tr | en | de |
|---|---|---|
| Örnekler | Examples | Beispiele |
| Kısıtlamalar | Constraints | Einschränkungen |
| İpucu | Hint | Hinweis |
| Başlangıç Kodu | Starter Code | Startcode |

---

## 3. Başlangıç kodu

Üç dilde de **aynı metot adı** ve **aynı parametre sırası** olmalı. Sınıfın adı her zaman `Solution`.

```cpp
#include <string>

class Solution {
public:
  int countVowels(std::string text) {
    // Çözümünüzü buraya yazın
    return 0;
  }
};
```

```java
class Solution {
  public int countVowels(String text) {
    // Çözümünüzü buraya yazın
    return 0;
  }
}
```

```python
class Solution:
    def countVowels(self, text):
        # Çözümünüzü buraya yazın
        return 0
```

### Kullanılabilecek tipler

| Anlam | C++ | Java | Python | JSON'da örnek |
|---|---|---|---|---|
| tam sayı | `int` | `int` | `int` | `42` |
| büyük tam sayı | `long long` | `long` | `int` | `9000000000` |
| ondalıklı | `double` | `double` | `float` | `2.5` |
| doğru/yanlış | `bool` | `boolean` | `bool` | `true` |
| metin | `std::string` | `String` | `str` | `"abc"` |
| liste | `std::vector<int>` | `int[]` veya `List<Integer>` | `list` | `[1, 2, 3]` |
| metin listesi | `std::vector<std::string>` | `String[]` veya `List<String>` | `list` | `["a", "b"]` |
| iki boyutlu liste | `std::vector<std::vector<int>>` | `int[][]` | `list` | `[[1, 2], [3]]` |

### Kullanılamayacaklar

- ❌ Ağaç (`TreeNode`), bağlı liste (`ListNode`), `map`/`HashMap` parametre ya da dönüş tipi olarak
- ❌ `char` (yerine tek harfli `string` kullan)
- ❌ `void` döndüren metotlar (diziyi yerinde değiştiren sorular). Sonucu `return` ile döndürt.
- ❌ Birden fazla metot. Sadece bir tane çözüm metodu olsun.

---

## 4. Testler (testcases.json)

```json
{
  "cases": [
    { "id": "tc-01", "input": ["hello world"], "expectedOutput": 3, "isHidden": false },
    { "id": "tc-02", "input": [""], "expectedOutput": 0, "isHidden": true }
  ]
}
```

| Kural | Neden? |
|---|---|
| `input` her zaman bir **liste**dir: fonksiyonun argümanları sırayla. Tek parametre olsa bile `["hello"]` şeklinde. | Judge, listedeki her elemanı bir parametreye verir. |
| `id`'ler benzersiz olsun: `tc-01`, `tc-02`... | Sonuç ekranında hangi testin düştüğü id ile gösterilir. |
| **2–3 görünür** test (`isHidden: false`) | "Çalıştır" butonu bunları kullanır, kullanıcı ekranda görür. |
| **En az 2 gizli** test (`isHidden: true`) | Kullanıcı görünür testlere göre ezber kod yazmasın. |
| Gizli testlere **uç durumları** koy: boş liste, tek eleman, negatif sayılar, en büyük/en küçük değerler. | Yeni başlayanların en çok atladığı yerler bunlar. |
| `int` değerler **-2147483648 ile 2147483647** arasında olsun. Daha büyükse tipi `long` yap. | C++ ve Java'da `int` bu sınırda taşar. |
| Metinlerde **sadece İngilizce harfler** (ASCII) kullan. `ç, ğ, ı, ö, ş, ü` olmasın. | C++'ta Türkçe harfler 2 bayt; doğru çözüm C++'ta haksız yere yanlış alır. |
| Cevabı birden fazla olabilecek soru yazma (ör. "herhangi bir çözümü döndür"). Gerekirse "küçük indisi önce döndürün" gibi bir kural koy. | Judge çıktıyı birebir karşılaştırır. |

### Algoritma hızını ölçen büyük testler

Sorunun asıl öğrettiği şey hızlı bir algoritmaysa (ör. iç içe döngü yerine tek döngü), bir **büyük gizli test** ekle. Yavaş çözüm süreyi aşar ve `TIME_LIMIT` alır:

| Soru | Büyük test | Yavaş çözüm ne olur? |
|---|---|---|
| `maksimum-alt-dizi-toplami` | 100 000 elemanlı dizi | İç içe döngü (O(n²)) → TIME_LIMIT |
| `merdiven-cikma` | `n = 45` | Düz özyineleme (2ⁿ çağrı) → TIME_LIMIT |
| `gecerli-parantezler` | 200 000 karakter | "Bul ve sil" yöntemi → TIME_LIMIT |

Süre sınırları: C++ 1 sn, Java 2 sn, Python 3 sn (test başına). Büyük testleri elle yazma; küçük bir script ile üret ve beklenen çıktıyı resmi çözümle hesapla.

Bunun yavaş çözümleri gerçekten yakaladığını görmek için `judge/examples/<slug>/time_limit.py` gibi bir yavaş çözüm ekleyip `npm run judge:selftest` çalıştır.

---

## 5. Resmi çözümler (solutions/)

- Üç dilde de yaz: `solution.py`, `Solution.java`, `solution.cpp`.
- Başlangıç kodundaki imzayı **aynen** kullan.
- `import`/`#include` yazmana gerek yok: Java'da `java.util.*`, C++'ta tüm standart kütüphane, Python'da `typing` ve `collections` judge tarafından eklenir. Yazarsan da sorun olmaz.
- Okunaklı yaz; bu kod sitede "Çözümü göster" ile kullanıcılara gösterilecek.

---

## 6. Kontrol et

```bash
npm run judge:check -- sesli-harf-sayisi
```

Araç şunlara bakar:
- Üç metin dosyası var mı, `slug`/`difficulty`/`points` aynı mı?
- Başlangıç kodları judge'a uygun mu, üç dilde aynı imza mı?
- Her testte argüman sayısı ve tipleri doğru mu, `int` taşıyor mu?
- Görünür ve gizli test var mı, metinlerde Türkçe karakter var mı?
- Resmi çözümler bütün testleri geçiyor mu?

Docker yoksa çözümleri bu bilgisayarda çalıştırmak için: `npm run judge:check -- --local`. Bunun için Python, Java ve g++ kurulu olmalı. CodeBlocks'un eski g++'ı için ayrıca `JUDGE_CPP_STD=c++14` gerekiyor.

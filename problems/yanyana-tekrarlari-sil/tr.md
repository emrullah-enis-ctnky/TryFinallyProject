---
slug: yanyana-tekrarlari-sil
title: Yan Yana Tekrarları Sil
difficulty: orta
topics: [Yığın]
points: 25
---

## Problem

Bir metinde yan yana gelen aynı karakter çiftlerini kaldırın. Kaldırma sonrası komşu hale gelen karakterler de tekrar oluşturuyorsa onları da kaldırmaya devam edin.

## Örnekler

- `removeAdjacentDuplicates("abbaca")` → `"ca"`
- `removeAdjacentDuplicates("azxxzy")` → `"ay"`

## Kısıtlamalar

- 0 <= text.length <= 100000; metin küçük İngilizce harflerden oluşur.

## İpucu

İşlenmiş kısmın son karakteri, yeni karakterle eşitse ikisini de kaldırın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string removeAdjacentDuplicates(std::string text) { return ""; }
};
```

```java
class Solution {
  public String removeAdjacentDuplicates(String text) { return ""; }
}
```

```python
class Solution:
    def removeAdjacentDuplicates(self, text):
        return ""
```

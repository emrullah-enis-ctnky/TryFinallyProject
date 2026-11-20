---
slug: en-az-duzenleme
title: En Az Düzenleme
difficulty: zor
topics: [Dinamik Programlama 2D, Metin]
points: 45
---

## Problem

Bir yazım denetleyicisi `source` kelimesini `target` kelimesine dönüştürmek ister. Tek adımda bir harf ekleyebilir, silebilir veya değiştirebilir. `minimumEdits` metoduyla gereken en az adım sayısını bulun.

## Örnekler

- `minimumEdits("plane", "plans")` → `1`
- `minimumEdits("book", "back")` → `2`

## Kısıtlamalar

- `0 <= source.length, target.length <= 500`
- Metinler yalnızca küçük İngilizce harflerden oluşur.

## İpucu

İki önekin en iyi cevabı, son harflerin eşit olup olmadığına göre önceki hücrelerden türetilir.

## Başlangıç Kodu

```cpp
#include <string>
class Solution {
public:
  int minimumEdits(std::string source, std::string target) { return 0; }
};
```

```java
class Solution {
  public int minimumEdits(String source, String target) { return 0; }
}
```

```python
class Solution:
    def minimumEdits(self, source, target):
        return 0
```

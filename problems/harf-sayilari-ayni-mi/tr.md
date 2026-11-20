---
slug: harf-sayilari-ayni-mi
title: Harf Sayıları Aynı mı
difficulty: kolay
topics: [Hashleme, Metin]
points: 15
---

## Problem

Yalnızca küçük İngilizce harflerden oluşan iki metin verilir. Harflerin sayıları aynıysa `true`, değilse `false` döndüren `areAnagrams` metodunu yazın. Harflerin sırası önemli değildir.

## Örnekler

- `areAnagrams("listen", "silent")` → `true`
- `areAnagrams("stone", "notesx")` → `false`

## Kısıtlamalar

- `0 <= first.length, second.length <= 100000`
- Metinler yalnızca `a`–`z` harflerinden oluşur.

## İpucu

İlk metindeki harfleri sayıp ikinci metindeki harflerle bu sayımları karşılaştırın.

## Başlangıç Kodu

```cpp
#include <string>
class Solution {
public:
  bool areAnagrams(std::string first, std::string second) { return false; }
};
```

```java
class Solution {
  public boolean areAnagrams(String first, String second) { return false; }
}
```

```python
class Solution:
    def areAnagrams(self, first, second):
        return False
```

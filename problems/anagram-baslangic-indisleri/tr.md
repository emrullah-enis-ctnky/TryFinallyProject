---
slug: anagram-baslangic-indisleri
title: Anagram Başlangıç İndisleri
difficulty: orta
topics: [Metin, Kayan Pencere, Hashleme]
points: 30
---

## Problem

Küçük İngilizce harflerden oluşan `text` içinde, `pattern` ile aynı harf sayılarına sahip tüm kesintisiz parçaların başlangıç indislerini artan sırada döndürün.

## Örnekler

- `anagramStartIndices("cbaebabacd", "abc")` → `[0, 6]`
- `anagramStartIndices("abab", "ab")` → `[0, 1, 2]`

## Kısıtlamalar

- `0 <= text.length <= 100000`
- `1 <= pattern.length <= 1000`
- Metinler yalnızca `a` ile `z` arasındaki küçük İngilizce harflerden oluşur.

## İpucu

Sabit uzunluktaki pencereyi kaydırırken çıkan ve giren harfin sayılarını güncelleyin.

## Başlangıç Kodu

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> anagramStartIndices(std::string text, std::string pattern) { return {}; }
};
```

```java
class Solution {
  public int[] anagramStartIndices(String text, String pattern) { return new int[0]; }
}
```

```python
class Solution:
    def anagramStartIndices(self, text, pattern):
        return []
```

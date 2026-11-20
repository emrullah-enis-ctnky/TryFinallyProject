---
slug: en-uzun-ortak-alt-dizi
title: Ortak Alt Dizi Uzunluğu
difficulty: orta
topics: [Dinamik Programlama 2D]
points: 30
---

## Problem

İki cihaz kaydında sırayı bozmadan ortak olan en uzun karakter dizisinin uzunluğunu bulun. Karakterlerin bitişik olması gerekmez.

## Örnekler

- `longestCommonSubsequence("abcde", "ace")` → `3`
- `longestCommonSubsequence("abc", "def")` → `0`

## Kısıtlamalar

- 0 <= first.length, second.length <= 1000; yalnızca küçük İngilizce harfler.

## İpucu

Son karakterler eşleşirse önceki öneklerin cevabına bir ekleyin; eşleşmezse iki olasılığın büyüğünü alın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int longestCommonSubsequence(std::string first, std::string second) { return 0; }
};
```

```java
class Solution {
  public int longestCommonSubsequence(String first, String second) { return 0; }
}
```

```python
class Solution:
    def longestCommonSubsequence(self, first, second):
        return 0
```

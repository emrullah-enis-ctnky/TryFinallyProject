---
slug: ortak-baslangic
title: Ortak Başlangıç
difficulty: kolay
topics: [Metin]
points: 15
---

## Problem

Bir dosya arşivindeki adların ortak başlangıç bölümünü bulun. Ortak başlangıç yoksa boş metin döndürün.

## Örnekler

- `longestCommonPrefix(["planet", "plant", "plan"])` → `"plan"`
- `longestCommonPrefix(["red", "blue"])` → `""`

## Kısıtlamalar

- 1 <= words.length <= 1000; 0 <= words[i].length <= 1000; yalnızca küçük İngilizce harfler.

## İpucu

İlk adı kısaltırken diğer adlarla eşleşmeyi koruyun.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string longestCommonPrefix(std::vector<std::string>& words) { return ""; }
};
```

```java
class Solution {
  public String longestCommonPrefix(String[] words) { return ""; }
}
```

```python
class Solution:
    def longestCommonPrefix(self, words):
        return ""
```

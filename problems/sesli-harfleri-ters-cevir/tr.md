---
slug: sesli-harfleri-ters-cevir
title: Sesli Harfleri Ters Çevir
difficulty: orta
topics: [İki İşaretçi]
points: 25
---

## Problem

Bir metindeki sesli harflerin kendi aralarındaki sırasını tersine çevirin. Diğer karakterler aynı indislerde kalmalıdır.

## Örnekler

- `reverseVowels("education")` → `"odicatuen"`
- `reverseVowels("sky")` → `"sky"`

## Kısıtlamalar

- 0 <= text.length <= 100000; metin ASCII harflerinden oluşur.

## İpucu

İki işaretçiyi sesli harf bulana kadar ilerletip bu harfleri değiştirin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string reverseVowels(std::string text) { return ""; }
};
```

```java
class Solution {
  public String reverseVowels(String text) { return ""; }
}
```

```python
class Solution:
    def reverseVowels(self, text):
        return ""
```

---
slug: metinleri-sirayla-birlestir
title: Metinleri Sırayla Birleştir
difficulty: kolay
topics: [İki İşaretçi]
points: 15
---

## Problem

İki kısa kayıt metnini sırayla karakter karakter birleştirin. Bir metin önce biterse diğerinin kalan kısmını sona ekleyin.

## Örnekler

- `mergeAlternately("ab", "XYZ")` → `"aXbYZ"`
- `mergeAlternately("cat", "go")` → `"cgaot"`

## Kısıtlamalar

- 0 <= first.length, second.length <= 1000; metinler ASCII harflerinden oluşur.

## İpucu

İki indisi ayrı izleyerek kalan karakterleri kaybetmeyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string mergeAlternately(std::string first, std::string second) { return ""; }
};
```

```java
class Solution {
  public String mergeAlternately(String first, String second) { return ""; }
}
```

```python
class Solution:
    def mergeAlternately(self, first, second):
        return ""
```

---
slug: en-kisa-kapsayan-metin
title: En Kısa Kapsayan Metin
difficulty: zor
topics: [Kayan Pencere]
points: 40
---

## Problem

`text` içinde `required` metnindeki her harfi gereken sayıda içeren en kısa parçayı bulun. Birden fazla en kısa parça varsa en erken başlayanını döndürün. Böyle bir parça yoksa boş metin döndürün.

## Örnekler

- `minimumCover("ADOBECODEBANC", "ABC")` → `"BANC"`
- `minimumCover("a", "aa")` → `""`

## Kısıtlamalar

- 0 <= text.length <= 100000; 0 <= required.length <= 1000; ASCII karakterleri kullanılır.

## İpucu

Sağ ucu ilerleterek gerekli karakterleri toplayın; pencere geçerli olunca sol ucunu daraltın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string minimumCover(std::string text, std::string required) { return ""; }
};
```

```java
class Solution {
  public String minimumCover(String text, String required) { return ""; }
}
```

```python
class Solution:
    def minimumCover(self, text, required):
        return ""
```

---
slug: en-uzun-tekrarsiz-parca
title: En Uzun Tekrarsız Parça
difficulty: orta
topics: [Kayan Pencere, Metin]
points: 25
---

## Problem

Yalnızca küçük İngilizce harflerden oluşan bir metin verilir. Aynı harfin iki kez geçmediği en uzun ardışık parçanın uzunluğunu döndüren `longestUniqueLength` metodunu yazın.

## Örnekler

- `longestUniqueLength("abcabcbb")` → `3`
- `longestUniqueLength("pwwkew")` → `3`

İlk örnekte en uzun tekrarsız parçalar `abc`, `bca` ve `cab` olup uzunlukları `3`'tür.

## Kısıtlamalar

- `0 <= text.length <= 200000`
- Metin yalnızca `a`–`z` harflerinden oluşur.

## İpucu

Sağ ucu ilerletirken pencere içindeki tekrar eden harfi dışarıda bırakacak şekilde sol ucu taşıyın.

## Başlangıç Kodu

```cpp
#include <string>
class Solution {
public:
  int longestUniqueLength(std::string text) { return 0; }
};
```

```java
class Solution {
  public int longestUniqueLength(String text) { return 0; }
}
```

```python
class Solution:
    def longestUniqueLength(self, text):
        return 0
```

---
slug: k-cesitli-en-uzun-parca
title: K Çeşitli Harf Parçası
difficulty: orta
topics: [Metin, Kayan Pencere, Hashleme]
points: 30
---

## Problem

Küçük İngilizce harflerden oluşan `text` içinde en fazla `k` farklı harf içeren en uzun kesintisiz parçanın uzunluğunu döndüren `longestLimitedAlphabetRun` metodunu yazın. `k` sıfırsa cevap sıfırdır.

## Örnekler

- `longestLimitedAlphabetRun("aabac", 2)` → `4`
- `longestLimitedAlphabetRun("abc", 1)` → `1`

## Kısıtlamalar

- `0 <= text.length <= 100000`
- `text` yalnızca `a` ile `z` arasındaki küçük İngilizce harflerden oluşur.
- `0 <= k <= 26`

## İpucu

Sağ ucu ilerletirken farklı harf sayısı sınırı aşarsa sol ucu daraltın.

## Başlangıç Kodu

```cpp
#include <string>
class Solution {
public:
  int longestLimitedAlphabetRun(std::string text, int k) { return 0; }
};
```

```java
class Solution {
  public int longestLimitedAlphabetRun(String text, int k) { return 0; }
}
```

```python
class Solution:
    def longestLimitedAlphabetRun(self, text, k):
        return 0
```

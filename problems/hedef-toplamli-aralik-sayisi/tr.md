---
slug: hedef-toplamli-aralik-sayisi
title: Hedef Toplamlı Aralık Sayısı
difficulty: orta
topics: [Önek Toplamı, Hashleme]
points: 30
---

## Problem

Bir cihazın art arda ölçümleri `values` dizisindedir. Toplamı tam olarak `target` olan kesintisiz aralıkların sayısını `countTargetRanges` ile bulun.

## Örnekler

- `countTargetRanges([1, 1, 1], 2)` → `2`
- `countTargetRanges([1, -1, 0], 0)` → `3`

## Kısıtlamalar

- `1 <= values.length <= 100000`
- `-1000 <= values[i], target <= 1000`
- Cevap 64 bit işaretli tam sayı aralığındadır.

## İpucu

Geçerli aralıklar, iki önek toplamının farkı hedefe eşit olduğunda oluşur.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  long long countTargetRanges(std::vector<int>& values, int target) { return 0; }
};
```

```java
class Solution {
  public long countTargetRanges(int[] values, int target) { return 0; }
}
```

```python
class Solution:
    def countTargetRanges(self, values, target):
        return 0
```

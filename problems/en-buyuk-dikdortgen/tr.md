---
slug: en-buyuk-dikdortgen
title: En Büyük Dikdörtgen Alanı
difficulty: zor
topics: [Yığın, Diziler]
points: 45
---

## Problem

Yan yana histogram çubuklarının yükseklikleri `heights` dizisinde verilir; her çubuğun genişliği birdir. Birbirine bitişik çubukların altında kalabilen en büyük dikdörtgen alanını `largestHistogramArea` ile bulun.

## Örnekler

- `largestHistogramArea([2, 1, 5, 6, 2, 3])` → `10`
- `largestHistogramArea([2, 4])` → `4`

## Kısıtlamalar

- `0 <= heights.length <= 100000`
- `0 <= heights[i] <= 1000000000`
- Cevap 64 bit işaretli tam sayı aralığındadır.

## İpucu

Bir çubuk için daha kısa bir çubuk görüldüğünde, yığında bekleyen çubukların genişliğini hesaplayabilirsiniz.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  long long largestHistogramArea(std::vector<int>& heights) { return 0; }
};
```

```java
class Solution {
  public long largestHistogramArea(int[] heights) { return 0; }
}
```

```python
class Solution:
    def largestHistogramArea(self, heights):
        return 0
```

---
slug: tek-tepe-indisi
title: Tek Tepe İndisi
difficulty: orta
topics: [İkili Arama, Diziler]
points: 30
---

## Problem

Bir parkur yüksekliği `heights` dizisinde verilir. Değerler önce kesin artar, tek bir zirveye ulaşır ve sonra kesin azalır. Zirvenin indisini `peakIndex` ile bulun.

## Örnekler

- `peakIndex([1, 3, 5, 4, 2])` → `2`
- `peakIndex([7])` → `0`

## Kısıtlamalar

- `1 <= heights.length <= 100000`
- Uzunluğu birden büyük dizide komşu değerler farklıdır ve tek bir zirve vardır.

## İpucu

Orta noktadaki eğimin yönü, zirvenin hangi tarafta olduğunu gösterir.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int peakIndex(std::vector<int>& heights) { return 0; }
};
```

```java
class Solution {
  public int peakIndex(int[] heights) { return 0; }
}
```

```python
class Solution:
    def peakIndex(self, heights):
        return 0
```

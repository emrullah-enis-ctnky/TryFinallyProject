---
slug: aralik-secimi
title: Çakışmayan Aralıkları Seç
difficulty: orta
topics: [Açgözlü]
points: 25
---

## Problem

Bir takvimde en fazla sayıda çakışmayan görevi seçin. Her aralık `[start, end]` biçimindedir; bir sonraki görev önceki görev bitişinde başlayabilir.

## Örnekler

- `maxNonOverlappingIntervals([[1, 3], [2, 4], [3, 5], [6, 7]])` → `3`
- `maxNonOverlappingIntervals([[1, 5], [2, 3]])` → `1`

## Kısıtlamalar

- 0 <= intervals.length <= 100000; start < end; uç noktalar int aralığındadır.

## İpucu

Önce en erken biten görevi seçmek daha fazla yer bırakır.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maxNonOverlappingIntervals(std::vector<std::vector<int>>& intervals) { return 0; }
};
```

```java
class Solution {
  public int maxNonOverlappingIntervals(int[][] intervals) { return 0; }
}
```

```python
class Solution:
    def maxNonOverlappingIntervals(self, intervals):
        return 0
```

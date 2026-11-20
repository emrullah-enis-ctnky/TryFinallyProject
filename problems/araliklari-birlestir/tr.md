---
slug: araliklari-birlestir
title: Çakışan Aralıkları Birleştir
difficulty: orta
topics: [Aralıklar, Sıralama]
points: 25
---

## Problem

Her satırı `[başlangıç, bitiş]` olan aralıklar verilir. Kesişen veya uç noktası ortak olan aralıkları birleştirip, başlangıçlarına göre sıralı aralık listesini döndüren `mergeIntervals` metodunu yazın.

## Örnekler

- `mergeIntervals([[1, 3], [2, 6], [8, 10]])` → `[[1, 6], [8, 10]]`
- `mergeIntervals([[1, 2], [2, 4]])` → `[[1, 4]]`

İlk örnekte ilk iki aralık kesişir; üçüncü aralık ayrı kalır.

## Kısıtlamalar

- `0 <= intervals.length <= 10000`
- Her aralıkta `-10000 <= start <= end <= 10000`
- Çıktı aralıklarını başlangıç değerine göre artan sırada döndürün.

## İpucu

Aralıkları başlangıçlarına göre sıralayın ve son birleştirilmiş aralığın bitişini karşılaştırın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> mergeIntervals(std::vector<std::vector<int>>& intervals) { return {}; }
};
```

```java
class Solution {
  public int[][] mergeIntervals(int[][] intervals) { return new int[][]{}; }
}
```

```python
class Solution:
    def mergeIntervals(self, intervals):
        return []
```

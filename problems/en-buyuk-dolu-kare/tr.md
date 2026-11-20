---
slug: en-buyuk-dolu-kare
title: En Büyük Dolu Kare
difficulty: orta
topics: [Dinamik Programlama 2D, Diziler]
points: 30
---

## Problem

Bir haritadaki `1` değerli hücreler kullanılabilir alanları gösteren ikili bir ızgara `grid` verilir. Tamamen kullanılabilir hücrelerden oluşan en büyük kare bölgenin alanını `largestFilledSquare` ile bulun.

## Örnekler

- `largestFilledSquare([[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]])` → `4`
- `largestFilledSquare([[1, 1], [1, 1]])` → `4`

## Kısıtlamalar

- `0 <= grid.length, grid[i].length <= 200`
- Izgara dikdörtgendir ve değerler `0` veya `1`'dir.

## İpucu

Bir hücrede bitebilen karenin kenarı, sol, üst ve çapraz üst-sol komşuların en küçüğüne bağlıdır.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int largestFilledSquare(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public int largestFilledSquare(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def largestFilledSquare(self, grid):
        return 0
```

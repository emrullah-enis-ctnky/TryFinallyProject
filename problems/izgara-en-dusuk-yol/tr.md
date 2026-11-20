---
slug: izgara-en-dusuk-yol
title: En Düşük Izgara Yolu
difficulty: orta
topics: [Dinamik Programlama 2D, Diziler]
points: 30
---

## Problem

Negatif olmayan maliyetlerden oluşan dikdörtgen bir ızgara verilir. Sol üst hücreden sağ alt hücreye yalnızca sağa veya aşağı ilerleyerek ulaşılabilir. Başlangıç ve bitiş hücreleri dahil, izlenen yolun en düşük toplam maliyetini döndüren `minimumPathSum` metodunu yazın.

## Örnekler

- `minimumPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])` → `7`
- `minimumPathSum([[1, 2], [1, 1]])` → `3`

İlk örnekte en düşük maliyetli yolun maliyeti `1 + 3 + 1 + 1 + 1 = 7`'dir.

## Kısıtlamalar

- `1 <= grid.length, grid[0].length <= 100`
- `grid` dikdörtgendir ve en fazla `10000` hücre içerir.
- `0 <= grid[row][column] <= 10000`

## İpucu

Her hücreye gelmenin en düşük maliyeti, üstten veya soldan gelen iki olasılığın küçüğüne bağlıdır.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int minimumPathSum(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public int minimumPathSum(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def minimumPathSum(self, grid):
        return 0
```

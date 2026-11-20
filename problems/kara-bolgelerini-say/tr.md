---
slug: kara-bolgelerini-say
title: Kara Bölgelerini Say
difficulty: orta
topics: [Graflar, Kuyruk & Deque]
points: 30
---

## Problem

`0` (su) ve `1` (kara) hücrelerinden oluşan dikdörtgen bir harita verilir. Yalnızca yatay veya dikey komşu kara hücreleri aynı bölgeye aittir; çapraz komşuluk sayılmaz. Kara bölgesi sayısını döndüren `countLandRegions` metodunu yazın.

## Örnekler

- `countLandRegions([[1, 1, 0], [0, 1, 0], [1, 0, 1]])` → `3`
- `countLandRegions([[1, 1], [1, 1]])` → `1`

## Kısıtlamalar

- `0 <= grid.length <= 100`
- Her satır aynı uzunluktadır ve en fazla `100` hücre içerir.
- Hücre değerleri yalnızca `0` veya `1`'dir.

## İpucu

Henüz ziyaret edilmemiş bir kara hücresi bulduğunuzda, kuyruk kullanarak ona bağlı bütün hücreleri gezip işaretleyin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int countLandRegions(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public int countLandRegions(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def countLandRegions(self, grid):
        return 0
```

---
slug: engelli-izgara-yollari
title: Engelli Izgarada Yol Sayısı
difficulty: orta
topics: [Dinamik Programlama 2D, Diziler]
points: 30
---

## Problem

`0` açık, `1` engelli hücreyi gösteren dikdörtgen bir ızgara verilir. Sol üstten başlayıp yalnızca sağa veya aşağı hareket ederek sağ alta ulaşan yolların sayısını döndüren `countGridPaths` metodunu yazın. Başlangıç veya bitiş hücresi engelliyse yol yoktur.

## Örnekler

- `countGridPaths([[0, 0, 0], [0, 1, 0], [0, 0, 0]])` → `2`
- `countGridPaths([[0, 1], [0, 0]])` → `1`

## Kısıtlamalar

- `1 <= grid.length, grid[0].length <= 20`
- Izgara dikdörtgendir ve en az bir satır ile sütun içerir.
- Hücre değerleri `0` veya `1`'dir.
- Cevap işaretli 64 bit tam sayı aralığındadır.

## İpucu

Her hücreye ulaşma yolları, yukarıdan ve soldan gelen yolların toplamıdır; engelli hücrelerin sayısı sıfırdır.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  long long countGridPaths(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public long countGridPaths(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def countGridPaths(self, grid):
        return 0
```

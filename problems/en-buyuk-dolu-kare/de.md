---
slug: en-buyuk-dolu-kare
title: Größtes Volles Quadrat
difficulty: orta
topics: [Dynamische Programmierung 2D, Arrays]
points: 30
---

## Problem

Gegeben ist ein binäres Raster `grid`, in dem `1` nutzbares Land markiert. Ermittle mit `largestFilledSquare` die Fläche der größten quadratischen Region, die vollständig aus nutzbaren Feldern besteht.

## Beispiele

- `largestFilledSquare([[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]])` → `4`
- `largestFilledSquare([[1, 1], [1, 1]])` → `4`

## Einschränkungen

- `0 <= grid.length, grid[i].length <= 200`
- Das Raster ist rechteckig und enthält nur `0` oder `1`.

## Hinweis

Das größte Quadrat an einer Zelle hängt vom kleinsten Ergebnis ihrer linken, oberen und diagonal oberen Nachbarn ab.

## Startcode

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

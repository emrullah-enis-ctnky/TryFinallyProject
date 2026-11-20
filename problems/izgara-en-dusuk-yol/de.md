---
slug: izgara-en-dusuk-yol
title: Kleinste Gitterpfadsumme
difficulty: orta
topics: [Dynamische Programmierung 2D, Arrays]
points: 30
---

## Problem

Gegeben ist ein rechteckiges Raster mit nichtnegativen Kosten. Vom Feld oben links darfst du dich nur nach rechts oder nach unten zum Feld unten rechts bewegen. Schreibe `minimumPathSum`, sodass die kleinste Pfadsumme einschließlich Start- und Zielfeld zurückgegeben wird.

## Beispiele

- `minimumPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])` → `7`
- `minimumPathSum([[1, 2], [1, 1]])` → `3`

Im ersten Beispiel hat ein Weg mit minimalen Kosten die Summe `1 + 3 + 1 + 1 + 1 = 7`.

## Einschränkungen

- `1 <= grid.length, grid[0].length <= 100`
- `grid` ist rechteckig und enthält höchstens `10000` Felder.
- `0 <= grid[row][column] <= 10000`

## Hinweis

Die minimalen Kosten für ein Feld hängen vom kleineren Wert von oben oder links ab.

## Startcode

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

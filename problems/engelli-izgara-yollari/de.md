---
slug: engelli-izgara-yollari
title: Wege durch Hindernisgitter
difficulty: orta
topics: [Dynamische Programmierung 2D, Arrays]
points: 30
---

## Problem

Gegeben ist ein rechteckiges Raster, in dem `0` ein freies und `1` ein blockiertes Feld bedeutet. Vom Feld oben links darfst du dich nur nach rechts oder nach unten bewegen. Schreibe `countGridPaths`, sodass die Anzahl der Wege zum Feld unten rechts zurückgegeben wird. Ist ein Endpunkt blockiert, gibt es keinen Weg.

## Beispiele

- `countGridPaths([[0, 0, 0], [0, 1, 0], [0, 0, 0]])` → `2`
- `countGridPaths([[0, 1], [0, 0]])` → `1`

## Einschränkungen

- `1 <= grid.length, grid[0].length <= 20`
- Das Raster ist rechteckig und enthält mindestens eine Zeile und eine Spalte.
- Feldwerte sind `0` oder `1`.
- Die Antwort passt in eine vorzeichenbehaftete 64-Bit-Ganzzahl.

## Hinweis

Die Anzahl der Wege zu einem Feld ist die Summe der Wege von oben und links; blockierte Felder haben null Wege.

## Startcode

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

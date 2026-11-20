---
slug: kara-bolgelerini-say
title: Landgebiete zählen
difficulty: orta
topics: [Graphen, Warteschlange & Deque]
points: 30
---

## Problem

Gegeben ist eine rechteckige Karte aus `0`- (Wasser) und `1`-Feldern (Land). Landfelder gehören nur dann zum selben Gebiet, wenn sie horizontal oder vertikal verbunden sind; diagonaler Kontakt zählt nicht. Schreibe `countLandRegions`, sodass die Anzahl der Landgebiete zurückgegeben wird.

## Beispiele

- `countLandRegions([[1, 1, 0], [0, 1, 0], [1, 0, 1]])` → `3`
- `countLandRegions([[1, 1], [1, 1]])` → `1`

## Einschränkungen

- `0 <= grid.length <= 100`
- Alle Zeilen sind gleich lang und enthalten höchstens `100` Felder.
- Feldwerte sind entweder `0` oder `1`.

## Hinweis

Wenn du ein noch nicht besuchtes Landfeld findest, besuche mit einer Warteschlange alle damit verbundenen Felder und markiere sie.

## Startcode

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

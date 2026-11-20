---
slug: birlerden-kare-sayisi
title: Quadrate Aus Einsen Zählen
difficulty: orta
topics: [Dynamische Programmierung 2D]
points: 30
---

## Problem

Zähle alle quadratischen Bereiche in einer Karte aus Nullen und Einsen. Jedes Quadrat beliebiger Größe aus Einsen zählt.

## Beispiele

- `countOneSquares([[1, 0, 1], [1, 1, 1], [1, 1, 1]])` → `10`
- `countOneSquares([[0, 0], [0, 0]])` → `0`

## Einschränkungen

- 0 <= Zeilen, Spalten <= 100; alle Zeilen sind gleich lang; Zellen sind 0 oder 1.

## Hinweis

Die Anzahl der an einer Zelle endenden Quadrate entspricht der Seitenlänge des größten dort endenden Quadrats.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int countOneSquares(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public int countOneSquares(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def countOneSquares(self, grid):
        return 0
```

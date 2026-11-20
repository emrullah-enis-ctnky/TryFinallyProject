---
slug: izgarada-sozcuk-bul
title: Wort Im Gitter Finden
difficulty: zor
topics: [Rückverfolgung, Graphen, Zeichenfolgen]
points: 45
---

## Problem

Gegeben sind ein Raster `grid` aus Großbuchstaben und ein `word`. Bestimme, ob sich das Wort durch Bewegungen zwischen waagerecht oder senkrecht benachbarten Feldern bilden lässt. Ein Feld darf pro Wort höchstens einmal verwendet werden. Gib bei Möglichkeit `true`, sonst `false` zurück.

## Beispiele

- `existsInGrid(["ABCE", "SFCS", "ADEE"], "ABCCED")` → `true`
- `existsInGrid(["ABCE", "SFCS", "ADEE"], "ABCB")` → `false`

## Einschränkungen

- `1 <= grid.length, grid[i].length <= 6`
- Das Raster ist rechteckig und enthält nur Buchstaben von `A` bis `Z`.
- `1 <= word.length <= 15`; das Wort enthält nur Buchstaben von `A` bis `Z`.

## Hinweis

Probiere nach der Wahl eines Feldes die Nachbarn aus und mache einen erfolglosen Pfad rückgängig.

## Startcode

```cpp
#include <string>
#include <vector>
class Solution {
public:
  bool existsInGrid(std::vector<std::string>& grid, std::string word) { return false; }
};
```

```java
class Solution {
  public boolean existsInGrid(String[] grid, String word) { return false; }
}
```

```python
class Solution:
    def existsInGrid(self, grid, word):
        return False
```

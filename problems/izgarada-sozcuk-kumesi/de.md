---
slug: izgarada-sozcuk-kumesi
title: Wörter Im Gitter Finden
difficulty: zor
topics: [Präfixbaum, Rückverfolgung, Graphen]
points: 50
---

## Problem

Gegeben sind ein Raster `grid` aus Großbuchstaben und eine Liste verschiedener Wörter `words`. Ein Wort lässt sich bilden, indem waagerecht oder senkrecht benachbarte Felder besucht werden; jedes Feld darf höchstens einmal verwendet werden. Gib mit `findGridWords` die gefundenen Wörter alphabetisch sortiert zurück.

## Beispiele

- `findGridWords(["OATH", "PEAS", "RAIN"], ["OATH", "PEA", "EAT", "RAIN"])` → `["EAT", "OATH", "PEA", "RAIN"]`
- `findGridWords(["AB", "CD"], ["AB", "ACDB", "AAAA"])` → `["AB", "ACDB"]`

## Einschränkungen

- `1 <= grid.length, grid[i].length <= 6`
- Raster und Wörter enthalten nur Buchstaben von `A` bis `Z`.
- `0 <= words.length <= 1000`; Wörter sind verschieden und haben Längen von `1` bis `8`.

## Hinweis

Teile gemeinsame Präfixe des Wörterbuchs in einem Präfixbaum und gehe bei einem erfolglosen Suchzweig zurück.

## Startcode

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::string> findGridWords(std::vector<std::string>& grid, std::vector<std::string>& words) { return {}; }
};
```

```java
class Solution {
  public String[] findGridWords(String[] grid, String[] words) { return new String[0]; }
}
```

```python
class Solution:
    def findGridWords(self, grid, words):
        return []
```

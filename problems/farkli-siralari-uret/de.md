---
slug: farkli-siralari-uret
title: Aufgabenreihenfolgen Erzeugen
difficulty: orta
topics: [Rückverfolgung, Arrays]
points: 30
---

## Problem

Für eine Planung sind verschiedene Aufgabennummern gegeben. Gib mit `allTaskOrders` alle möglichen Reihenfolgen der Aufgaben in numerischer lexikografischer Ordnung zurück.

## Beispiele

- `allTaskOrders([1, 2, 3])` → `[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]`
- `allTaskOrders([4])` → `[[4]]`

## Einschränkungen

- `1 <= tasks.length <= 8`
- Alle Werte in `tasks` sind verschieden.

## Hinweis

Füge bei jedem Schritt eine noch nicht gewählte Aufgabe hinzu und speichere fertige Reihenfolgen.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> allTaskOrders(std::vector<int>& tasks) { return {}; }
};
```

```java
class Solution {
  public int[][] allTaskOrders(int[] tasks) { return new int[0][0]; }
}
```

```python
class Solution:
    def allTaskOrders(self, tasks):
        return []
```

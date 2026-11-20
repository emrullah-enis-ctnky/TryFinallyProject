---
slug: en-kisa-ag-yolu
title: Kürzester Weg Im Netzwerk
difficulty: orta
topics: [Graphen, Warteschlange & Deque]
points: 30
---

## Problem

Gegeben sind `n` Stationen, die durch Einwegkabel in der Form `[from, to]` verbunden sind. Schreibe `shortestRouteLength`, das die kleinste Anzahl benötigter Kabel von `start` nach `destination` zurückgibt. Ist das Ziel unerreichbar, gib `-1` zurück.

## Beispiele

- `shortestRouteLength(5, [[0, 1], [1, 3], [0, 2], [2, 3]], 0, 3)` → `2`
- `shortestRouteLength(3, [[0, 1]], 0, 2)` → `-1`

## Einschränkungen

- `1 <= n <= 500`
- `0 <= edges.length <= 10000`
- Jede Kante hat die Form `[from, to]`, mit Indizes von `0` bis `n - 1`.

## Hinweis

Wenn du Stationen schichtweise besuchst, findest du den kürzesten Weg bei der ersten Ankunft.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int shortestRouteLength(int n, std::vector<std::vector<int>>& edges, int start, int destination) { return -1; }
};
```

```java
class Solution {
  public int shortestRouteLength(int n, int[][] edges, int start, int destination) { return -1; }
}
```

```python
class Solution:
    def shortestRouteLength(self, n, edges, start, destination):
        return -1
```

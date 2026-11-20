---
slug: graf-yolu-var-mi
title: Gibt Es Einen Graphpfad
difficulty: orta
topics: [Graphen]
points: 25
---

## Problem

Bestimme in einem ungerichteten Netz mit Knoten von `0` bis `n-1`, ob zwei Knoten durch einen Pfad verbunden sind. Jede Kante ist `[u, v]`.

## Beispiele

- `hasPath(6, [[0,1],[1,2],[3,4]], 0, 2)` → `true`
- `hasPath(4, [[0,1],[2,3]], 0, 3)` → `false`

## Einschränkungen

- 1 <= n <= 100000; Kanten und Quell-/Zielknoten sind gültig.

## Hinweis

Beginne an einem Knoten und besuche seine Nachbarn nacheinander.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool hasPath(int n, std::vector<std::vector<int>>& edges, int source, int destination) { return False; }
};
```

```java
class Solution {
  public boolean hasPath(int n, int[][] edges, int source, int destination) { return False; }
}
```

```python
class Solution:
    def hasPath(self, n, edges, source, destination):
        return False
```

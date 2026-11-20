---
slug: ikili-renklenebilir-mi
title: Ist Der Graph Bipartit
difficulty: orta
topics: [Graphen]
points: 30
---

## Problem

Bestimme, ob die Knoten eines ungerichteten Graphen in zwei Gruppen aufgeteilt werden können, sodass Nachbarn in verschiedenen Gruppen liegen. `graph[i]` listet die Nachbarn von Knoten `i`.

## Beispiele

- `isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]])` → `true`
- `isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]])` → `false`

## Einschränkungen

- 1 <= graph.length <= 1000; Kanten sind ungerichtet und es gibt keine Schleifen.

## Hinweis

Färbe in jeder zusammenhängenden Komponente Nachbarn jeweils mit der Gegenfarbe.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isBipartite(std::vector<std::vector<int>>& graph) { return False; }
};
```

```java
class Solution {
  public boolean isBipartite(int[][] graph) { return False; }
}
```

```python
class Solution:
    def isBipartite(self, graph):
        return False
```

---
slug: en-ucuz-kablo-agaci
title: Günstigstes Verbindungsnetz
difficulty: zor
topics: [Graphen, Greedy-Algorithmus, Sortieren]
points: 45
---

## Problem

Kabelverbindungen zwischen `n` Stationen sind als `[u, v, cost]` gegeben. Die Verbindungen sind ungerichtet. Ermittle mit `minimumNetworkCost` die geringsten Gesamtkosten, sodass jede Station von jeder anderen erreichbar ist. Ist das unmöglich, gib `-1` zurück.

## Beispiele

- `minimumNetworkCost(4, [[0, 1, 3], [1, 2, 2], [2, 3, 4], [0, 3, 10]])` → `9`
- `minimumNetworkCost(3, [[0, 1, 5]])` → `-1`

## Einschränkungen

- `1 <= n <= 1000`
- `0 <= edges.length <= 10000`
- Jede Verbindung ist `[u, v, cost]`, mit `0 <= u, v < n` und `-1000000 <= cost <= 1000000`.

## Hinweis

Betrachte Verbindungen von günstig nach teuer und verbinde nur noch getrennte Komponenten.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  long long minimumNetworkCost(int n, std::vector<std::vector<int>>& edges) { return -1; }
};
```

```java
class Solution {
  public long minimumNetworkCost(int n, int[][] edges) { return -1; }
}
```

```python
class Solution:
    def minimumNetworkCost(self, n, edges):
        return -1
```

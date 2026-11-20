---
slug: en-kisa-istasyon-mesafeleri
title: Kürzeste Stationsabstände
difficulty: zor
topics: [Graphen, Prioritätswarteschlange]
points: 45
---

## Problem

Zweirichtungsstraßen zwischen `n` Stationen sind als `[a, b, time]` gegeben. Gib mit `shortestStationDistances` die kürzeste Reisezeit von `source` zu jeder Station zurück. Verwende `-1` für unerreichbare Stationen.

## Beispiele

- `shortestStationDistances(4, [[0, 1, 4], [0, 2, 1], [2, 1, 2], [1, 3, 1]], 0)` → `[0, 3, 1, 4]`
- `shortestStationDistances(3, [[0, 1, 5]], 0)` → `[0, 5, -1]`

## Einschränkungen

- `1 <= n <= 500`
- `0 <= edges.length <= 10000`
- Jede Straße ist `[a, b, time]`, mit `0 <= a, b < n` und `0 <= time <= 1000000`.
- Kürzeste Entfernungen passen in eine vorzeichenbehaftete 32-Bit-Ganzzahl.

## Hinweis

Wähle die Station mit der bisher kürzesten bekannten Reisezeit und aktualisiere die Schätzungen ihrer Nachbarn.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> shortestStationDistances(int n, std::vector<std::vector<int>>& edges, int source) { return {}; }
};
```

```java
class Solution {
  public int[] shortestStationDistances(int n, int[][] edges, int source) { return new int[0]; }
}
```

```python
class Solution:
    def shortestStationDistances(self, n, edges, source):
        return []
```

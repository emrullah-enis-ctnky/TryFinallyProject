---
slug: en-kisa-istasyon-mesafeleri
title: Shortest Station Distances
difficulty: zor
topics: [Graphs, Priority Queue]
points: 45
---

## Problem

Two-way roads between `n` stations are given as `[a, b, time]`. Write `shortestStationDistances` to return the shortest travel time from `source` to every station. Use `-1` for an unreachable station.

## Examples

- `shortestStationDistances(4, [[0, 1, 4], [0, 2, 1], [2, 1, 2], [1, 3, 1]], 0)` → `[0, 3, 1, 4]`
- `shortestStationDistances(3, [[0, 1, 5]], 0)` → `[0, 5, -1]`

## Constraints

- `1 <= n <= 500`
- `0 <= edges.length <= 10000`
- Each road is `[a, b, time]`, with `0 <= a, b < n` and `0 <= time <= 1000000`.
- Shortest distances fit a signed 32-bit integer.

## Hint

Choose the station with the lowest known travel time and update estimates for its neighbors.

## Starter Code

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

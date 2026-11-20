---
slug: en-kisa-ag-yolu
title: Shortest Route In Network
difficulty: orta
topics: [Graphs, Queue & Deque]
points: 30
---

## Problem

You are given `n` stations connected by one-way cables represented as `[from, to]`. Write `shortestRouteLength` to return the fewest cables needed to travel from station `start` to station `destination`. Return `-1` if the destination cannot be reached.

## Examples

- `shortestRouteLength(5, [[0, 1], [1, 3], [0, 2], [2, 3]], 0, 3)` → `2`
- `shortestRouteLength(3, [[0, 1]], 0, 2)` → `-1`

## Constraints

- `1 <= n <= 500`
- `0 <= edges.length <= 10000`
- Each edge is `[from, to]`, with indices from `0` to `n - 1`.

## Hint

Visiting stations one layer at a time finds the shortest route on first arrival.

## Starter Code

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

---
slug: en-ucuz-kablo-agaci
title: Lowest Cost Network
difficulty: zor
topics: [Graphs, Greedy, Sorting]
points: 45
---

## Problem

Cables connecting `n` stations are given as `[u, v, cost]`. Connections are undirected. Write `minimumNetworkCost` to find the lowest total cost that makes every station reachable from every other station. Return `-1` if that is impossible.

## Examples

- `minimumNetworkCost(4, [[0, 1, 3], [1, 2, 2], [2, 3, 4], [0, 3, 10]])` → `9`
- `minimumNetworkCost(3, [[0, 1, 5]])` → `-1`

## Constraints

- `1 <= n <= 1000`
- `0 <= edges.length <= 10000`
- Each connection is `[u, v, cost]`, with `0 <= u, v < n` and `-1000000 <= cost <= 1000000`.

## Hint

Consider connections from cheapest to most expensive, joining only components that are not connected yet.

## Starter Code

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

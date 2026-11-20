---
slug: ag-baglantilarini-duzenle
title: Reconnect The Network
difficulty: orta
topics: [Graphs, Greedy]
points: 30
---

## Problem

You are given `n` computers and undirected cables `[a, b]`. You may unplug a cable and reconnect it between two separate components. Write `minimumCableMoves` to find the fewest moves needed to connect every computer. Return `-1` if there are not enough cables.

## Examples

- `minimumCableMoves(4, [[0, 1], [0, 2], [1, 2]])` → `1`
- `minimumCableMoves(6, [[0, 1], [0, 2], [0, 3], [1, 2]])` → `-1`

## Constraints

- `1 <= n <= 1000`
- `0 <= edges.length <= 10000`
- Each cable is `[a, b]`, with `0 <= a, b < n`.

## Hint

Count the connected components first; each new connection joins two components.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int minimumCableMoves(int n, std::vector<std::vector<int>>& edges) { return 0; }
};
```

```java
class Solution {
  public int minimumCableMoves(int n, int[][] edges) { return 0; }
}
```

```python
class Solution:
    def minimumCableMoves(self, n, edges):
        return 0
```

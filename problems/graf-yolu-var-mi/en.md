---
slug: graf-yolu-var-mi
title: Graph Path Exists
difficulty: orta
topics: [Graphs]
points: 25
---

## Problem

In an undirected network with nodes `0` through `n-1`, determine whether a path connects two nodes. Each edge is `[u, v]`.

## Examples

- `hasPath(6, [[0,1],[1,2],[3,4]], 0, 2)` → `true`
- `hasPath(4, [[0,1],[2,3]], 0, 3)` → `false`

## Constraints

- 1 <= n <= 100000; edges are valid; source and destination are valid nodes.

## Hint

Start at one node and visit its neighbors in turn.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool hasPath(int n, std::vector<std::vector<int>>& edges, int source, int destination) { return false; }
};
```

```java
class Solution {
  public boolean hasPath(int n, int[][] edges, int source, int destination) { return false; }
}
```

```python
class Solution:
    def hasPath(self, n, edges, source, destination):
        return false
```

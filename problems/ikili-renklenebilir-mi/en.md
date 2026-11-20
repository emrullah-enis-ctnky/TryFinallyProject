---
slug: ikili-renklenebilir-mi
title: Is Graph Bipartite
difficulty: orta
topics: [Graphs]
points: 30
---

## Problem

Determine whether an undirected graph’s nodes can be divided into two groups so neighboring nodes are in different groups. `graph[i]` lists the neighbors of node `i`.

## Examples

- `isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]])` → `true`
- `isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]])` → `false`

## Constraints

- 1 <= graph.length <= 1000; edges are undirected and there are no self-loops.

## Hint

In each connected component, color neighbors with the opposite color.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isBipartite(std::vector<std::vector<int>>& graph) { return false; }
};
```

```java
class Solution {
  public boolean isBipartite(int[][] graph) { return false; }
}
```

```python
class Solution:
    def isBipartite(self, graph):
        return false
```

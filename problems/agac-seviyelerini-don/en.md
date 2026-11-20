---
slug: agac-seviyelerini-don
title: Return Tree Levels
difficulty: orta
topics: [Trees, Queue & Deque]
points: 30
---

## Problem

A binary tree is encoded by the level-order array `nodes`, starting at the root; `-1` represents an empty node. Group each level's values from left to right and return them from `levelValues`. Return an empty list for an empty tree.

## Examples

- `levelValues([8, 3, 10, 1, 6])` → `[[8], [3, 10], [1, 6]]`
- `levelValues([])` → `[]`

## Constraints

- `0 <= nodes.length <= 100000`
- The array encodes a valid tree using child indices `2*i+1` and `2*i+2` from root index `0`; empty nodes have no values below them.
- `-100000 <= nodes[i] <= 100000`; `-1` marks an empty node.

## Hint

While processing one level, queue the children for the next level.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> levelValues(std::vector<int>& nodes) { return {}; }
};
```

```java
class Solution {
  public int[][] levelValues(int[] nodes) { return new int[0][0]; }
}
```

```python
class Solution:
    def levelValues(self, nodes):
        return []
```

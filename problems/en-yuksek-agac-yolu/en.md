---
slug: en-yuksek-agac-yolu
title: Maximum Tree Path Sum
difficulty: zor
topics: [Trees]
points: 45
---

## Problem

A binary tree is encoded by `nodes` starting at the root; child indices are `2*i+1` and `2*i+2`. The value `-2147483648` marks an empty node. Write `maximumTreePathSum` to maximize the sum along a path between any two tree nodes. Return `0` for an empty tree.

## Examples

- `maximumTreePathSum([-10, 9, 20, -2147483648, -2147483648, 15, 7])` → `42`
- `maximumTreePathSum([-5])` → `-5`

## Constraints

- `0 <= nodes.length <= 100000`
- The array encodes a valid binary tree; empty nodes have no values below them.
- Node values are between `-10000` and `10000`.

## Hint

A node can contribute one child branch to its parent, while the best path through it may join two branches.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int maximumTreePathSum(std::vector<int>& nodes) { return 0; }
};
```

```java
class Solution {
  public int maximumTreePathSum(int[] nodes) { return 0; }
}
```

```python
class Solution:
    def maximumTreePathSum(self, nodes):
        return 0
```

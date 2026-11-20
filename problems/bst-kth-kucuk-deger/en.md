---
slug: bst-kth-kucuk-deger
title: Kth Smallest BST Value
difficulty: orta
topics: [Binary Search Trees, Trees, Stack]
points: 30
---

## Problem

A valid binary search tree is encoded by the level-order array `nodes`, starting at the root; `-1` marks an empty node. Write `kthSmallestBst` to return the value at position `k` when all values are sorted.

## Examples

- `kthSmallestBst([5, 3, 7, 2, 4, 6, 8], 3)` → `4`
- `kthSmallestBst([2, 1, 3], 1)` → `1`

## Constraints

- The tree contains between `1` and `100000` nodes.
- `1 <= k <=` the number of nodes
- Node values are distinct; `-1` marks an empty node.

## Hint

An inorder traversal of a binary search tree visits values in ascending order.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int kthSmallestBst(std::vector<int>& nodes, int k) { return 0; }
};
```

```java
class Solution {
  public int kthSmallestBst(int[] nodes, int k) { return 0; }
}
```

```python
class Solution:
    def kthSmallestBst(self, nodes, k):
        return 0
```

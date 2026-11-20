---
slug: ikili-arama-agacinda-ara
title: Search An Encoded BST
difficulty: kolay
topics: [Binary Search Trees, Binary Search]
points: 20
---

## Problem

A valid binary search tree is encoded by the level-order array `nodes`; `-1` marks an empty node. Write `searchEncodedBst` to determine whether `target` appears in the tree.

## Examples

- `searchEncodedBst([8, 3, 10, 1, 6, -1, 14], 6)` → `true`
- `searchEncodedBst([8, 3, 10], 7)` → `false`

## Constraints

- `0 <= nodes.length <= 100000`
- The array encodes a valid binary search tree in level order starting from the root.
- Node values are from `-100000` to `100000`; `-1` marks an empty node.

## Hint

At each node, compare the target and continue only into the matching subtree.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  bool searchEncodedBst(std::vector<int>& nodes, int target) { return false; }
};
```

```java
class Solution {
  public boolean searchEncodedBst(int[] nodes, int target) { return false; }
}
```

```python
class Solution:
    def searchEncodedBst(self, nodes, target):
        return False
```

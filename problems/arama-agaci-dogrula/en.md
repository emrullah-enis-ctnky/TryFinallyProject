---
slug: arama-agaci-dogrula
title: Validate a Search Tree
difficulty: orta
topics: [Binary Search Trees]
points: 30
---

## Problem

A binary search tree is encoded in an array with its root at index `0`. The children of a node at index `i` are at `2 * i + 1` and `2 * i + 2`; `-1` marks a missing node. Every present node has a parent, and values are unique. Write `isValidBst` to return whether the tree satisfies the binary search tree rules.

## Examples

- `isValidBst([8, 3, 10, 1, 6, -1, 14])` → `true`
- `isValidBst([8, 10, 5])` → `false`

## Constraints

- `0 <= nodes.length <= 10000`
- Node values are `-1` (absent) or between `0` and `100000`.
- Node values are unique.
- If the root is absent, the empty tree is valid.

## Hint

Track the allowed lower and upper bound for every node as you traverse the tree.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  bool isValidBst(std::vector<int>& nodes) { return false; }
};
```

```java
class Solution {
  public boolean isValidBst(int[] nodes) { return false; }
}
```

```python
class Solution:
    def isValidBst(self, nodes):
        return False
```

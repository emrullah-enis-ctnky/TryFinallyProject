---
slug: dizi-kodlu-agac-derinligi
title: Encoded Tree Height
difficulty: orta
topics: [Trees]
points: 30
---

## Problem

A binary tree is encoded in an array with its root at index `0`. The children of the node at index `i` are at indices `2 * i + 1` and `2 * i + 2`. The value `-1` marks an absent node; actual node values are non-negative. Write `treeHeight` to return the number of nodes on the longest path from the root to a leaf. The tree may be empty.

## Examples

- `treeHeight([5, 3, 8, 1, -1, 7, 9])` → `3`
- `treeHeight([1, 2, -1, 3])` → `3`

In the second example, the right child is absent, but the left side has three levels down to node `3`.

## Constraints

- `0 <= levelOrder.length <= 10000`
- Each value is `-1` or between `0` and `100000`.
- Every present node has a present parent.
- If the root is absent, the tree is empty.

## Hint

Keep a node index and its depth together while visiting its children.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int treeHeight(std::vector<int>& levelOrder) { return 0; }
};
```

```java
class Solution {
  public int treeHeight(int[] levelOrder) { return 0; }
}
```

```python
class Solution:
    def treeHeight(self, levelOrder):
        return 0
```

---
slug: bagli-liste-dugumlerini-sirala
title: Sort Linked List Nodes
difficulty: zor
topics: [Linked Lists, Sorting]
points: 45
---

## Problem

A list is encoded by arrays `values` and `next`, with `head` as its starting index. Write `sortedListOrder` to return the node indices in ascending order by value. For equal values, keep the node that appeared first in the list first. Do not change the input arrays.

## Examples

- `sortedListOrder([4, 1, 3], [1, 2, -1], 0)` → `[1, 2, 0]`
- `sortedListOrder([2, 2], [1, -1], 0)` → `[0, 1]`

## Constraints

- `values.length == next.length` and `0 <= values.length <= 100000`
- `head == -1` or a valid node index.
- The list has no cycle; `-100000 <= values[i] <= 100000`.

## Hint

Collect the node order first, then stably merge-sort those indices by their values.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> sortedListOrder(std::vector<int>& values, std::vector<int>& next, int head) { return {}; }
};
```

```java
class Solution {
  public int[] sortedListOrder(int[] values, int[] next, int head) { return new int[0]; }
}
```

```python
class Solution:
    def sortedListOrder(self, values, next, head):
        return []
```

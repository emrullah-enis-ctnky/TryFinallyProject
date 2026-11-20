---
slug: bagli-listenin-ortasi
title: Linked List Middle Index
difficulty: kolay
topics: [Linked Lists]
points: 20
---

## Problem

A singly linked list is encoded by arrays `values` and `next`; `head` is its starting index and `-1` ends the list. Return the middle node's index with `middleListIndex`. If the list has an even number of nodes, choose the second middle node.

## Examples

- `middleListIndex([4, 8, 2, 9], [1, 2, 3, -1], 0)` → `2`
- `middleListIndex([7, 5, 1], [1, 2, -1], 0)` → `1`

## Constraints

- `values.length == next.length` and `0 <= values.length <= 100000`
- `head == -1` or `0 <= head < values.length`
- The list has no cycle and all reachable indices are valid.

## Hint

Move one pointer one step at a time and another two steps at a time.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int middleListIndex(std::vector<int>& values, std::vector<int>& next, int head) { return -1; }
};
```

```java
class Solution {
  public int middleListIndex(int[] values, int[] next, int head) { return -1; }
}
```

```python
class Solution:
    def middleListIndex(self, values, next, head):
        return -1
```

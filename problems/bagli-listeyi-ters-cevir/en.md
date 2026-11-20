---
slug: bagli-listeyi-ters-cevir
title: Reverse A Linked List
difficulty: orta
topics: [Linked Lists]
points: 30
---

## Problem

A singly linked list is encoded by arrays `values` and `next`: node `i` stores `values[i]`, and `next[i]` is the next node's index; `-1` ends the list. Write `reverseListValues` to return the values starting at `head` in reverse order.

## Examples

- `reverseListValues([4, 1, 7], [1, 2, -1], 0)` → `[7, 1, 4]`
- `reverseListValues([9], [-1], 0)` → `[9]`

## Constraints

- `values.length == next.length`
- `0 <= values.length <= 100000`
- `head == -1` or `0 <= head < values.length`
- The list has no cycle; every reachable `next[i]` is `-1` or a valid index.

## Hint

Collect values while walking from the head, then reverse their order.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> reverseListValues(std::vector<int>& values, std::vector<int>& next, int head) { return {}; }
};
```

```java
class Solution {
  public int[] reverseListValues(int[] values, int[] next, int head) { return new int[0]; }
}
```

```python
class Solution:
    def reverseListValues(self, values, next, head):
        return []
```

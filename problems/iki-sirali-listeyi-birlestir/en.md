---
slug: iki-sirali-listeyi-birlestir
title: Merge Two Sorted Lists
difficulty: orta
topics: [Linked Lists, Two Pointers]
points: 30
---

## Problem

Two ascending linked lists are encoded by separate `values` and `next` arrays and head indices. Write `mergeEncodedLists` to combine their nodes in ascending order and return their values. An empty list has head `-1`.

## Examples

- `mergeEncodedLists([1, 4], [1, -1], 0, [2, 3], [1, -1], 0)` → `[1, 2, 3, 4]`
- `mergeEncodedLists([], [], -1, [5], [-1], 0)` → `[5]`

## Constraints

- For each list, `values` and `next` have equal lengths; at most `100000` nodes are present in total.
- Both lists are acyclic and sorted in ascending order.
- Each head is `-1` or a valid index in its arrays.

## Hint

Compare the next node in each list and append the smaller value.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> mergeEncodedLists(std::vector<int>& values1, std::vector<int>& next1, int head1, std::vector<int>& values2, std::vector<int>& next2, int head2) { return {}; }
};
```

```java
class Solution {
  public int[] mergeEncodedLists(int[] values1, int[] next1, int head1, int[] values2, int[] next2, int head2) { return new int[0]; }
}
```

```python
class Solution:
    def mergeEncodedLists(self, values1, next1, head1, values2, next2, head2):
        return []
```

---
slug: sirali-kayitlari-birlestir
title: Merge Sorted Records
difficulty: orta
topics: [Arrays, Two Pointers, Sorting]
points: 30
---

## Problem

Product codes in two warehouses are each stored in ascending order. Write `mergeSortedRecords` to combine them into one ascending array without re-sorting the elements. If a code occurs in both lists, include both copies.

## Examples

- `mergeSortedRecords([1, 4, 8], [2, 4, 9])` → `[1, 2, 4, 4, 8, 9]`
- `mergeSortedRecords([], [-3, 0])` → `[-3, 0]`

## Constraints

- Both arrays are sorted in ascending order.
- `0 <= a.length, b.length <= 100000`
- `-1000000000 <= a[i], b[i] <= 1000000000`

## Hint

Append the smaller of the next available values from the two arrays.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> mergeSortedRecords(std::vector<int>& a, std::vector<int>& b) { return {}; }
};
```

```java
class Solution {
  public int[] mergeSortedRecords(int[] a, int[] b) { return new int[0]; }
}
```

```python
class Solution:
    def mergeSortedRecords(self, a, b):
        return []
```

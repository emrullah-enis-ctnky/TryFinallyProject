---
slug: ekleme-indisi
title: Sorted Insertion Index
difficulty: kolay
topics: [Binary Search, Arrays]
points: 15
---

## Problem

You are given a duplicate-free integer array sorted in ascending order and a `target`. Write `insertionIndex` to return the target's index if present, or the index where it should be inserted to keep the array sorted.

## Examples

- `insertionIndex([1, 3, 5, 8], 5)` → `2`
- `insertionIndex([1, 3, 5, 8], 4)` → `2`

## Constraints

- `0 <= nums.length <= 100000`
- The array is sorted in ascending order and contains no duplicates.
- `-100000 <= nums[i], target <= 100000`

## Hint

Search for the position of the first value greater than or equal to the target.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int insertionIndex(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int insertionIndex(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def insertionIndex(self, nums, target):
        return 0
```

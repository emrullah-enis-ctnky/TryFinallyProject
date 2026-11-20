---
slug: sirali-dizide-arama
title: Search a Sorted Array
difficulty: kolay
topics: [Binary Search, Arrays]
points: 15
---

## Problem

You are given an integer array sorted in ascending order and a target. Write `searchFirst` to return the target's first index, or `-1` if it is absent.

## Examples

- `searchFirst([-4, 1, 1, 3, 9], 1)` → `1`
- `searchFirst([2, 5, 8], 7)` → `-1`

## Constraints

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i], target <= 100000`
- The array is sorted in ascending order.

## Hint

Halve the search range at each step; after finding a match, check whether an earlier match exists.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int searchFirst(std::vector<int>& nums, int target) { return -1; }
};
```

```java
class Solution {
  public int searchFirst(int[] nums, int target) { return -1; }
}
```

```python
class Solution:
    def searchFirst(self, nums, target):
        return -1
```

---
slug: dondurulmus-dizide-ara
title: Search a Rotated Array
difficulty: orta
topics: [Binary Search, Arrays]
points: 25
---

## Problem

An ascending array of distinct values has been rotated at an unknown position. Given the rotated array and a `target`, write `searchRotated` to return the target's index or `-1` if it is absent.

## Examples

- `searchRotated([4, 5, 6, 7, 0, 1, 2], 0)` → `4`
- `searchRotated([4, 5, 6, 7, 0, 1, 2], 3)` → `-1`

## Constraints

- `0 <= nums.length <= 100000`
- The array contains no duplicates.
- `-100000 <= nums[i], target <= 100000`

## Hint

At each step, identify which half is sorted and continue searching in the half that could contain the target.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int searchRotated(std::vector<int>& nums, int target) { return -1; }
};
```

```java
class Solution {
  public int searchRotated(int[] nums, int target) { return -1; }
}
```

```python
class Solution:
    def searchRotated(self, nums, target):
        return -1
```

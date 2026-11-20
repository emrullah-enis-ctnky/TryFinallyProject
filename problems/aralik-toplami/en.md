---
slug: aralik-toplami
title: Subarray Range Sum
difficulty: kolay
topics: [Arrays, Prefix Sum]
points: 15
---

## Problem

You are given an integer array and indices `left` and `right`. Write `rangeSum` to return the sum of the elements from index `left` through index `right`, inclusive.

## Examples

- `rangeSum([2, 4, 1, 7, 3], 1, 3)` → `12`
- `rangeSum([-5, 8, -2], 0, 2)` → `1`

The first range contains `[4, 1, 7]`, whose sum is `12`.

## Constraints

- `1 <= nums.length <= 100000`
- `0 <= left <= right < nums.length`
- `-10000 <= nums[i] <= 10000`
- The result fits in a signed 32-bit integer.

## Hint

You can use running totals from the start of the array to the range boundary.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int rangeSum(std::vector<int>& nums, int left, int right) { return 0; }
};
```

```java
class Solution {
  public int rangeSum(int[] nums, int left, int right) { return 0; }
}
```

```python
class Solution:
    def rangeSum(self, nums, left, right):
        return 0
```

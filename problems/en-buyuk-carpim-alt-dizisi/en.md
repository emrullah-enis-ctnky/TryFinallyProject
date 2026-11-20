---
slug: en-buyuk-carpim-alt-dizisi
title: Maximum Product Subarray
difficulty: orta
topics: [Dynamic Programming - 1D]
points: 30
---

## Problem

Find the greatest product of a contiguous subarray containing at least one reading.

## Examples

- `maxProductSubarray([2, 3, -2, 4])` → `6`
- `maxProductSubarray([-2, 0, -1])` → `0`

## Constraints

- 1 <= nums.length <= 10; -3 <= nums[i] <= 3; the result fits in int.

## Hint

A negative value can turn the smallest product into the largest; track both extremes.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maxProductSubarray(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int maxProductSubarray(int[] nums) { return 0; }
}
```

```python
class Solution:
    def maxProductSubarray(self, nums):
        return 0
```

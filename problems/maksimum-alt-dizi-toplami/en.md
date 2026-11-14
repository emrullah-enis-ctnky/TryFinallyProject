---
slug: maksimum-alt-dizi-toplami
title: Maximum Subarray
difficulty: orta
topics: [Arrays, Dynamic Programming]
points: 30
---

## Problem

Given an integer array, write a `maxSubArray` method that returns the largest sum among all non-empty subarrays made of **consecutive** elements.

## Examples

- `maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])` → `6`
- `maxSubArray([1])` → `1`
- `maxSubArray([5, 4, -1, 7, 8])` → `23`

## Constraints

- `1 ≤ length ≤ 100000`
- `-10000 ≤ nums[i] ≤ 10000`
- All elements may be negative.

## Hint

For each element you can either extend the previous subarray or start a new one. One pass over the array is enough (Kadane's algorithm). Two nested loops will exceed the time limit on large tests.

## Starter Code

```cpp
#include <vector>

class Solution {
public:
  int maxSubArray(std::vector<int>& nums) {
    // Write your solution here
    return 0;
  }
};
```

```java
class Solution {
  public int maxSubArray(int[] nums) {
    // Write your solution here
    return 0;
  }
}
```

```python
class Solution:
    def maxSubArray(self, nums):
        # Write your solution here
        return 0
```

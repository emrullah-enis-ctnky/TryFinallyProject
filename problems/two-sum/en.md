---
slug: two-sum
title: Two Sum
difficulty: kolay
topics: [Arrays, Hash Map]
points: 20
---

## Problem

Given an integer array and a target value, write a `twoSum` method that returns the **indices** of two distinct elements whose values add up to the target. You may assume that each input has exactly one solution and that the same element cannot be used twice. Return the smaller index first.

## Examples

- `twoSum([2, 7, 11, 15], 9)` → `[0, 1]`
- `twoSum([3, 2, 4], 6)` → `[1, 2]`

## Constraints

- The array contains at least two elements.
- Array elements and the target are integers.
- Return indices, not the values themselves.
- Return the two indices in ascending order.

## Hint

For each number, calculate the complement needed to reach the target. A hash map can store the indices of numbers you have already seen.

## Starter Code

```cpp
#include <vector>

class Solution {
public:
  std::vector<int> twoSum(std::vector<int>& nums, int target) {
    // Write your solution here
    return {};
  }
};
```

```java
class Solution {
  public int[] twoSum(int[] nums, int target) {
    // Write your solution here
    return new int[]{};
  }
}
```

```python
class Solution:
    def twoSum(self, nums, target):
        # Write your solution here
        return []
```

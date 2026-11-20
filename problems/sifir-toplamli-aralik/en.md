---
slug: sifir-toplamli-aralik
title: Zero Sum Range
difficulty: orta
topics: [Prefix Sum, Hashing]
points: 25
---

## Problem

You are given an integer array. Write `hasZeroSumRange` to return `true` if any non-empty contiguous range sums to zero, and `false` otherwise.

## Examples

- `hasZeroSumRange([4, -1, -3, 7])` → `true`
- `hasZeroSumRange([2, 1, 5])` → `false`

## Constraints

- `0 <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`

## Hint

The elements between two equal prefix sums add up to zero.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  bool hasZeroSumRange(std::vector<int>& nums) { return false; }
};
```

```java
class Solution {
  public boolean hasZeroSumRange(int[] nums) { return false; }
}
```

```python
class Solution:
    def hasZeroSumRange(self, nums):
        return False
```

---
slug: hedef-toplamli-alt-kumeler
title: Subsets with Target Sum
difficulty: zor
topics: [Backtracking, Arrays]
points: 40
---

## Problem

You are given an array of positive integers and a `target`. Write `countTargetSubsets` to return how many distinct subsets sum to `target`, using each index at most once. Different indices with equal values create different choices. The empty subset has sum `0`.

## Examples

- `countTargetSubsets([2, 3, 5, 6, 8, 10], 10)` → `3`
- `countTargetSubsets([1, 2, 3], 4)` → `1`

In the first example, the valid choices are `[10]`, `[2, 8]`, and `[2, 3, 5]`.

## Constraints

- `0 <= nums.length <= 20`
- `1 <= nums[i] <= 1000`
- `0 <= target <= 10000`

## Hint

For each number, explore both choosing it and skipping it; prune a branch once its sum exceeds the target.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int countTargetSubsets(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int countTargetSubsets(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def countTargetSubsets(self, nums, target):
        return 0
```

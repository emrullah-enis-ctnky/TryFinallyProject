---
slug: sirali-cift-toplami
title: Pair Sum in Order
difficulty: kolay
topics: [Two Pointers, Arrays]
points: 15
---

## Problem

You are given an integer array sorted in ascending order and a `target`. Write `hasPairWithSum` to return `true` if two values at different indices sum to `target`, and `false` otherwise.

## Examples

- `hasPairWithSum([1, 2, 4, 7], 6)` → `true`
- `hasPairWithSum([1, 3, 5], 10)` → `false`

In the first example, `2 + 4 = 6`.

## Constraints

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`
- `-200000 <= target <= 200000`
- The array is sorted in ascending order, with duplicates allowed.

## Hint

Move the left index when the sum is too small and the right index when it is too large.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  bool hasPairWithSum(std::vector<int>& nums, int target) { return false; }
};
```

```java
class Solution {
  public boolean hasPairWithSum(int[] nums, int target) { return false; }
}
```

```python
class Solution:
    def hasPairWithSum(self, nums, target):
        return False
```

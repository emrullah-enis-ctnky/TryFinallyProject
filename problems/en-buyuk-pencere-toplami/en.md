---
slug: en-buyuk-pencere-toplami
title: Maximum Window Sum
difficulty: orta
topics: [Sliding Window]
points: 25
---

## Problem

Find the greatest total across any `k` consecutive days in a sales series. `k` is at least 1 and no greater than the array length.

## Examples

- `maxWindowSum([2, 1, 5, 1, 3, 2], 3)` → `9`
- `maxWindowSum([-4, -2, -7], 2)` → `-6`

## Constraints

- 1 <= k <= nums.length <= 100000; -10000 <= nums[i] <= 10000.

## Hint

Compute one window sum, then subtract the outgoing value and add the incoming one at each step.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maxWindowSum(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public int maxWindowSum(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def maxWindowSum(self, nums, k):
        return 0
```

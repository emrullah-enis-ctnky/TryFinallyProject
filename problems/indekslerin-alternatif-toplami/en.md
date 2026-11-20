---
slug: indekslerin-alternatif-toplami
title: Alternating Index Sum
difficulty: kolay
topics: [Arrays]
points: 10
---

## Problem

A report stores its values in order in the array `nums`. Write `alternatingIndexSum` to add the values at zero-based even indices and subtract the values at odd indices.

## Examples

- `alternatingIndexSum([8, 3, 5, 2])` → `8`
- `alternatingIndexSum([4, 7, 1])` → `-2`

## Constraints

- `1 <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`

## Hint

The sign of each value depends on whether its index is even or odd.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int alternatingIndexSum(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int alternatingIndexSum(int[] nums) { return 0; }
}
```

```python
class Solution:
    def alternatingIndexSum(self, nums):
        return 0
```

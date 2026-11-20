---
slug: hedef-cifti-var-mi
title: Pair Reaches Target
difficulty: kolay
topics: [Two Pointers]
points: 15
---

## Problem

In an increasing price list, determine whether two distinct items sum to the budget. `hasPairSum` returns true if such a pair exists.

## Examples

- `hasPairSum([1, 3, 6, 9], 10)` → `true`
- `hasPairSum([2, 4, 8], 7)` → `false`

## Constraints

- 0 <= nums.length <= 100000; nums is sorted increasingly; values and target fit in int.

## Hint

Start at both ends and compare the sum.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool hasPairSum(std::vector<int>& nums, int target) { return false; }
};
```

```java
class Solution {
  public boolean hasPairSum(int[] nums, int target) { return false; }
}
```

```python
class Solution:
    def hasPairSum(self, nums, target):
        return false
```

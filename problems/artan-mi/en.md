---
slug: artan-mi
title: Is Array Increasing
difficulty: kolay
topics: [Arrays]
points: 10
---

## Problem

Determine whether measurements along a delivery route are strictly increasing. `isStrictlyIncreasing` returns a boolean; equal neighboring values do not count as increasing.

## Examples

- `isStrictlyIncreasing([1, 3, 8])` → `true`
- `isStrictlyIncreasing([2, 2, 5])` → `false`

## Constraints

- 0 <= nums.length <= 100000; -100000 <= nums[i] <= 100000

## Hint

Compare each neighboring pair once.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isStrictlyIncreasing(std::vector<int>& nums) { return false; }
};
```

```java
class Solution {
  public boolean isStrictlyIncreasing(int[] nums) { return false; }
}
```

```python
class Solution:
    def isStrictlyIncreasing(self, nums):
        return false
```

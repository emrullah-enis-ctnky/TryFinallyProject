---
slug: en-genis-rampa
title: Maximum Width Ramp
difficulty: orta
topics: [Stack]
points: 30
---

## Problem

Choose indices `i < j` where `nums[i] <= nums[j]`. Return the largest possible difference `j-i`.

## Examples

- `maximumWidthRamp([6, 0, 8, 2, 1, 5])` → `4`
- `maximumWidthRamp([9, 8, 1, 0, 1, 9])` → `5`

## Constraints

- 2 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hint

Store candidate starts with decreasing values on a stack, then match them while scanning from the right.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maximumWidthRamp(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int maximumWidthRamp(int[] nums) { return 0; }
}
```

```python
class Solution:
    def maximumWidthRamp(self, nums):
        return 0
```

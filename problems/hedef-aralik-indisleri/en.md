---
slug: hedef-aralik-indisleri
title: Target Range Indices
difficulty: orta
topics: [Binary Search]
points: 25
---

## Problem

Find the first and last index of a target value in an increasing event log. Return `[-1, -1]` if it is absent.

## Examples

- `targetRange([1, 2, 2, 2, 5], 2)` → `[1,3]`
- `targetRange([1, 3, 5], 4)` → `[-1,-1]`

## Constraints

- 0 <= nums.length <= 100000; nums is nondecreasing; -100000 <= target, nums[i] <= 100000.

## Hint

Use a lower-bound search for the first position and an upper-bound search for the last.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> targetRange(std::vector<int>& nums, int target) { return new int[0]; }
};
```

```java
class Solution {
  public int[] targetRange(int[] nums, int target) { return new int[0]; }
}
```

```python
class Solution:
    def targetRange(self, nums, target):
        return new int[0]
```

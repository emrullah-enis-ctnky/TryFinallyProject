---
slug: dag-katmani-var-mi
title: Mountain Array Check
difficulty: kolay
topics: [Arrays]
points: 15
---

## Problem

Determine whether a hiking route strictly rises and then strictly falls. The peak cannot be the first or last position.

## Examples

- `isMountain([1, 3, 5, 4, 2])` → `true`
- `isMountain([1, 2, 2, 1])` → `false`

## Constraints

- 3 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hint

Walk to the peak, then verify a strict decrease to the end.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isMountain(std::vector<int>& nums) { return false; }
};
```

```java
class Solution {
  public boolean isMountain(int[] nums) { return false; }
}
```

```python
class Solution:
    def isMountain(self, nums):
        return false
```

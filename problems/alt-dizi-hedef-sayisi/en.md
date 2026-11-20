---
slug: alt-dizi-hedef-sayisi
title: Subarrays With Target Sum
difficulty: orta
topics: [Prefix Sum]
points: 30
---

## Problem

Count contiguous ranges in an event stream whose sum is `target`. Ranges with different start or end positions count separately.

## Examples

- `countTargetSubarrays([1, 1, 1], 2)` → `2`
- `countTargetSubarrays([1, 2, 3], 3)` → `2`

## Constraints

- 0 <= nums.length <= 60000; -1000 <= nums[i], target <= 1000; the answer fits in int.

## Hint

For each prefix sum, track how often the needed earlier sum has appeared.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int countTargetSubarrays(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int countTargetSubarrays(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def countTargetSubarrays(self, nums, target):
        return 0
```

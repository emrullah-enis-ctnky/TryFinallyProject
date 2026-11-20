---
slug: hedef-toplamli-aralik-sayisi
title: Count Target Sum Ranges
difficulty: orta
topics: [Prefix Sum, Hashing]
points: 30
---

## Problem

A device's consecutive readings are stored in `values`. Write `countTargetRanges` to count the contiguous ranges whose sum is exactly `target`.

## Examples

- `countTargetRanges([1, 1, 1], 2)` → `2`
- `countTargetRanges([1, -1, 0], 0)` → `3`

## Constraints

- `1 <= values.length <= 100000`
- `-1000 <= values[i], target <= 1000`
- The answer fits a signed 64-bit integer.

## Hint

A valid range occurs when the difference between two prefix sums equals the target.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  long long countTargetRanges(std::vector<int>& values, int target) { return 0; }
};
```

```java
class Solution {
  public long countTargetRanges(int[] values, int target) { return 0; }
}
```

```python
class Solution:
    def countTargetRanges(self, values, target):
        return 0
```

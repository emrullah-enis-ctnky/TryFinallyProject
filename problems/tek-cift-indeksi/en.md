---
slug: tek-cift-indeksi
title: Find Pair Indices
difficulty: kolay
topics: [Arrays, Hashing]
points: 20
---

## Problem

The invoice values in `nums` are guaranteed to contain exactly one pair whose sum is `target`. Write `findPairIndices` to find two distinct indices for that pair. Return the smaller index first.

## Examples

- `findPairIndices([2, 7, 11, 15], 9)` → `[0, 1]`
- `findPairIndices([3, 3], 6)` → `[0, 1]`

## Constraints

- `2 <= nums.length <= 100000`
- `-1000000 <= nums[i] <= 1000000`
- Exactly one pair of indices forms the answer.

## Hint

For each value, look for the needed partner among values seen earlier.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> findPairIndices(std::vector<int>& nums, int target) { return {}; }
};
```

```java
class Solution {
  public int[] findPairIndices(int[] nums, int target) { return new int[0]; }
}
```

```python
class Solution:
    def findPairIndices(self, nums, target):
        return []
```

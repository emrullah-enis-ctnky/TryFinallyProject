---
slug: en-yuksek-alt-dizi-toplami
title: Maximum Subarray Sum
difficulty: orta
topics: [Arrays, Dynamic Programming - 1D]
points: 30
---

## Problem

Daily profit changes are stored in `changes`. Write `maximumSubarraySum` to find the largest total change over a contiguous range containing at least one day.

## Examples

- `maximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])` → `6`
- `maximumSubarraySum([-8, -3, -5])` → `-3`

## Constraints

- `1 <= changes.length <= 100000`
- `-10000 <= changes[i] <= 10000`

## Hint

At each position, compare extending the previous range with starting a new one.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int maximumSubarraySum(std::vector<int>& changes) { return 0; }
};
```

```java
class Solution {
  public int maximumSubarraySum(int[] changes) { return 0; }
}
```

```python
class Solution:
    def maximumSubarraySum(self, changes):
        return 0
```

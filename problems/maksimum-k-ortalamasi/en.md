---
slug: maksimum-k-ortalamasi
title: Maximum Average Window
difficulty: orta
topics: [Sliding Window]
points: 25
---

## Problem

Find the maximum average of any contiguous subarray of length `k`.

## Examples

- `maximumAverage([1, 12, -5, -6, 50, 3], 4)` → `12.75`
- `maximumAverage([5], 1)` → `5.0`

## Constraints

- 1 <= k <= nums.length <= 100000; -10000 <= nums[i] <= 10000.

## Hint

Find the largest window sum before dividing.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  double maximumAverage(std::vector<int>& nums, int k) { return 0.0; }
};
```

```java
class Solution {
  public double maximumAverage(int[] nums, int k) { return 0.0; }
}
```

```python
class Solution:
    def maximumAverage(self, nums, k):
        return 0.0
```

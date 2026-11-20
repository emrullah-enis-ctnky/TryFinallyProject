---
slug: pencere-ilk-negatif
title: First Negative Per Window
difficulty: orta
topics: [Queue & Deque, Sliding Window, Arrays]
points: 30
---

## Problem

A device's measurements are stored in `values`. For each contiguous segment of length `k`, return its first negative value in order. Use `0` for a segment with no negative value.

## Examples

- `firstNegativePerWindow([12, -1, -7, 8, -15, 30, 16], 3)` → `[-1, -1, -7, -15, -15]`
- `firstNegativePerWindow([2, 3, 4], 2)` → `[0, 0]`

## Constraints

- `1 <= k <= values.length <= 100000`
- `-100000 <= values[i] <= 100000`

## Hint

Keep the indices of negative values in each window in order.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> firstNegativePerWindow(std::vector<int>& values, int k) { return {}; }
};
```

```java
class Solution {
  public int[] firstNegativePerWindow(int[] values, int k) { return new int[0]; }
}
```

```python
class Solution:
    def firstNegativePerWindow(self, values, k):
        return []
```

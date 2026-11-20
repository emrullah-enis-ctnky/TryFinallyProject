---
slug: en-buyuk-dikdortgen
title: Largest Histogram Rectangle
difficulty: zor
topics: [Stack, Arrays]
points: 45
---

## Problem

The heights of adjacent histogram bars are stored in `heights`; each bar has width one. Write `largestHistogramArea` to find the largest rectangle that fits under a contiguous group of bars.

## Examples

- `largestHistogramArea([2, 1, 5, 6, 2, 3])` → `10`
- `largestHistogramArea([2, 4])` → `4`

## Constraints

- `0 <= heights.length <= 100000`
- `0 <= heights[i] <= 1000000000`
- The answer fits a signed 64-bit integer.

## Hint

When a shorter bar appears, calculate the width available to bars waiting on a stack.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  long long largestHistogramArea(std::vector<int>& heights) { return 0; }
};
```

```java
class Solution {
  public long largestHistogramArea(int[] heights) { return 0; }
}
```

```python
class Solution:
    def largestHistogramArea(self, heights):
        return 0
```

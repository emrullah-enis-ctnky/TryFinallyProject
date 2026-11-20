---
slug: tek-tepe-indisi
title: Single Peak Index
difficulty: orta
topics: [Binary Search, Arrays]
points: 30
---

## Problem

A trail's elevations are stored in `heights`. The values strictly increase to one peak and then strictly decrease. Find the peak's index with `peakIndex`.

## Examples

- `peakIndex([1, 3, 5, 4, 2])` → `2`
- `peakIndex([7])` → `0`

## Constraints

- `1 <= heights.length <= 100000`
- If the array has more than one value, adjacent values differ and there is exactly one peak.

## Hint

The slope at the midpoint tells you which side contains the peak.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int peakIndex(std::vector<int>& heights) { return 0; }
};
```

```java
class Solution {
  public int peakIndex(int[] heights) { return 0; }
}
```

```python
class Solution:
    def peakIndex(self, heights):
        return 0
```

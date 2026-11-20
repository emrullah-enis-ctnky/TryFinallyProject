---
slug: balonlari-patlat
title: Burst Balloons With Arrows
difficulty: orta
topics: [Intervals, Greedy, Sorting]
points: 30
---

## Problem

Each balloon covers a closed interval `[start, end]` on a horizontal axis. An arrow shot at position `x` bursts every balloon satisfying `start <= x <= end`. Write `minimumArrows` to find the fewest arrows needed to burst them all.

## Examples

- `minimumArrows([[10, 16], [2, 8], [1, 6], [7, 12]])` → `2`
- `minimumArrows([[1, 2], [2, 3], [3, 4]])` → `2`

## Constraints

- `0 <= balloons.length <= 100000`
- `-1000000000 <= balloons[i][0] <= balloons[i][1] <= 1000000000`

## Hint

When choosing an arrow, use the smallest end point among the intervals it covers.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int minimumArrows(std::vector<std::vector<int>>& balloons) { return 0; }
};
```

```java
class Solution {
  public int minimumArrows(int[][] balloons) { return 0; }
}
```

```python
class Solution:
    def minimumArrows(self, balloons):
        return 0
```

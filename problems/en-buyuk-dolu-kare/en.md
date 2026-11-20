---
slug: en-buyuk-dolu-kare
title: Largest Filled Square
difficulty: orta
topics: [Dynamic Programming - 2D, Arrays]
points: 30
---

## Problem

Given a binary grid `grid`, where `1` marks usable land, write `largestFilledSquare` to return the area of the largest square region made entirely of usable cells.

## Examples

- `largestFilledSquare([[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]])` → `4`
- `largestFilledSquare([[1, 1], [1, 1]])` → `4`

## Constraints

- `0 <= grid.length, grid[i].length <= 200`
- The grid is rectangular and contains only `0` or `1`.

## Hint

The largest square ending at a cell depends on the smallest result among its left, upper, and upper-left neighbors.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int largestFilledSquare(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public int largestFilledSquare(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def largestFilledSquare(self, grid):
        return 0
```

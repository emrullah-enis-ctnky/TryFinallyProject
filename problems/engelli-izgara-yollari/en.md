---
slug: engelli-izgara-yollari
title: Paths Through Blocked Grid
difficulty: orta
topics: [Dynamic Programming - 2D, Arrays]
points: 30
---

## Problem

You are given a rectangular grid where `0` is open and `1` is blocked. Starting at the top-left cell, you may move only right or down. Write `countGridPaths` to return the number of ways to reach the bottom-right cell. If either endpoint is blocked, there is no path.

## Examples

- `countGridPaths([[0, 0, 0], [0, 1, 0], [0, 0, 0]])` → `2`
- `countGridPaths([[0, 1], [0, 0]])` → `1`

## Constraints

- `1 <= grid.length, grid[0].length <= 20`
- The grid is rectangular and contains at least one row and column.
- Cell values are `0` or `1`.
- The answer fits in a signed 64-bit integer.

## Hint

The number of ways to reach a cell is the sum of the ways from above and from the left; blocked cells have zero ways.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  long long countGridPaths(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public long countGridPaths(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def countGridPaths(self, grid):
        return 0
```

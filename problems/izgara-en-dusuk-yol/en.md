---
slug: izgara-en-dusuk-yol
title: Minimum Grid Path Sum
difficulty: orta
topics: [Dynamic Programming - 2D, Arrays]
points: 30
---

## Problem

You are given a rectangular grid of non-negative costs. Starting at the top-left cell, you may move only right or down to reach the bottom-right cell. Write `minimumPathSum` to return the smallest total cost along a path, including both endpoint cells.

## Examples

- `minimumPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])` → `7`
- `minimumPathSum([[1, 2], [1, 1]])` → `3`

In the first example, a minimum-cost route has cost `1 + 3 + 1 + 1 + 1 = 7`.

## Constraints

- `1 <= grid.length, grid[0].length <= 100`
- `grid` is rectangular and contains at most `10000` cells.
- `0 <= grid[row][column] <= 10000`

## Hint

The minimum cost to reach a cell depends on the smaller of the costs from above and from the left.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int minimumPathSum(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public int minimumPathSum(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def minimumPathSum(self, grid):
        return 0
```

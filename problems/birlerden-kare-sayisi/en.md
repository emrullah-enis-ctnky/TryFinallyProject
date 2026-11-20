---
slug: birlerden-kare-sayisi
title: Count All One Squares
difficulty: orta
topics: [Dynamic Programming - 2D]
points: 30
---

## Problem

Count every square region in a map of zeros and ones. Count each square of any size whose cells are all 1.

## Examples

- `countOneSquares([[1, 0, 1], [1, 1, 1], [1, 1, 1]])` → `10`
- `countOneSquares([[0, 0], [0, 0]])` → `0`

## Constraints

- 0 <= rows, columns <= 100; all rows have equal length; cells are 0 or 1.

## Hint

The number of squares ending at a cell equals the side length of the largest square ending there.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int countOneSquares(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public int countOneSquares(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def countOneSquares(self, grid):
        return 0
```

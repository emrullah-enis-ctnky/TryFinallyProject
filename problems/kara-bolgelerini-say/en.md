---
slug: kara-bolgelerini-say
title: Count Land Regions
difficulty: orta
topics: [Graphs, Queue & Deque]
points: 30
---

## Problem

You are given a rectangular map of `0` (water) and `1` (land) cells. Land cells belong to the same region only when connected horizontally or vertically; diagonal contact does not count. Write `countLandRegions` to return the number of land regions.

## Examples

- `countLandRegions([[1, 1, 0], [0, 1, 0], [1, 0, 1]])` → `3`
- `countLandRegions([[1, 1], [1, 1]])` → `1`

## Constraints

- `0 <= grid.length <= 100`
- All rows have the same length, at most `100` cells.
- Cell values are either `0` or `1`.

## Hint

When you find an unvisited land cell, use a queue to visit and mark every cell connected to it.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int countLandRegions(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public int countLandRegions(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def countLandRegions(self, grid):
        return 0
```

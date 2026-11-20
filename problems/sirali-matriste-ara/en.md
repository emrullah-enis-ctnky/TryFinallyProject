---
slug: sirali-matriste-ara
title: Search Sorted Matrix
difficulty: orta
topics: [Binary Search, Arrays]
points: 25
---

## Problem

Warehouse shelves are represented by the 2D array `matrix`. Each row is ascending, and the first value in each row is greater than the last value in the previous row. Write `searchSortedMatrix` to return `true` if `target` appears and `false` otherwise.

## Examples

- `searchSortedMatrix([[1, 3, 5], [8, 10, 12]], 10)` → `true`
- `searchSortedMatrix([[1, 3, 5], [8, 10, 12]], 7)` → `false`

## Constraints

- `1 <= matrix.length, matrix[i].length <= 1000`
- The matrix is rectangular and all values are in ascending row order.
- `-1000000000 <= matrix[i][j], target <= 1000000000`

## Hint

Compute row and column indices as if all cells formed one sorted array.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  bool searchSortedMatrix(std::vector<std::vector<int>>& matrix, int target) { return false; }
};
```

```java
class Solution {
  public boolean searchSortedMatrix(int[][] matrix, int target) { return false; }
}
```

```python
class Solution:
    def searchSortedMatrix(self, matrix, target):
        return False
```

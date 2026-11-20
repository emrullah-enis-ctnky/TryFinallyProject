---
slug: iki-kosegen-toplami
title: Sum Both Diagonals
difficulty: kolay
topics: [Arrays]
points: 15
---

## Problem

Sum the values on both diagonals of a square board. Do not count the center cell twice when the board has odd size.

## Examples

- `diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` → `25`
- `diagonalSum([[5]])` → `5`

## Constraints

- 1 <= n <= 1000; matrix is n by n; -10000 <= cell <= 10000.

## Hint

Compute the left and right diagonal columns for each row.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int diagonalSum(std::vector<std::vector<int>>& matrix) { return 0; }
};
```

```java
class Solution {
  public int diagonalSum(int[][] matrix) { return 0; }
}
```

```python
class Solution:
    def diagonalSum(self, matrix):
        return 0
```

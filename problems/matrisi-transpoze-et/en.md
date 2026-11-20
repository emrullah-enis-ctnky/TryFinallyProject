---
slug: matrisi-transpoze-et
title: Transpose A Matrix
difficulty: orta
topics: [Arrays]
points: 25
---

## Problem

Transpose a table by swapping its rows and columns. `transpose` returns a new matrix. The input may be empty.

## Examples

- `transpose([[1, 2, 3], [4, 5, 6]])` → `[[1,4],[2,5],[3,6]]`
- `transpose([[7]])` → `[[7]]`

## Constraints

- 0 <= rows, columns <= 100; all rows have equal length; -1000 <= cell <= 1000.

## Hint

Input cell `[r][c]` moves to `[c][r]` in the result.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> transpose(std::vector<std::vector<int>>& matrix) { return new int[0][0]; }
};
```

```java
class Solution {
  public int[][] transpose(int[][] matrix) { return new int[0][0]; }
}
```

```python
class Solution:
    def transpose(self, matrix):
        return new int[0][0]
```

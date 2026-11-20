---
slug: iki-matrisin-toplami
title: Add Two Matrices
difficulty: kolay
topics: [Arrays]
points: 15
---

## Problem

Add two sensor tables of equal dimensions cell by cell. `addMatrices` returns the resulting matrix.

## Examples

- `addMatrices([[1, 2], [3, 4]], [[5, 1], [0, 2]])` → `[[6,3],[3,6]]`
- `addMatrices([[], []], [[], []])` → `[[],[]]`

## Constraints

- The matrices have equal dimensions; each has at most 100 rows and columns; -1000 <= cell <= 1000.

## Hint

Add the two values at the same position for each cell.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> addMatrices(std::vector<std::vector<int>>& a, std::vector<std::vector<int>>& b) { return new int[0][0]; }
};
```

```java
class Solution {
  public int[][] addMatrices(int[][] a, int[][] b) { return new int[0][0]; }
}
```

```python
class Solution:
    def addMatrices(self, a, b):
        return new int[0][0]
```

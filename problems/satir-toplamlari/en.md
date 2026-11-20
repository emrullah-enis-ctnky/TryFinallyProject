---
slug: satir-toplamlari
title: Row Totals
difficulty: kolay
topics: [Arrays]
points: 15
---

## Problem

Sum the quantities in each row of a warehouse table. `rowSums` returns one total per row, in the same order.

## Examples

- `rowSums([[2, 3], [4, 1, 5]])` → `[5,10]`
- `rowSums([[], [7]])` → `[0,7]`

## Constraints

- 0 <= matrix.length <= 10000; each row has length <= 10000; values are from 0 to 1000.

## Hint

Traverse each row separately.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> rowSums(std::vector<std::vector<int>>& matrix) { return new int[0]; }
};
```

```java
class Solution {
  public int[] rowSums(int[][] matrix) { return new int[0]; }
}
```

```python
class Solution:
    def rowSums(self, matrix):
        return new int[0]
```

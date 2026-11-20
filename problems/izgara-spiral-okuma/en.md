---
slug: izgara-spiral-okuma
title: Spiral Grid Read
difficulty: orta
topics: [Arrays]
points: 25
---

## Problem

Read the cells of an inventory grid clockwise, starting at the outer border and moving inward. `spiralOrder` returns the values in one array.

## Examples

- `spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` → `[1,2,3,6,9,8,7,4,5]`
- `spiralOrder([[1, 2, 3, 4]])` → `[1,2,3,4]`

## Constraints

- 0 <= rows, columns <= 100; all rows have equal length.

## Hint

Track four boundaries and move each inward after reading it.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> spiralOrder(std::vector<std::vector<int>>& matrix) { return new int[0]; }
};
```

```java
class Solution {
  public int[] spiralOrder(int[][] matrix) { return new int[0]; }
}
```

```python
class Solution:
    def spiralOrder(self, matrix):
        return new int[0]
```

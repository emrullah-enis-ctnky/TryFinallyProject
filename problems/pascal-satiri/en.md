---
slug: pascal-satiri
title: Pascal Triangle Row
difficulty: kolay
topics: [Dynamic Programming - 1D]
points: 15
---

## Problem

Return row `rowIndex` of Pascal’s triangle, using zero-based indexing. Each inner value is the sum of its two neighbors in the row above.

## Examples

- `pascalRow(3)` → `[1,3,3,1]`
- `pascalRow(0)` → `[1]`

## Constraints

- 0 <= rowIndex <= 30.

## Hint

Update one array from right to left so previous values are preserved.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> pascalRow(int rowIndex) { return new int[0]; }
};
```

```java
class Solution {
  public int[] pascalRow(int rowIndex) { return new int[0]; }
}
```

```python
class Solution:
    def pascalRow(self, rowIndex):
        return new int[0]
```

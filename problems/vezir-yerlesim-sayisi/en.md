---
slug: vezir-yerlesim-sayisi
title: Count Queen Arrangements
difficulty: zor
topics: [Backtracking, Bit Manipulation]
points: 50
---

## Problem

Place `n` queens on an `n x n` chessboard so that no two share a row, column, or diagonal. Write `countQueenArrangements` to return the number of valid arrangements.

## Examples

- `countQueenArrangements(4)` → `2`
- `countQueenArrangements(1)` → `1`

## Constraints

- `1 <= n <= 14`

## Hint

Try safe columns row by row; each choice changes which diagonals remain available below.

## Starter Code

```cpp
class Solution {
public:
  int countQueenArrangements(int n) { return 0; }
};
```

```java
class Solution {
  public int countQueenArrangements(int n) { return 0; }
}
```

```python
class Solution:
    def countQueenArrangements(self, n):
        return 0
```

---
slug: izgarada-sozcuk-bul
title: Find Word In Grid
difficulty: zor
topics: [Backtracking, Graphs, Strings]
points: 45
---

## Problem

Given a grid `grid` of uppercase letters and a `word`, determine whether the word can be formed by moving between horizontally or vertically adjacent cells. A cell may be used at most once in the word. Return `true` if it is possible, and `false` otherwise.

## Examples

- `existsInGrid(["ABCE", "SFCS", "ADEE"], "ABCCED")` → `true`
- `existsInGrid(["ABCE", "SFCS", "ADEE"], "ABCB")` → `false`

## Constraints

- `1 <= grid.length, grid[i].length <= 6`
- The grid is rectangular and contains only letters from `A` to `Z`.
- `1 <= word.length <= 15`; the word contains only letters from `A` to `Z`.

## Hint

After choosing a cell, try continuing through its neighbors and undo a branch when it fails.

## Starter Code

```cpp
#include <string>
#include <vector>
class Solution {
public:
  bool existsInGrid(std::vector<std::string>& grid, std::string word) { return false; }
};
```

```java
class Solution {
  public boolean existsInGrid(String[] grid, String word) { return false; }
}
```

```python
class Solution:
    def existsInGrid(self, grid, word):
        return False
```

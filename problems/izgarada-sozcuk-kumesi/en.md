---
slug: izgarada-sozcuk-kumesi
title: Grid Word Search II
difficulty: zor
topics: [Trie, Backtracking, Graphs]
points: 50
---

## Problem

You are given an uppercase-letter `grid` and a list of distinct `words`. A word can be formed by visiting horizontally or vertically adjacent cells, using each cell at most once. Write `findGridWords` to return the words found in the grid in alphabetical order.

## Examples

- `findGridWords(["OATH", "PEAS", "RAIN"], ["OATH", "PEA", "EAT", "RAIN"])` → `["EAT", "OATH", "PEA", "RAIN"]`
- `findGridWords(["AB", "CD"], ["AB", "ACDB", "AAAA"])` → `["AB", "ACDB"]`

## Constraints

- `1 <= grid.length, grid[i].length <= 6`
- The grid and words contain only letters from `A` to `Z`.
- `0 <= words.length <= 1000`; words are distinct and have lengths from `1` to `8`.

## Hint

Share dictionary prefixes in a trie and backtrack when a search branch has no remaining path.

## Starter Code

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::string> findGridWords(std::vector<std::string>& grid, std::vector<std::string>& words) { return {}; }
};
```

```java
class Solution {
  public String[] findGridWords(String[] grid, String[] words) { return new String[0]; }
}
```

```python
class Solution:
    def findGridWords(self, grid, words):
        return []
```

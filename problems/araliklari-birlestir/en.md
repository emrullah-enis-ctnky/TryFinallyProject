---
slug: araliklari-birlestir
title: Merge Overlapping Intervals
difficulty: orta
topics: [Intervals, Sorting]
points: 25
---

## Problem

You are given intervals where each row is `[start, end]`. Write `mergeIntervals` to combine intervals that overlap or share an endpoint, and return the resulting intervals sorted by start.

## Examples

- `mergeIntervals([[1, 3], [2, 6], [8, 10]])` → `[[1, 6], [8, 10]]`
- `mergeIntervals([[1, 2], [2, 4]])` → `[[1, 4]]`

In the first example, the first two intervals overlap and the third remains separate.

## Constraints

- `0 <= intervals.length <= 10000`
- For each interval, `-10000 <= start <= end <= 10000`
- Return output intervals in increasing order of their start values.

## Hint

Sort intervals by start and compare each one with the end of the last merged interval.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> mergeIntervals(std::vector<std::vector<int>>& intervals) { return {}; }
};
```

```java
class Solution {
  public int[][] mergeIntervals(int[][] intervals) { return new int[][]{}; }
}
```

```python
class Solution:
    def mergeIntervals(self, intervals):
        return []
```

---
slug: aralik-secimi
title: Select Nonoverlapping Intervals
difficulty: orta
topics: [Greedy]
points: 25
---

## Problem

Select as many nonoverlapping tasks as possible from a calendar. Each interval is `[start, end]`; a task may start when the previous one ends.

## Examples

- `maxNonOverlappingIntervals([[1, 3], [2, 4], [3, 5], [6, 7]])` → `3`
- `maxNonOverlappingIntervals([[1, 5], [2, 3]])` → `1`

## Constraints

- 0 <= intervals.length <= 100000; start < end; endpoints fit in int.

## Hint

Choosing the task that ends earliest leaves the most room for later tasks.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maxNonOverlappingIntervals(std::vector<std::vector<int>>& intervals) { return 0; }
};
```

```java
class Solution {
  public int maxNonOverlappingIntervals(int[][] intervals) { return 0; }
}
```

```python
class Solution:
    def maxNonOverlappingIntervals(self, intervals):
        return 0
```

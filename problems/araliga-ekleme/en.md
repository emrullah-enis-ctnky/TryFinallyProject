---
slug: araliga-ekleme
title: Insert An Interval
difficulty: orta
topics: [Intervals]
points: 25
---

## Problem

Insert a new interval into a start-sorted list of nonoverlapping intervals. Merge every interval that overlaps the new one and return the sorted result.

## Examples

- `insertInterval([[1, 3], [6, 9]], [2, 5])` → `[[1,5],[6,9]]`
- `insertInterval([[1, 2], [3, 5], [6, 7]], [4, 6])` → `[[1,2],[3,7]]`

## Constraints

- 0 <= intervals.length <= 10000; intervals are sorted by start and nonoverlapping; start <= end.

## Hint

Append the intervals before the new one, the merged interval, then the remaining intervals.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> insertInterval(std::vector<std::vector<int>>& intervals, std::vector<int>& added) { return new int[0][0]; }
};
```

```java
class Solution {
  public int[][] insertInterval(int[][] intervals, int[] added) { return new int[0][0]; }
}
```

```python
class Solution:
    def insertInterval(self, intervals, added):
        return new int[0][0]
```

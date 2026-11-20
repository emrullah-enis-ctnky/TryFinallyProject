---
slug: aralik-kesisimleri
title: Interval Intersections
difficulty: orta
topics: [Intervals]
points: 25
---

## Problem

Find the common intervals of two timelines sorted by start time, with no overlaps within either timeline. Include endpoints in every intersection.

## Examples

- `intervalIntersections([[0, 2], [5, 10]], [[1, 5], [8, 12]])` → `[[1,2],[5,5],[8,10]]`
- `intervalIntersections([[1, 3]], [[4, 6]])` → `[]`

## Constraints

- 0 <= first.length, second.length <= 1000; intervals are sorted by start; start <= end.

## Hint

Compute the intersection and advance the interval that ends first.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> intervalIntersections(std::vector<std::vector<int>>& first, std::vector<std::vector<int>>& second) { return new int[0][0]; }
};
```

```java
class Solution {
  public int[][] intervalIntersections(int[][] first, int[][] second) { return new int[0][0]; }
}
```

```python
class Solution:
    def intervalIntersections(self, first, second):
        return new int[0][0]
```

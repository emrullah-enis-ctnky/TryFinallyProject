---
slug: istasyon-turu
title: Circuit Station Tour
difficulty: orta
topics: [Greedy]
points: 30
---

## Problem

A circular route gives the fuel available at each station and the cost to reach the next. Return the smallest starting index that completes the tour, or -1 if none exists.

## Examples

- `startStation([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])` → `3`
- `startStation([2, 3, 4], [3, 4, 3])` → `-1`

## Constraints

- 1 <= fuel.length == cost.length <= 100000; 0 <= fuel[i], cost[i] <= 100000.

## Hint

If total fuel covers total cost, no station between a failed start and its failure can be a valid start.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int startStation(std::vector<int>& fuel, std::vector<int>& cost) { return 0; }
};
```

```java
class Solution {
  public int startStation(int[] fuel, int[] cost) { return 0; }
}
```

```python
class Solution:
    def startStation(self, fuel, cost):
        return 0
```

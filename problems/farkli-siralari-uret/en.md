---
slug: farkli-siralari-uret
title: Generate Task Orders
difficulty: orta
topics: [Backtracking, Arrays]
points: 30
---

## Problem

Distinct task numbers are given for a planning job. Write `allTaskOrders` to return every possible task order in numeric lexicographic order.

## Examples

- `allTaskOrders([1, 2, 3])` → `[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]`
- `allTaskOrders([4])` → `[[4]]`

## Constraints

- `1 <= tasks.length <= 8`
- All values in `tasks` are distinct.

## Hint

At each step, add an unchosen task and record a sequence once it is complete.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> allTaskOrders(std::vector<int>& tasks) { return {}; }
};
```

```java
class Solution {
  public int[][] allTaskOrders(int[] tasks) { return new int[0][0]; }
}
```

```python
class Solution:
    def allTaskOrders(self, tasks):
        return []
```

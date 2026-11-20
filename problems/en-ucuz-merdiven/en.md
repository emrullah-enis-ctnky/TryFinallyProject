---
slug: en-ucuz-merdiven
title: Minimum Stair Cost
difficulty: orta
topics: [Dynamic Programming - 1D, Arrays]
points: 30
---

## Problem

The fee for stepping on stair `i` is `cost[i]`. Starting at the bottom, you may climb one or two stairs at a time and may begin on either of the first two stairs. Write `minimumClimbCost` to find the least total fee paid before reaching the top.

## Examples

- `minimumClimbCost([10, 15, 20])` → `15`
- `minimumClimbCost([1, 100, 1, 1])` → `2`

## Constraints

- `2 <= cost.length <= 100000`
- `0 <= cost[i] <= 1000000000`

## Hint

The cheapest cost to reach a stair comes from the cheaper of the previous two options.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  long long minimumClimbCost(std::vector<int>& cost) { return 0; }
};
```

```java
class Solution {
  public long minimumClimbCost(int[] cost) { return 0; }
}
```

```python
class Solution:
    def minimumClimbCost(self, cost):
        return 0
```

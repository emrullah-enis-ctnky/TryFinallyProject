---
slug: tek-islem-en-yuksek-kar
title: Best Single Trade
difficulty: kolay
topics: [Arrays, Greedy]
points: 15
---

## Problem

A product's price on each day is stored in `prices`. You may buy once and sell later. Write `maximumSingleTradeProfit` to find the largest possible profit, or return `0` if no profit is possible.

## Examples

- `maximumSingleTradeProfit([7, 1, 5, 3, 6, 4])` → `5`
- `maximumSingleTradeProfit([7, 6, 4, 3, 1])` → `0`

## Constraints

- `1 <= prices.length <= 100000`
- `0 <= prices[i] <= 1000000000`

## Hint

For each sale day, use the lowest buy price seen so far.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int maximumSingleTradeProfit(std::vector<int>& prices) { return 0; }
};
```

```java
class Solution {
  public int maximumSingleTradeProfit(int[] prices) { return 0; }
}
```

```python
class Solution:
    def maximumSingleTradeProfit(self, prices):
        return 0
```

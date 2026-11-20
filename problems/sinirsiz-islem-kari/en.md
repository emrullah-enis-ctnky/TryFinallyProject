---
slug: sinirsiz-islem-kari
title: Unlimited Trade Profit
difficulty: orta
topics: [Greedy]
points: 25
---

## Problem

You may buy and sell at most one unit per day and hold at most one unit at a time. Given all prices, find the greatest total profit possible.

## Examples

- `unlimitedTradeProfit([7, 1, 5, 3, 6, 4])` → `7`
- `unlimitedTradeProfit([5, 4, 3])` → `0`

## Constraints

- 1 <= prices.length <= 100000; 0 <= prices[i] <= 100000.

## Hint

Each positive difference between consecutive prices contributes to the profit.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int unlimitedTradeProfit(std::vector<int>& prices) { return 0; }
};
```

```java
class Solution {
  public int unlimitedTradeProfit(int[] prices) { return 0; }
}
```

```python
class Solution:
    def unlimitedTradeProfit(self, prices):
        return 0
```

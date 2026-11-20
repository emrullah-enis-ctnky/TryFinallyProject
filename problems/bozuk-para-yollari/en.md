---
slug: bozuk-para-yollari
title: Coin Change Combinations
difficulty: orta
topics: [Dynamic Programming - 1D]
points: 30
---

## Problem

The distinct coin values accepted by a vending machine are in `coins`. Find how many combinations can make a total of `amount` using each value any number of times. Giving the same coins in a different order does not make a new combination.

## Examples

- `countCoinWays([1, 2, 5], 5)` → `4`
- `countCoinWays([2], 3)` → `0`

## Constraints

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 1000`; values are distinct.
- `0 <= amount <= 1000`
- The answer fits a signed 32-bit integer.

## Hint

Process one coin value at a time, extending totals that can be made with earlier values.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int countCoinWays(std::vector<int>& coins, int amount) { return 0; }
};
```

```java
class Solution {
  public int countCoinWays(int[] coins, int amount) { return 0; }
}
```

```python
class Solution:
    def countCoinWays(self, coins, amount):
        return 0
```

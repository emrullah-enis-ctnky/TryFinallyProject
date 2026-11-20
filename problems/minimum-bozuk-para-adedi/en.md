---
slug: minimum-bozuk-para-adedi
title: Fewest Coins Needed
difficulty: orta
topics: [Dynamic Programming - 1D]
points: 30
---

## Problem

You may use unlimited coins of each denomination. Find the fewest coins needed to make the amount, or return -1 if it is impossible.

## Examples

- `minimumCoins([1, 2, 5], 11)` → `3`
- `minimumCoins([2], 3)` → `-1`

## Constraints

- 1 <= coins.length <= 100; 1 <= coins[i] <= 10000; 0 <= amount <= 10000.

## Hint

For each amount, try each final coin and keep the smallest previous result.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int minimumCoins(std::vector<int>& coins, int amount) { return 0; }
};
```

```java
class Solution {
  public int minimumCoins(int[] coins, int amount) { return 0; }
}
```

```python
class Solution:
    def minimumCoins(self, coins, amount):
        return 0
```

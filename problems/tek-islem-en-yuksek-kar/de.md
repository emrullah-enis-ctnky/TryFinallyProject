---
slug: tek-islem-en-yuksek-kar
title: Einmal Kaufen, Einmal Verkaufen
difficulty: kolay
topics: [Arrays, Greedy-Algorithmus]
points: 15
---

## Problem

Der Tagespreis eines Produkts steht in `prices`. Du darfst einmal kaufen und später verkaufen. Ermittle mit `maximumSingleTradeProfit` den höchstmöglichen Gewinn; ist kein Gewinn möglich, gib `0` zurück.

## Beispiele

- `maximumSingleTradeProfit([7, 1, 5, 3, 6, 4])` → `5`
- `maximumSingleTradeProfit([7, 6, 4, 3, 1])` → `0`

## Einschränkungen

- `1 <= prices.length <= 100000`
- `0 <= prices[i] <= 1000000000`

## Hinweis

Verwende für jeden Verkaufstag den niedrigsten bisher gesehenen Kaufpreis.

## Startcode

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

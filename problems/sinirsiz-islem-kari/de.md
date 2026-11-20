---
slug: sinirsiz-islem-kari
title: Unbegrenzter Handelsgewinn
difficulty: orta
topics: [Greedy-Algorithmus]
points: 25
---

## Problem

Du darfst pro Tag höchstens eine Einheit kaufen oder verkaufen und gleichzeitig höchstens eine Einheit halten. Finde anhand aller Preise den größtmöglichen Gesamtgewinn.

## Beispiele

- `unlimitedTradeProfit([7, 1, 5, 3, 6, 4])` → `7`
- `unlimitedTradeProfit([5, 4, 3])` → `0`

## Einschränkungen

- 1 <= prices.length <= 100000; 0 <= prices[i] <= 100000.

## Hinweis

Jede positive Differenz aufeinanderfolgender Preise trägt zum Gewinn bei.

## Startcode

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

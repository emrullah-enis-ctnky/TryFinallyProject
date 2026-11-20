---
slug: bozuk-para-yollari
title: Münzkombinationen Zählen
difficulty: orta
topics: [Dynamische Programmierung 1D]
points: 30
---

## Problem

Die verschiedenen Münzwerte eines Automaten stehen in `coins`. Ermittle, wie viele Kombinationen die Summe `amount` ergeben, wenn jeder Wert beliebig oft verwendet werden darf. Dieselben Münzen in anderer Reihenfolge ergeben keine neue Kombination.

## Beispiele

- `countCoinWays([1, 2, 5], 5)` → `4`
- `countCoinWays([2], 3)` → `0`

## Einschränkungen

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 1000`; die Werte sind verschieden.
- `0 <= amount <= 1000`
- Die Antwort passt in eine vorzeichenbehaftete 32-Bit-Ganzzahl.

## Hinweis

Verarbeite jeweils einen Münzwert und erweitere damit die Summen, die mit vorherigen Werten möglich sind.

## Startcode

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

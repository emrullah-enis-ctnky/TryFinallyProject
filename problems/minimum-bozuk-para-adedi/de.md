---
slug: minimum-bozuk-para-adedi
title: Minimale Münzanzahl
difficulty: orta
topics: [Dynamische Programmierung 1D]
points: 30
---

## Problem

Du darfst Münzen jeder Sorte unbegrenzt verwenden. Finde die kleinste Münzanzahl für den Betrag oder gib -1 zurück, wenn es unmöglich ist.

## Beispiele

- `minimumCoins([1, 2, 5], 11)` → `3`
- `minimumCoins([2], 3)` → `-1`

## Einschränkungen

- 1 <= coins.length <= 100; 1 <= coins[i] <= 10000; 0 <= amount <= 10000.

## Hinweis

Probiere für jeden Betrag jede mögliche letzte Münze und behalte das kleinste vorherige Ergebnis.

## Startcode

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

---
slug: en-ucuz-merdiven
title: Niedrigste Treppenkosten
difficulty: orta
topics: [Dynamische Programmierung 1D, Arrays]
points: 30
---

## Problem

Die Gebühr für Stufe `i` steht in `cost[i]`. Vom Boden aus darfst du jeweils eine oder zwei Stufen steigen und auf einer der ersten beiden Stufen beginnen. Ermittle mit `minimumClimbCost` die niedrigste Summe der bezahlten Gebühren bis zum oberen Ende.

## Beispiele

- `minimumClimbCost([10, 15, 20])` → `15`
- `minimumClimbCost([1, 100, 1, 1])` → `2`

## Einschränkungen

- `2 <= cost.length <= 100000`
- `0 <= cost[i] <= 1000000000`

## Hinweis

Die günstigsten Kosten für eine Stufe kommen von der günstigeren der beiden vorherigen Möglichkeiten.

## Startcode

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

---
slug: hedefe-en-yakin-cift
title: Nächstes Paar Zum Ziel
difficulty: orta
topics: [Arrays, Zwei Zeiger]
points: 30
---

## Problem

Gegeben sind eine aufsteigend sortierte Preisliste `prices` und ein Zielwert. Schreibe `closestPair`, das die Werte an zwei verschiedenen Indizes zurückgibt, deren Summe dem Ziel am nächsten ist. Bei gleichem Abstand wähle zuerst den kleineren ersten und dann den kleineren zweiten Wert.

## Beispiele

- `closestPair([1, 3, 4, 8], 7)` → `[3, 4]`
- `closestPair([2, 5, 6, 9], 10)` → `[2, 9]`

## Einschränkungen

- `2 <= prices.length <= 100000`
- `prices` ist nicht absteigend sortiert.
- `-1000000000 <= prices[i], target <= 1000000000`

## Hinweis

Liegt die Summe unter dem Ziel, gehe zu einem größeren Wert; liegt sie darüber, zu einem kleineren.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> closestPair(std::vector<int>& prices, int target) { return {}; }
};
```

```java
class Solution {
  public int[] closestPair(int[] prices, int target) { return new int[0]; }
}
```

```python
class Solution:
    def closestPair(self, prices, target):
        return []
```

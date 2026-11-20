---
slug: aralik-sorgulari-toplami
title: Summen Für Bereiche
difficulty: orta
topics: [Präfixsumme, Arrays]
points: 30
---

## Problem

Ein Geschäft speichert tägliche Verkäufe in `sales` und erhält viele Anfragen zu Summen über Tagesbereiche. Jede Anfrage hat die Form `[left, right]`, beide Grenzen sind eingeschlossen. Schreibe `rangeQuerySums`, das alle Ergebnisse in Reihenfolge zurückgibt.

## Beispiele

- `rangeQuerySums([3, -1, 4, 2], [[0, 2], [1, 3]])` → `[6, 5]`
- `rangeQuerySums([7], [[0, 0]])` → `[7]`

## Einschränkungen

- `1 <= sales.length <= 100000`
- `1 <= queries.length <= 100000`
- `0 <= queries[i][0] <= queries[i][1] < sales.length`
- `-1000 <= sales[i] <= 1000`

## Hinweis

Speichere die Summen vom Anfang an, damit du nicht jeden Bereich erneut durchlaufen musst.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> rangeQuerySums(std::vector<int>& sales, std::vector<std::vector<int>>& queries) { return {}; }
};
```

```java
class Solution {
  public int[] rangeQuerySums(int[] sales, int[][] queries) { return new int[0]; }
}
```

```python
class Solution:
    def rangeQuerySums(self, sales, queries):
        return []
```

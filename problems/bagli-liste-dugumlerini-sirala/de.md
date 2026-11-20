---
slug: bagli-liste-dugumlerini-sirala
title: Verkettete Knoten Sortieren
difficulty: zor
topics: [Verkettete Listen, Sortieren]
points: 45
---

## Problem

Eine Liste ist durch die Arrays `values` und `next` sowie den Startindex `head` kodiert. Gib mit `sortedListOrder` die Knotenindizes nach aufsteigendem Wert zurück. Bei gleichen Werten steht der in der Liste zuerst gefundene Knoten zuerst. Ändere die Eingabe-Arrays nicht.

## Beispiele

- `sortedListOrder([4, 1, 3], [1, 2, -1], 0)` → `[1, 2, 0]`
- `sortedListOrder([2, 2], [1, -1], 0)` → `[0, 1]`

## Einschränkungen

- `values.length == next.length` und `0 <= values.length <= 100000`
- `head == -1` oder ein gültiger Knotenindex.
- Die Liste ist zyklenfrei; `-100000 <= values[i] <= 100000`.

## Hinweis

Sammle zuerst die Knotenreihenfolge und sortiere diese Indizes anschließend stabil nach ihren Werten.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> sortedListOrder(std::vector<int>& values, std::vector<int>& next, int head) { return {}; }
};
```

```java
class Solution {
  public int[] sortedListOrder(int[] values, int[] next, int head) { return new int[0]; }
}
```

```python
class Solution:
    def sortedListOrder(self, values, next, head):
        return []
```

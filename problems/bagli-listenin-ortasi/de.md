---
slug: bagli-listenin-ortasi
title: Mittlerer Listenindex
difficulty: kolay
topics: [Verkettete Listen]
points: 20
---

## Problem

Eine einfach verkettete Liste ist durch `values` und `next` kodiert; `head` ist der Startindex und `-1` beendet die Liste. Gib mit `middleListIndex` den Index des mittleren Knotens zurück. Bei gerader Knotenzahl wähle den zweiten mittleren Knoten.

## Beispiele

- `middleListIndex([4, 8, 2, 9], [1, 2, 3, -1], 0)` → `2`
- `middleListIndex([7, 5, 1], [1, 2, -1], 0)` → `1`

## Einschränkungen

- `values.length == next.length` und `0 <= values.length <= 100000`
- `head == -1` oder `0 <= head < values.length`
- Die Liste ist zyklenfrei und alle erreichbaren Indizes sind gültig.

## Hinweis

Bewege einen Zeiger pro Schritt um eins und einen anderen um zwei.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int middleListIndex(std::vector<int>& values, std::vector<int>& next, int head) { return -1; }
};
```

```java
class Solution {
  public int middleListIndex(int[] values, int[] next, int head) { return -1; }
}
```

```python
class Solution:
    def middleListIndex(self, values, next, head):
        return -1
```

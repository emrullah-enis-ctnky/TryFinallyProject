---
slug: iki-sirali-listeyi-birlestir
title: Zwei Sortierte Listen Zusammenführen
difficulty: orta
topics: [Verkettete Listen, Zwei Zeiger]
points: 30
---

## Problem

Zwei aufsteigend sortierte verkettete Listen sind durch getrennte `values`- und `next`-Arrays sowie Kopfindizes kodiert. Führe ihre Knoten mit `mergeEncodedLists` aufsteigend zusammen und gib ihre Werte zurück. Eine leere Liste hat den Kopfindex `-1`.

## Beispiele

- `mergeEncodedLists([1, 4], [1, -1], 0, [2, 3], [1, -1], 0)` → `[1, 2, 3, 4]`
- `mergeEncodedLists([], [], -1, [5], [-1], 0)` → `[5]`

## Einschränkungen

- Je Liste haben `values` und `next` dieselbe Länge; insgesamt gibt es höchstens `100000` Knoten.
- Beide Listen sind zyklenfrei und aufsteigend sortiert.
- Jeder Kopf ist `-1` oder ein gültiger Arrayindex.

## Hinweis

Vergleiche den nächsten Knoten jeder Liste und füge den kleineren Wert hinzu.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> mergeEncodedLists(std::vector<int>& values1, std::vector<int>& next1, int head1, std::vector<int>& values2, std::vector<int>& next2, int head2) { return {}; }
};
```

```java
class Solution {
  public int[] mergeEncodedLists(int[] values1, int[] next1, int head1, int[] values2, int[] next2, int head2) { return new int[0]; }
}
```

```python
class Solution:
    def mergeEncodedLists(self, values1, next1, head1, values2, next2, head2):
        return []
```

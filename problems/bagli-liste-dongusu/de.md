---
slug: bagli-liste-dongusu
title: Zyklus in verketteter Liste
difficulty: orta
topics: [Verkettete Listen]
points: 25
---

## Problem

Die Knoten einer verketteten Liste sind ab `0` nummeriert. `next[i]` speichert den Index des Nachfolgeknotens von `i`; für das Listenende steht dort `-1`. Gegeben ist der Startindex `head`. Schreibe `hasListCycle`, sodass `true` zurückgegeben wird, wenn die Verbindungen ab `head` in einen Zyklus führen, andernfalls `false`.

## Beispiele

- `hasListCycle([1, 2, 3, 1], 0)` → `true`
- `hasListCycle([1, 2, -1], 0)` → `false`

Im ersten Beispiel verlaufen die Verbindungen als `0 → 1 → 2 → 3 → 1` und wiederholen sich.

## Einschränkungen

- `0 <= next.length <= 100000`
- `head` ist `-1` oder ein gültiger Knotenindex.
- Jeder Wert in `next` ist `-1` oder ein gültiger Knotenindex.

## Hinweis

Verwende zwei Zeiger: Einer folgt jeweils einer Verbindung, der andere jeweils zwei.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  bool hasListCycle(std::vector<int>& next, int head) { return false; }
};
```

```java
class Solution {
  public boolean hasListCycle(int[] next, int head) { return false; }
}
```

```python
class Solution:
    def hasListCycle(self, next, head):
        return False
```

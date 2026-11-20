---
slug: bagli-listeyi-ters-cevir
title: Verkettete Liste Umkehren
difficulty: orta
topics: [Verkettete Listen]
points: 30
---

## Problem

Eine einfach verkettete Liste ist durch die Arrays `values` und `next` kodiert: Knoten `i` speichert `values[i]`, und `next[i]` ist der Index des nächsten Knotens; `-1` beendet die Liste. Schreibe `reverseListValues`, das die Werte ab `head` in umgekehrter Reihenfolge zurückgibt.

## Beispiele

- `reverseListValues([4, 1, 7], [1, 2, -1], 0)` → `[7, 1, 4]`
- `reverseListValues([9], [-1], 0)` → `[9]`

## Einschränkungen

- `values.length == next.length`
- `0 <= values.length <= 100000`
- `head == -1` oder `0 <= head < values.length`
- Die Liste enthält keinen Zyklus; jedes erreichbare `next[i]` ist `-1` oder ein gültiger Index.

## Hinweis

Sammle beim Durchlaufen ab dem Kopf die Werte und kehre danach ihre Reihenfolge um.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> reverseListValues(std::vector<int>& values, std::vector<int>& next, int head) { return {}; }
};
```

```java
class Solution {
  public int[] reverseListValues(int[] values, int[] next, int head) { return new int[0]; }
}
```

```python
class Solution:
    def reverseListValues(self, values, next, head):
        return []
```

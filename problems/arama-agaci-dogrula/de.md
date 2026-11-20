---
slug: arama-agaci-dogrula
title: Suchbaum überprüfen
difficulty: orta
topics: [Binäre Suchbäume]
points: 30
---

## Problem

Ein binärer Suchbaum wird in einem Array mit Wurzel an Index `0` kodiert. Die Kinder eines Knotens an Index `i` liegen bei `2 * i + 1` und `2 * i + 2`; `-1` kennzeichnet einen fehlenden Knoten. Jeder vorhandene Knoten hat einen Elternknoten, und alle Werte sind eindeutig. Schreibe `isValidBst`, sodass geprüft wird, ob der Baum die Regeln eines binären Suchbaums erfüllt.

## Beispiele

- `isValidBst([8, 3, 10, 1, 6, -1, 14])` → `true`
- `isValidBst([8, 10, 5])` → `false`

## Einschränkungen

- `0 <= nodes.length <= 10000`
- Knotenwerte sind `-1` (fehlend) oder liegen zwischen `0` und `100000`.
- Knotenwerte sind eindeutig.
- Fehlt die Wurzel, ist der leere Baum gültig.

## Hinweis

Verfolge beim Durchlaufen für jeden Knoten die zulässige Unter- und Obergrenze.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  bool isValidBst(std::vector<int>& nodes) { return false; }
};
```

```java
class Solution {
  public boolean isValidBst(int[] nodes) { return false; }
}
```

```python
class Solution:
    def isValidBst(self, nodes):
        return False
```

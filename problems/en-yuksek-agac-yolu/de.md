---
slug: en-yuksek-agac-yolu
title: Maximale Baumpfadsumme
difficulty: zor
topics: [Bäume]
points: 45
---

## Problem

Ein Binärbaum ist durch `nodes` ab der Wurzel kodiert; die Kindindizes sind `2*i+1` und `2*i+2`. Der Wert `-2147483648` markiert einen leeren Knoten. Maximiere mit `maximumTreePathSum` die Summe entlang eines Pfads zwischen beliebigen zwei Baumknoten. Für einen leeren Baum gib `0` zurück.

## Beispiele

- `maximumTreePathSum([-10, 9, 20, -2147483648, -2147483648, 15, 7])` → `42`
- `maximumTreePathSum([-5])` → `-5`

## Einschränkungen

- `0 <= nodes.length <= 100000`
- Das Array kodiert einen gültigen Binärbaum; unter leeren Knoten stehen keine Werte.
- Knotenwerte liegen zwischen `-10000` und `10000`.

## Hinweis

Ein Knoten kann einen einzelnen Teilpfad an seinen Elternknoten weitergeben; der beste Pfad kann zwei Teilpfade verbinden.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int maximumTreePathSum(std::vector<int>& nodes) { return 0; }
};
```

```java
class Solution {
  public int maximumTreePathSum(int[] nodes) { return 0; }
}
```

```python
class Solution:
    def maximumTreePathSum(self, nodes):
        return 0
```

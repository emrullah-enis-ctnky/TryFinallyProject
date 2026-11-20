---
slug: agac-seviyelerini-don
title: Baumebenen Zurückgeben
difficulty: orta
topics: [Bäume, Warteschlange & Deque]
points: 30
---

## Problem

Ein Binärbaum ist durch das Level-Order-Array `nodes` ab der Wurzel kodiert; `-1` steht für einen leeren Knoten. Gruppiere die Werte jeder Ebene von links nach rechts und gib sie mit `levelValues` zurück. Für einen leeren Baum gib eine leere Liste zurück.

## Beispiele

- `levelValues([8, 3, 10, 1, 6])` → `[[8], [3, 10], [1, 6]]`
- `levelValues([])` → `[]`

## Einschränkungen

- `0 <= nodes.length <= 100000`
- Das Array kodiert einen gültigen Baum mit den Kindindizes `2*i+1` und `2*i+2` ab Wurzelindex `0`; unter leeren Knoten stehen keine Werte.
- `-100000 <= nodes[i] <= 100000`; `-1` markiert einen leeren Knoten.

## Hinweis

Lege beim Verarbeiten einer Ebene die Kinder für die nächste Ebene in die Warteschlange.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> levelValues(std::vector<int>& nodes) { return {}; }
};
```

```java
class Solution {
  public int[][] levelValues(int[] nodes) { return new int[0][0]; }
}
```

```python
class Solution:
    def levelValues(self, nodes):
        return []
```

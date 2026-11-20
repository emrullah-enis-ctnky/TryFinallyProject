---
slug: ikili-arama-agacinda-ara
title: Suche Im Binärsuchbaum
difficulty: kolay
topics: [Binäre Suchbäume, Binäre Suche]
points: 20
---

## Problem

Ein gültiger binärer Suchbaum ist durch das Level-Order-Array `nodes` kodiert; `-1` markiert einen leeren Knoten. Prüfe mit `searchEncodedBst`, ob `target` im Baum vorkommt.

## Beispiele

- `searchEncodedBst([8, 3, 10, 1, 6, -1, 14], 6)` → `true`
- `searchEncodedBst([8, 3, 10], 7)` → `false`

## Einschränkungen

- `0 <= nodes.length <= 100000`
- Das Array kodiert einen gültigen binären Suchbaum in Level-Order ab der Wurzel.
- Knotenwerte liegen zwischen `-100000` und `100000`; `-1` markiert einen leeren Knoten.

## Hinweis

Vergleiche an jedem Knoten den Zielwert und gehe nur in den passenden Teilbaum.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  bool searchEncodedBst(std::vector<int>& nodes, int target) { return false; }
};
```

```java
class Solution {
  public boolean searchEncodedBst(int[] nodes, int target) { return false; }
}
```

```python
class Solution:
    def searchEncodedBst(self, nodes, target):
        return False
```

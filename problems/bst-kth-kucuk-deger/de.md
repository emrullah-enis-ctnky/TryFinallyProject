---
slug: bst-kth-kucuk-deger
title: K-kleinster Suchbaumwert
difficulty: orta
topics: [Binäre Suchbäume, Bäume, Stapel]
points: 30
---

## Problem

Ein gültiger binärer Suchbaum ist durch das Level-Order-Array `nodes` ab der Wurzel kodiert; `-1` markiert einen leeren Knoten. Gib mit `kthSmallestBst` den Wert an Position `k` zurück, wenn alle Werte sortiert sind.

## Beispiele

- `kthSmallestBst([5, 3, 7, 2, 4, 6, 8], 3)` → `4`
- `kthSmallestBst([2, 1, 3], 1)` → `1`

## Einschränkungen

- Der Baum enthält zwischen `1` und `100000` Knoten.
- `1 <= k <=` Anzahl der Knoten
- Knotenwerte sind verschieden; `-1` markiert einen leeren Knoten.

## Hinweis

Eine Inorder-Traversierung eines binären Suchbaums besucht die Werte aufsteigend.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int kthSmallestBst(std::vector<int>& nodes, int k) { return 0; }
};
```

```java
class Solution {
  public int kthSmallestBst(int[] nodes, int k) { return 0; }
}
```

```python
class Solution:
    def kthSmallestBst(self, nodes, k):
        return 0
```

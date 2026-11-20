---
slug: ag-baglantilarini-duzenle
title: Netzwerk Neu Verbinden
difficulty: orta
topics: [Graphen, Greedy-Algorithmus]
points: 30
---

## Problem

Gegeben sind `n` Computer und ungerichtete Kabel `[a, b]`. Du darfst ein Kabel entfernen und zwischen zwei getrennten Komponenten neu anschließen. Ermittle mit `minimumCableMoves` die kleinste Zahl solcher Änderungen, um alle Computer zu verbinden. Gibt es nicht genug Kabel, gib `-1` zurück.

## Beispiele

- `minimumCableMoves(4, [[0, 1], [0, 2], [1, 2]])` → `1`
- `minimumCableMoves(6, [[0, 1], [0, 2], [0, 3], [1, 2]])` → `-1`

## Einschränkungen

- `1 <= n <= 1000`
- `0 <= edges.length <= 10000`
- Jedes Kabel ist `[a, b]`, mit `0 <= a, b < n`.

## Hinweis

Zähle zuerst die verbundenen Komponenten; jede neue Verbindung vereint zwei Komponenten.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int minimumCableMoves(int n, std::vector<std::vector<int>>& edges) { return 0; }
};
```

```java
class Solution {
  public int minimumCableMoves(int n, int[][] edges) { return 0; }
}
```

```python
class Solution:
    def minimumCableMoves(self, n, edges):
        return 0
```

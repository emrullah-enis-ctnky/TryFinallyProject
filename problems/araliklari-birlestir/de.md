---
slug: araliklari-birlestir
title: Überlappende Intervalle vereinigen
difficulty: orta
topics: [Intervalle, Sortieren]
points: 25
---

## Problem

Gegeben sind Intervalle, deren Zeilen jeweils `[start, end]` sind. Schreibe `mergeIntervals`, sodass sich überschneidende oder einen Endpunkt teilende Intervalle zusammengeführt und nach Start sortiert zurückgegeben werden.

## Beispiele

- `mergeIntervals([[1, 3], [2, 6], [8, 10]])` → `[[1, 6], [8, 10]]`
- `mergeIntervals([[1, 2], [2, 4]])` → `[[1, 4]]`

Im ersten Beispiel überschneiden sich die ersten beiden Intervalle; das dritte bleibt getrennt.

## Einschränkungen

- `0 <= intervals.length <= 10000`
- Für jedes Intervall gilt `-10000 <= start <= end <= 10000`.
- Gib die Ergebnisintervalle nach Startwert aufsteigend sortiert zurück.

## Hinweis

Sortiere die Intervalle nach Start und vergleiche jedes mit dem Ende des zuletzt zusammengeführten Intervalls.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> mergeIntervals(std::vector<std::vector<int>>& intervals) { return {}; }
};
```

```java
class Solution {
  public int[][] mergeIntervals(int[][] intervals) { return new int[][]{}; }
}
```

```python
class Solution:
    def mergeIntervals(self, intervals):
        return []
```

---
slug: aralik-secimi
title: Überlappungsfreie Intervalle Wählen
difficulty: orta
topics: [Greedy-Algorithmus]
points: 25
---

## Problem

Wähle möglichst viele überschneidungsfreie Aufgaben aus einem Kalender. Jedes Intervall ist `[start, end]`; die nächste Aufgabe darf beginnen, wenn die vorherige endet.

## Beispiele

- `maxNonOverlappingIntervals([[1, 3], [2, 4], [3, 5], [6, 7]])` → `3`
- `maxNonOverlappingIntervals([[1, 5], [2, 3]])` → `1`

## Einschränkungen

- 0 <= intervals.length <= 100000; start < end; Grenzen passen in int.

## Hinweis

Die Aufgabe mit dem frühesten Ende lässt den meisten Platz für weitere Aufgaben.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maxNonOverlappingIntervals(std::vector<std::vector<int>>& intervals) { return 0; }
};
```

```java
class Solution {
  public int maxNonOverlappingIntervals(int[][] intervals) { return 0; }
}
```

```python
class Solution:
    def maxNonOverlappingIntervals(self, intervals):
        return 0
```

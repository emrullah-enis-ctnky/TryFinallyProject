---
slug: tek-tepe-indisi
title: Index Des Einzelnen Gipfels
difficulty: orta
topics: [Binäre Suche, Arrays]
points: 30
---

## Problem

Die Höhen eines Wanderwegs stehen in `heights`. Die Werte steigen strikt bis zu einem Gipfel und fallen danach strikt ab. Finde mit `peakIndex` den Index des Gipfels.

## Beispiele

- `peakIndex([1, 3, 5, 4, 2])` → `2`
- `peakIndex([7])` → `0`

## Einschränkungen

- `1 <= heights.length <= 100000`
- Bei mehr als einem Wert sind benachbarte Werte verschieden und es gibt genau einen Gipfel.

## Hinweis

Die Richtung des Anstiegs an der Mitte zeigt, auf welcher Seite der Gipfel liegt.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int peakIndex(std::vector<int>& heights) { return 0; }
};
```

```java
class Solution {
  public int peakIndex(int[] heights) { return 0; }
}
```

```python
class Solution:
    def peakIndex(self, heights):
        return 0
```

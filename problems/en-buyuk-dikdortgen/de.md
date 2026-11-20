---
slug: en-buyuk-dikdortgen
title: Größte Histogrammfläche
difficulty: zor
topics: [Stapel, Arrays]
points: 45
---

## Problem

Die Höhen benachbarter Histogrammbalken stehen in `heights`; jeder Balken ist einen Schritt breit. Ermittle mit `largestHistogramArea` die größte Rechteckfläche unter einer zusammenhängenden Balkengruppe.

## Beispiele

- `largestHistogramArea([2, 1, 5, 6, 2, 3])` → `10`
- `largestHistogramArea([2, 4])` → `4`

## Einschränkungen

- `0 <= heights.length <= 100000`
- `0 <= heights[i] <= 1000000000`
- Die Antwort passt in eine vorzeichenbehaftete 64-Bit-Ganzzahl.

## Hinweis

Erscheint ein niedrigerer Balken, kannst du die verfügbare Breite der wartenden Balken berechnen.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  long long largestHistogramArea(std::vector<int>& heights) { return 0; }
};
```

```java
class Solution {
  public long largestHistogramArea(int[] heights) { return 0; }
}
```

```python
class Solution:
    def largestHistogramArea(self, heights):
        return 0
```

---
slug: aralik-kesisimleri
title: Intervallschnittmengen
difficulty: orta
topics: [Intervalle]
points: 25
---

## Problem

Finde gemeinsame Intervalle zweier nach Startzeit sortierter Zeitpläne, die intern überschneidungsfrei sind. Berücksichtige beide Endpunkte.

## Beispiele

- `intervalIntersections([[0, 2], [5, 10]], [[1, 5], [8, 12]])` → `[[1,2],[5,5],[8,10]]`
- `intervalIntersections([[1, 3]], [[4, 6]])` → `[]`

## Einschränkungen

- 0 <= first.length, second.length <= 1000; Intervalle sind nach Start sortiert; start <= end.

## Hinweis

Berechne den Schnitt und gehe beim früher endenden Intervall weiter.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> intervalIntersections(std::vector<std::vector<int>>& first, std::vector<std::vector<int>>& second) { return []; }
};
```

```java
class Solution {
  public int[][] intervalIntersections(int[][] first, int[][] second) { return []; }
}
```

```python
class Solution:
    def intervalIntersections(self, first, second):
        return []
```

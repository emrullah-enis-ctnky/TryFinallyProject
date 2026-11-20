---
slug: balonlari-patlat
title: Ballons Mit Pfeilen
difficulty: orta
topics: [Intervalle, Greedy-Algorithmus, Sortieren]
points: 30
---

## Problem

Jeder Ballon deckt auf einer horizontalen Achse das abgeschlossene Intervall `[start, end]` ab. Ein Pfeil an Position `x` lässt alle Ballons mit `start <= x <= end` platzen. Ermittle mit `minimumArrows` die kleinste Zahl benötigter Pfeile.

## Beispiele

- `minimumArrows([[10, 16], [2, 8], [1, 6], [7, 12]])` → `2`
- `minimumArrows([[1, 2], [2, 3], [3, 4]])` → `2`

## Einschränkungen

- `0 <= balloons.length <= 100000`
- `-1000000000 <= balloons[i][0] <= balloons[i][1] <= 1000000000`

## Hinweis

Wähle für einen Pfeil den kleinsten Endpunkt unter den Intervallen, die er abdeckt.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int minimumArrows(std::vector<std::vector<int>>& balloons) { return 0; }
};
```

```java
class Solution {
  public int minimumArrows(int[][] balloons) { return 0; }
}
```

```python
class Solution:
    def minimumArrows(self, balloons):
        return 0
```

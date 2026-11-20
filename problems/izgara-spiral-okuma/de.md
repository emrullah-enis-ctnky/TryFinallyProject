---
slug: izgara-spiral-okuma
title: Raster Spiralförmig Lesen
difficulty: orta
topics: [Arrays]
points: 25
---

## Problem

Lies die Zellen eines Inventarrasters im Uhrzeigersinn vom äußeren Rand nach innen. `spiralOrder` gibt die Werte in einem Array zurück.

## Beispiele

- `spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` → `[1,2,3,6,9,8,7,4,5]`
- `spiralOrder([[1, 2, 3, 4]])` → `[1,2,3,4]`

## Einschränkungen

- 0 <= Zeilen, Spalten <= 100; alle Zeilen sind gleich lang.

## Hinweis

Verfolge vier Grenzen und verschiebe jede nach dem Lesen nach innen.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> spiralOrder(std::vector<std::vector<int>>& matrix) { return []; }
};
```

```java
class Solution {
  public int[] spiralOrder(int[][] matrix) { return []; }
}
```

```python
class Solution:
    def spiralOrder(self, matrix):
        return []
```

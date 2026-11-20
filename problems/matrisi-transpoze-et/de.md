---
slug: matrisi-transpoze-et
title: Matrix Transponieren
difficulty: orta
topics: [Arrays]
points: 25
---

## Problem

Transponiere eine Tabelle, indem du Zeilen und Spalten vertauschst. `transpose` gibt eine neue Matrix zurück. Die Eingabe kann leer sein.

## Beispiele

- `transpose([[1, 2, 3], [4, 5, 6]])` → `[[1,4],[2,5],[3,6]]`
- `transpose([[7]])` → `[[7]]`

## Einschränkungen

- 0 <= Zeilen, Spalten <= 100; alle Zeilen sind gleich lang; -1000 <= Zelle <= 1000.

## Hinweis

Die Eingabezelle `[r][c]` kommt im Ergebnis an Position `[c][r]`.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> transpose(std::vector<std::vector<int>>& matrix) { return []; }
};
```

```java
class Solution {
  public int[][] transpose(int[][] matrix) { return []; }
}
```

```python
class Solution:
    def transpose(self, matrix):
        return []
```

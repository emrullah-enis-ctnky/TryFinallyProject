---
slug: sirali-matriste-ara
title: Sortierte Matrix Durchsuchen
difficulty: orta
topics: [Binäre Suche, Arrays]
points: 25
---

## Problem

Lagerregale werden durch das 2D-Array `matrix` dargestellt. Jede Zeile ist aufsteigend sortiert, und der erste Wert jeder Zeile ist größer als der letzte Wert der vorherigen Zeile. Schreibe `searchSortedMatrix`, das `true` zurückgibt, wenn `target` vorkommt, sonst `false`.

## Beispiele

- `searchSortedMatrix([[1, 3, 5], [8, 10, 12]], 10)` → `true`
- `searchSortedMatrix([[1, 3, 5], [8, 10, 12]], 7)` → `false`

## Einschränkungen

- `1 <= matrix.length, matrix[i].length <= 1000`
- Die Matrix ist rechteckig und alle Werte sind zeilenweise aufsteigend.
- `-1000000000 <= matrix[i][j], target <= 1000000000`

## Hinweis

Berechne Zeilen- und Spaltenindizes, als wären alle Zellen ein einziges sortiertes Array.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  bool searchSortedMatrix(std::vector<std::vector<int>>& matrix, int target) { return false; }
};
```

```java
class Solution {
  public boolean searchSortedMatrix(int[][] matrix, int target) { return false; }
}
```

```python
class Solution:
    def searchSortedMatrix(self, matrix, target):
        return False
```

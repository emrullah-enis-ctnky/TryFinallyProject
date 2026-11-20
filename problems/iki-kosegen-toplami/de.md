---
slug: iki-kosegen-toplami
title: Beide Diagonalen Summieren
difficulty: kolay
topics: [Arrays]
points: 15
---

## Problem

Addiere die Werte auf beiden Diagonalen eines quadratischen Bretts. Zähle das mittlere Feld bei ungerader Größe nur einmal.

## Beispiele

- `diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` → `25`
- `diagonalSum([[5]])` → `5`

## Einschränkungen

- 1 <= n <= 1000; matrix hat n x n; -10000 <= Zelle <= 10000.

## Hinweis

Berechne für jede Zeile die Spalten der linken und rechten Diagonale.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int diagonalSum(std::vector<std::vector<int>>& matrix) { return 0; }
};
```

```java
class Solution {
  public int diagonalSum(int[][] matrix) { return 0; }
}
```

```python
class Solution:
    def diagonalSum(self, matrix):
        return 0
```

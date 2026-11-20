---
slug: satir-toplamlari
title: Zeilensummen
difficulty: kolay
topics: [Arrays]
points: 15
---

## Problem

Addiere die Mengen jeder Zeile einer Lagertabelle. `rowSums` gibt für jede Zeile eine Summe in derselben Reihenfolge zurück.

## Beispiele

- `rowSums([[2, 3], [4, 1, 5]])` → `[5,10]`
- `rowSums([[], [7]])` → `[0,7]`

## Einschränkungen

- 0 <= matrix.length <= 10000; jede Zeile hat höchstens 10000 Werte; Werte liegen zwischen 0 und 1000.

## Hinweis

Durchlaufe jede Zeile einzeln.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> rowSums(std::vector<std::vector<int>>& matrix) { return []; }
};
```

```java
class Solution {
  public int[] rowSums(int[][] matrix) { return []; }
}
```

```python
class Solution:
    def rowSums(self, matrix):
        return []
```

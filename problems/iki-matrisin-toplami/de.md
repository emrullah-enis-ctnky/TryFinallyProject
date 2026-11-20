---
slug: iki-matrisin-toplami
title: Zwei Matrizen Addieren
difficulty: kolay
topics: [Arrays]
points: 15
---

## Problem

Addiere zwei Sensortabellen gleicher Größe Zelle für Zelle. `addMatrices` gibt die Ergebnismatrix zurück.

## Beispiele

- `addMatrices([[1, 2], [3, 4]], [[5, 1], [0, 2]])` → `[[6,3],[3,6]]`
- `addMatrices([[], []], [[], []])` → `[[],[]]`

## Einschränkungen

- Die Matrizen haben gleiche Abmessungen; höchstens 100 Zeilen und Spalten; -1000 <= Zelle <= 1000.

## Hinweis

Addiere für jede Zelle die Werte an derselben Position.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> addMatrices(std::vector<std::vector<int>>& a, std::vector<std::vector<int>>& b) { return []; }
};
```

```java
class Solution {
  public int[][] addMatrices(int[][] a, int[][] b) { return []; }
}
```

```python
class Solution:
    def addMatrices(self, a, b):
        return []
```

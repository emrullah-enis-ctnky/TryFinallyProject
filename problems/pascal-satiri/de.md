---
slug: pascal-satiri
title: Pascalsche Dreieckszeile
difficulty: kolay
topics: [Dynamische Programmierung 1D]
points: 15
---

## Problem

Gib die nullbasierte Zeile `rowIndex` des Pascalschen Dreiecks zurück. Jeder innere Wert ist die Summe seiner beiden Nachbarn in der Zeile darüber.

## Beispiele

- `pascalRow(3)` → `[1,3,3,1]`
- `pascalRow(0)` → `[1]`

## Einschränkungen

- 0 <= rowIndex <= 30.

## Hinweis

Aktualisiere ein Array von rechts nach links, damit vorherige Werte erhalten bleiben.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> pascalRow(int rowIndex) { return []; }
};
```

```java
class Solution {
  public int[] pascalRow(int rowIndex) { return []; }
}
```

```python
class Solution:
    def pascalRow(self, rowIndex):
        return []
```

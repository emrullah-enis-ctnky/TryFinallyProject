---
slug: iki-sirali-dizinin-mediani
title: Median Zweier Sortierter Arrays
difficulty: zor
topics: [Binäre Suche, Suchen]
points: 40
---

## Problem

Finde den Median zweier aufsteigender Messarrays, als wären sie zusammengeführt. Beide Eingaben sind nicht leer.

## Beispiele

- `medianOfSortedArrays([1, 3], [2])` → `2.0`
- `medianOfSortedArrays([1, 2], [3, 4])` → `2.5`

## Einschränkungen

- 0 <= first.length, second.length <= 100000; Gesamtlänge mindestens 1; Arrays sind aufsteigend sortiert.

## Hinweis

Suche die Trennstelle im kürzeren Array per binärer Suche.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  double medianOfSortedArrays(std::vector<int>& first, std::vector<int>& second) { return 0.0; }
};
```

```java
class Solution {
  public double medianOfSortedArrays(int[] first, int[] second) { return 0.0; }
}
```

```python
class Solution:
    def medianOfSortedArrays(self, first, second):
        return 0.0
```

---
slug: araliga-ekleme
title: Intervall Einfügen
difficulty: orta
topics: [Intervalle]
points: 25
---

## Problem

Füge ein neues Intervall in eine nach Start sortierte, überschneidungsfreie Liste ein. Fasse alle überlappenden Intervalle zusammen und gib das sortierte Ergebnis zurück.

## Beispiele

- `insertInterval([[1, 3], [6, 9]], [2, 5])` → `[[1,5],[6,9]]`
- `insertInterval([[1, 2], [3, 5], [6, 7]], [4, 6])` → `[[1,2],[3,7]]`

## Einschränkungen

- 0 <= intervals.length <= 10000; Intervalle sind nach Start sortiert und überschneidungsfrei; start <= end.

## Hinweis

Füge zuerst frühere Intervalle, dann das zusammengeführte Intervall und danach die restlichen hinzu.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> insertInterval(std::vector<std::vector<int>>& intervals, std::vector<int>& added) { return []; }
};
```

```java
class Solution {
  public int[][] insertInterval(int[][] intervals, int[] added) { return []; }
}
```

```python
class Solution:
    def insertInterval(self, intervals, added):
        return []
```

---
slug: ortak-elemanlar
title: Gemeinsame Einzelwerte
difficulty: orta
topics: [Hashing]
points: 25
---

## Problem

Finde Werte, die in zwei Inventarlisten vorkommen. `commonValues` soll jeden gemeinsamen Wert einmal in aufsteigender Reihenfolge zurückgeben.

## Beispiele

- `commonValues([4, 2, 4, 1], [2, 4, 4, 7])` → `[2,4]`
- `commonValues([1, 3], [2, 4])` → `[]`

## Einschränkungen

- 0 <= first.length, second.length <= 100000; -100000 <= Werte <= 100000

## Hinweis

Lege eine Liste in eine Menge, finde gemeinsame Werte und sortiere das Ergebnis.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> commonValues(std::vector<int>& first, std::vector<int>& second) { return []; }
};
```

```java
class Solution {
  public int[] commonValues(int[] first, int[] second) { return []; }
}
```

```python
class Solution:
    def commonValues(self, first, second):
        return []
```

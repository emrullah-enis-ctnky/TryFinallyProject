---
slug: sirali-kayit-araligi-adedi
title: Häufigkeit Im Sortierten Bereich
difficulty: orta
topics: [Binäre Suche, Arrays]
points: 30
---

## Problem

Das aufsteigend sortierte Array `codes` kann denselben Code mehrfach enthalten. Ermittle mit `countCodeOccurrences`, wie oft `target` vorkommt. Deine Lösung darf nicht das gesamte Array durchsuchen.

## Beispiele

- `countCodeOccurrences([1, 2, 2, 2, 5], 2)` → `3`
- `countCodeOccurrences([1, 3, 5], 4)` → `0`

## Einschränkungen

- `0 <= codes.length <= 1000000`
- `codes` ist aufsteigend sortiert.
- `-1000000000 <= codes[i], target <= 1000000000`

## Hinweis

Finde mit binärer Suche die erste und letzte mögliche Position des Zielwerts.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int countCodeOccurrences(std::vector<int>& codes, int target) { return 0; }
};
```

```java
class Solution {
  public int countCodeOccurrences(int[] codes, int target) { return 0; }
}
```

```python
class Solution:
    def countCodeOccurrences(self, codes, target):
        return 0
```

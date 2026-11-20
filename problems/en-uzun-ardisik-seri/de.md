---
slug: en-uzun-ardisik-seri
title: Längste Folge Aufeinanderfolgender Zahlen
difficulty: orta
topics: [Hashing, Arrays]
points: 30
---

## Problem

Inventarnummern stehen unsortiert im Array `codes`. Finde mit `longestConsecutiveRun` die Länge der längsten Gruppe aufeinanderfolgender Werte, unabhängig davon, ob sie im Array nebeneinander stehen.

## Beispiele

- `longestConsecutiveRun([100, 4, 200, 1, 3, 2])` → `4`
- `longestConsecutiveRun([9, 1, 5])` → `1`

## Einschränkungen

- `0 <= codes.length <= 100000`
- `-1000000000 <= codes[i] <= 1000000000`

## Hinweis

Beginne eine Folge nur, wenn der vorherige Wert in der Menge fehlt.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int longestConsecutiveRun(std::vector<int>& codes) { return 0; }
};
```

```java
class Solution {
  public int longestConsecutiveRun(int[] codes) { return 0; }
}
```

```python
class Solution:
    def longestConsecutiveRun(self, codes):
        return 0
```

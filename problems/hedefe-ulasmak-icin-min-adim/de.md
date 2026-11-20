---
slug: hedefe-ulasmak-icin-min-adim
title: Minimale Sprünge Zum Ziel
difficulty: orta
topics: [Greedy-Algorithmus]
points: 30
---

## Problem

Jede Position gibt die maximal erlaubte Sprungweite an. Finde die kleinste Sprungzahl vom Anfang bis zum Ende oder gib -1 zurück, wenn das Ziel unerreichbar ist.

## Beispiele

- `minimumJumps([2, 3, 1, 1, 4])` → `2`
- `minimumJumps([3, 2, 1, 0, 4])` → `-1`

## Einschränkungen

- 1 <= jumps.length <= 100000; 0 <= jumps[i] <= 100000.

## Hinweis

Verfolge die am weitesten erreichbare Grenze und die Sprünge, um sie zu erweitern.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int minimumJumps(std::vector<int>& jumps) { return 0; }
};
```

```java
class Solution {
  public int minimumJumps(int[] jumps) { return 0; }
}
```

```python
class Solution:
    def minimumJumps(self, jumps):
        return 0
```

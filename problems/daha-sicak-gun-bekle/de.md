---
slug: daha-sicak-gun-bekle
title: Nächster Wärmerer Tag
difficulty: orta
topics: [Stapel, Arrays]
points: 30
---

## Problem

Die Tagestemperaturen stehen in `temperatures`. Gib für jeden Tag zurück, wie viele Tage bis zum nächsten wärmeren Tag vergehen. Gibt es später keinen wärmeren Tag, gib `0` zurück.

## Beispiele

- `daysUntilWarmer([73, 74, 75, 71, 69, 72, 76, 73])` → `[1, 1, 4, 2, 1, 1, 0, 0]`
- `daysUntilWarmer([30, 40, 50])` → `[1, 1, 0]`

## Einschränkungen

- `1 <= temperatures.length <= 100000`
- `-50000 <= temperatures[i] <= 50000`

## Hinweis

Lege Tage ohne wärmeren Messwert in einem Stapel mit nicht zunehmenden Temperaturen ab.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> daysUntilWarmer(std::vector<int>& temperatures) { return {}; }
};
```

```java
class Solution {
  public int[] daysUntilWarmer(int[] temperatures) { return new int[0]; }
}
```

```python
class Solution:
    def daysUntilWarmer(self, temperatures):
        return []
```

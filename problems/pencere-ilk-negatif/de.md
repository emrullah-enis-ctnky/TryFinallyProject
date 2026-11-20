---
slug: pencere-ilk-negatif
title: Erster Negativwert Je Fenster
difficulty: orta
topics: [Warteschlange & Deque, Gleitendes Fenster, Arrays]
points: 30
---

## Problem

Die Messwerte eines Geräts stehen in `values`. Gib für jeden zusammenhängenden Abschnitt der Länge `k` den ersten negativen Wert in Reihenfolge zurück. Enthält ein Abschnitt keinen negativen Wert, verwende dafür `0`.

## Beispiele

- `firstNegativePerWindow([12, -1, -7, 8, -15, 30, 16], 3)` → `[-1, -1, -7, -15, -15]`
- `firstNegativePerWindow([2, 3, 4], 2)` → `[0, 0]`

## Einschränkungen

- `1 <= k <= values.length <= 100000`
- `-100000 <= values[i] <= 100000`

## Hinweis

Speichere die Indizes negativer Werte im Fenster der Reihe nach.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> firstNegativePerWindow(std::vector<int>& values, int k) { return {}; }
};
```

```java
class Solution {
  public int[] firstNegativePerWindow(int[] values, int k) { return new int[0]; }
}
```

```python
class Solution:
    def firstNegativePerWindow(self, values, k):
        return []
```

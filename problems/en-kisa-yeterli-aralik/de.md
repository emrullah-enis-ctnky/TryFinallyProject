---
slug: en-kisa-yeterli-aralik
title: Kürzester Ausreichender Bereich
difficulty: orta
topics: [Arrays, Gleitendes Fenster]
points: 30
---

## Problem

Die positiven Tagesumsätze eines Geschäfts stehen in `sales`. Gib die Länge des kürzesten zusammenhängenden Tagesbereichs zurück, dessen Umsatz mindestens `target` beträgt. Gibt es keinen solchen Bereich, gib `0` zurück.

## Beispiele

- `shortestEnoughRange([2, 3, 1, 2, 4, 3], 7)` → `2`
- `shortestEnoughRange([1, 1, 1], 5)` → `0`

## Einschränkungen

- `1 <= sales.length <= 100000`
- `1 <= sales[i], target <= 1000000000`

## Hinweis

Bei positiven Umsätzen kannst du den linken Rand vorschieben, sobald das Fenster den Grenzwert erreicht.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int shortestEnoughRange(std::vector<int>& sales, int target) { return 0; }
};
```

```java
class Solution {
  public int shortestEnoughRange(int[] sales, int target) { return 0; }
}
```

```python
class Solution:
    def shortestEnoughRange(self, sales, target):
        return 0
```

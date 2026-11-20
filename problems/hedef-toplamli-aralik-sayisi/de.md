---
slug: hedef-toplamli-aralik-sayisi
title: Bereiche Mit Zielsummen Zählen
difficulty: orta
topics: [Präfixsumme, Hashing]
points: 30
---

## Problem

Die fortlaufenden Messwerte eines Geräts stehen in `values`. Zähle mit `countTargetRanges` die zusammenhängenden Bereiche, deren Summe genau `target` beträgt.

## Beispiele

- `countTargetRanges([1, 1, 1], 2)` → `2`
- `countTargetRanges([1, -1, 0], 0)` → `3`

## Einschränkungen

- `1 <= values.length <= 100000`
- `-1000 <= values[i], target <= 1000`
- Die Antwort passt in eine vorzeichenbehaftete 64-Bit-Ganzzahl.

## Hinweis

Ein gültiger Bereich entsteht, wenn die Differenz zweier Präfixsummen dem Ziel entspricht.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  long long countTargetRanges(std::vector<int>& values, int target) { return 0; }
};
```

```java
class Solution {
  public long countTargetRanges(int[] values, int target) { return 0; }
}
```

```python
class Solution:
    def countTargetRanges(self, values, target):
        return 0
```

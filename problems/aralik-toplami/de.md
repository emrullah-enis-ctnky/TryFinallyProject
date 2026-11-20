---
slug: aralik-toplami
title: Summe eines Teilbereichs
difficulty: kolay
topics: [Arrays, Präfixsumme]
points: 15
---

## Problem

Gegeben sind ein ganzzahliges Array sowie die Indizes `left` und `right`. Schreibe `rangeSum`, sodass die Summe der Elemente von `left` bis einschließlich `right` zurückgegeben wird.

## Beispiele

- `rangeSum([2, 4, 1, 7, 3], 1, 3)` → `12`
- `rangeSum([-5, 8, -2], 0, 2)` → `1`

Der erste Bereich enthält `[4, 1, 7]`; ihre Summe ist `12`.

## Einschränkungen

- `1 <= nums.length <= 100000`
- `0 <= left <= right < nums.length`
- `-10000 <= nums[i] <= 10000`
- Das Ergebnis passt in eine vorzeichenbehaftete 32-Bit-Ganzzahl.

## Hinweis

Verwende fortlaufende Summen vom Anfang des Arrays bis zur Bereichsgrenze.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int rangeSum(std::vector<int>& nums, int left, int right) { return 0; }
};
```

```java
class Solution {
  public int rangeSum(int[] nums, int left, int right) { return 0; }
}
```

```python
class Solution:
    def rangeSum(self, nums, left, right):
        return 0
```

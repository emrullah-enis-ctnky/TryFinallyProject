---
slug: en-yuksek-alt-dizi-toplami
title: Größte Teilsumme
difficulty: orta
topics: [Arrays, Dynamische Programmierung 1D]
points: 30
---

## Problem

Tägliche Gewinnänderungen stehen in `changes`. Finde mit `maximumSubarraySum` die größte Summe eines zusammenhängenden Bereichs mit mindestens einem Tag.

## Beispiele

- `maximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])` → `6`
- `maximumSubarraySum([-8, -3, -5])` → `-3`

## Einschränkungen

- `1 <= changes.length <= 100000`
- `-10000 <= changes[i] <= 10000`

## Hinweis

Vergleiche an jeder Position, ob du den vorherigen Bereich fortsetzt oder einen neuen beginnst.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int maximumSubarraySum(std::vector<int>& changes) { return 0; }
};
```

```java
class Solution {
  public int maximumSubarraySum(int[] changes) { return 0; }
}
```

```python
class Solution:
    def maximumSubarraySum(self, changes):
        return 0
```

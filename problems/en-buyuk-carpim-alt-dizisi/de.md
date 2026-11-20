---
slug: en-buyuk-carpim-alt-dizisi
title: Größtes Produkt Einer Teilfolge
difficulty: orta
topics: [Dynamische Programmierung 1D]
points: 30
---

## Problem

Finde das größte Produkt einer zusammenhängenden Teilfolge mit mindestens einem Messwert.

## Beispiele

- `maxProductSubarray([2, 3, -2, 4])` → `6`
- `maxProductSubarray([-2, 0, -1])` → `0`

## Einschränkungen

- 1 <= nums.length <= 10; -3 <= nums[i] <= 3; das Ergebnis passt in int.

## Hinweis

Ein negativer Wert kann das kleinste Produkt zum größten machen; verfolge beide Extreme.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maxProductSubarray(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int maxProductSubarray(int[] nums) { return 0; }
}
```

```python
class Solution:
    def maxProductSubarray(self, nums):
        return 0
```

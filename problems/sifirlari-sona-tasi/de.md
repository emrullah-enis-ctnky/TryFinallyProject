---
slug: sifirlari-sona-tasi
title: Nullen ans Ende
difficulty: kolay
topics: [Arrays, Zwei Zeiger]
points: 15
---

## Problem

Nullwerte in einem Sensorprotokoll stehen für nicht lesbare Messungen. Schreibe `moveZerosToEnd`, das ein neues Array zurückgibt, in dem alle Werte ungleich null ihre Reihenfolge behalten und alle Nullen am Ende stehen.

## Beispiele

- `moveZerosToEnd([0, 4, 0, 2, 7])` → `[4, 2, 7, 0, 0]`
- `moveZerosToEnd([1, 3])` → `[1, 3]`

## Einschränkungen

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## Hinweis

Verfolge die nächste Position für einen Wert ungleich null im Ergebnis.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> moveZerosToEnd(std::vector<int>& nums) { return {}; }
};
```

```java
class Solution {
  public int[] moveZerosToEnd(int[] nums) { return new int[0]; }
}
```

```python
class Solution:
    def moveZerosToEnd(self, nums):
        return []
```

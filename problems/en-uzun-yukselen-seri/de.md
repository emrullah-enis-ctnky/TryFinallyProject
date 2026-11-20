---
slug: en-uzun-yukselen-seri
title: Längste Anstiegsfolge
difficulty: kolay
topics: [Arrays]
points: 15
---

## Problem

Ein Sensor speichert aufeinanderfolgende Messwerte in `nums`. Schreibe `longestRisingRun`, das die Länge des längsten zusammenhängenden Abschnitts zurückgibt, in dem jeder Wert strikt größer als der vorherige ist.

## Beispiele

- `longestRisingRun([1, 2, 2, 4, 6])` → `3`
- `longestRisingRun([5, 4, 3])` → `1`

## Einschränkungen

- `1 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## Hinweis

Beginne eine neue Folge, sobald die Messwerte nicht mehr steigen.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int longestRisingRun(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int longestRisingRun(int[] nums) { return 0; }
}
```

```python
class Solution:
    def longestRisingRun(self, nums):
        return 0
```

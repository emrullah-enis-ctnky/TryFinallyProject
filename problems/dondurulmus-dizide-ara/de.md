---
slug: dondurulmus-dizide-ara
title: Suche im gedrehten Array
difficulty: orta
topics: [Binäre Suche, Arrays]
points: 25
---

## Problem

Ein aufsteigend sortiertes Array verschiedener Werte wurde an einer unbekannten Stelle gedreht. Schreibe `searchRotated`, sodass der Index des Ziels oder `-1` zurückgegeben wird, falls es fehlt.

## Beispiele

- `searchRotated([4, 5, 6, 7, 0, 1, 2], 0)` → `4`
- `searchRotated([4, 5, 6, 7, 0, 1, 2], 3)` → `-1`

## Einschränkungen

- `0 <= nums.length <= 100000`
- Das Array enthält keine Duplikate.
- `-100000 <= nums[i], target <= 100000`

## Hinweis

Bestimme in jedem Schritt, welche Hälfte sortiert ist, und suche in der Hälfte weiter, die das Ziel enthalten kann.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int searchRotated(std::vector<int>& nums, int target) { return -1; }
};
```

```java
class Solution {
  public int searchRotated(int[] nums, int target) { return -1; }
}
```

```python
class Solution:
    def searchRotated(self, nums, target):
        return -1
```

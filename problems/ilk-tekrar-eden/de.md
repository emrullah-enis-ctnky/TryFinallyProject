---
slug: ilk-tekrar-eden
title: Erster Wiederholter Wert
difficulty: orta
topics: [Hashing]
points: 25
---

## Problem

Finde den ersten Wert in einem Ereignisstrom, der bereits vorgekommen ist. `firstRepeated` gibt den zuerst erneut gesehenen Wert zurück oder -1, falls es keine Wiederholung gibt.

## Beispiele

- `firstRepeated([4, 8, 3, 8, 4])` → `8`
- `firstRepeated([1, 2, 3])` → `-1`

## Einschränkungen

- 0 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hinweis

Speichere bereits gesehene Werte in einer Menge.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int firstRepeated(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int firstRepeated(int[] nums) { return 0; }
}
```

```python
class Solution:
    def firstRepeated(self, nums):
        return 0
```

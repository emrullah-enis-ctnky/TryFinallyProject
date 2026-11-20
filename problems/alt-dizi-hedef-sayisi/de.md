---
slug: alt-dizi-hedef-sayisi
title: Teilfolgen Mit Zielsummen
difficulty: orta
topics: [Präfixsumme]
points: 30
---

## Problem

Zähle zusammenhängende Bereiche eines Ereignisstroms mit Summe `target`. Bereiche mit anderen Anfangs- oder Endpositionen zählen separat.

## Beispiele

- `countTargetSubarrays([1, 1, 1], 2)` → `2`
- `countTargetSubarrays([1, 2, 3], 3)` → `2`

## Einschränkungen

- 0 <= nums.length <= 60000; -1000 <= nums[i], target <= 1000; die Antwort passt in int.

## Hinweis

Verfolge für jede Präfixsumme, wie oft die benötigte frühere Summe vorkam.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int countTargetSubarrays(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int countTargetSubarrays(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def countTargetSubarrays(self, nums, target):
        return 0
```

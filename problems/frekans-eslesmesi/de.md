---
slug: frekans-eslesmesi
title: Vorkommen Zählen
difficulty: kolay
topics: [Arrays, Hashing]
points: 15
---

## Problem

Finde, wie oft ein Messwert in einem Sensorprotokoll vorkommt. Die Methode `countOccurrences` soll zurückgeben, wie oft `target` im Array steht.

## Beispiele

- `countOccurrences([3, 1, 3, 2, 3], 3)` → `3`
- `countOccurrences([], 8)` → `0`

## Einschränkungen

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i], target <= 100000`

## Hinweis

Zähle die Treffer bei einem einzigen Durchlauf durch das Array.

## Startcode

```cpp
#include <vector>
#include <string>
class Solution {
public:
  int countOccurrences(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int countOccurrences(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def countOccurrences(self, nums, target):
        return 0
```

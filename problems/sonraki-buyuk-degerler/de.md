---
slug: sonraki-buyuk-degerler
title: Nächste Größere Werte
difficulty: orta
topics: [Stapel]
points: 25
---

## Problem

Finde für jeden Wert eines Sensorarrays den ersten größeren Wert rechts davon. Gibt es keinen, verwende -1.

## Beispiele

- `nextGreaterValues([2, 1, 3, 2])` → `[3,3,-1,-1]`
- `nextGreaterValues([5, 4])` → `[-1,-1]`

## Einschränkungen

- 0 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hinweis

Bewahre noch offene Indizes in einem Stapel auf.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> nextGreaterValues(std::vector<int>& nums) { return []; }
};
```

```java
class Solution {
  public int[] nextGreaterValues(int[] nums) { return []; }
}
```

```python
class Solution:
    def nextGreaterValues(self, nums):
        return []
```

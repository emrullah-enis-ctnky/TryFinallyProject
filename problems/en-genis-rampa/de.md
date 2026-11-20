---
slug: en-genis-rampa
title: Breiteste Rampe
difficulty: orta
topics: [Stapel]
points: 30
---

## Problem

Wähle Indizes `i < j` mit `nums[i] <= nums[j]`. Gib die größtmögliche Differenz `j-i` zurück.

## Beispiele

- `maximumWidthRamp([6, 0, 8, 2, 1, 5])` → `4`
- `maximumWidthRamp([9, 8, 1, 0, 1, 9])` → `5`

## Einschränkungen

- 2 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hinweis

Speichere mögliche Starts mit fallenden Werten in einem Stapel und ordne sie beim Rückwärtsdurchlauf zu.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maximumWidthRamp(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int maximumWidthRamp(int[] nums) { return 0; }
}
```

```python
class Solution:
    def maximumWidthRamp(self, nums):
        return 0
```

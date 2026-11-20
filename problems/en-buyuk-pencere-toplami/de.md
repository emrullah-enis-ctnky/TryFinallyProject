---
slug: en-buyuk-pencere-toplami
title: Größte Fenstersumme
difficulty: orta
topics: [Gleitendes Fenster]
points: 25
---

## Problem

Finde die größte Summe von `k` aufeinanderfolgenden Tagen einer Verkaufsreihe. `k` ist mindestens 1 und höchstens so groß wie das Array.

## Beispiele

- `maxWindowSum([2, 1, 5, 1, 3, 2], 3)` → `9`
- `maxWindowSum([-4, -2, -7], 2)` → `-6`

## Einschränkungen

- 1 <= k <= nums.length <= 100000; -10000 <= nums[i] <= 10000.

## Hinweis

Berechne eine Fenstersumme und ziehe danach bei jedem Schritt den ausgehenden Wert ab und addiere den neuen.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maxWindowSum(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public int maxWindowSum(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def maxWindowSum(self, nums, k):
        return 0
```

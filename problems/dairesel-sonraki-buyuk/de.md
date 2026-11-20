---
slug: dairesel-sonraki-buyuk
title: Zirkulär Nächstgrößer
difficulty: orta
topics: [Stapel]
points: 30
---

## Problem

Betrachte das Array als kreisförmig und finde für jedes Element den ersten größeren Wert im Uhrzeigersinn. Gibt es keinen, gib -1 zurück.

## Beispiele

- `circularNextGreater([1, 2, 1])` → `[2,-1,2]`
- `circularNextGreater([3, 2, 1])` → `[-1,3,3]`

## Einschränkungen

- 1 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hinweis

Durchlaufe das Array zweimal; der zweite Durchlauf löst nur noch offene Indizes auf.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> circularNextGreater(std::vector<int>& nums) { return []; }
};
```

```java
class Solution {
  public int[] circularNextGreater(int[] nums) { return []; }
}
```

```python
class Solution:
    def circularNextGreater(self, nums):
        return []
```

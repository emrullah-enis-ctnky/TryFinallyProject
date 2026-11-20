---
slug: artan-mi
title: Ist Das Array Steigend
difficulty: kolay
topics: [Arrays]
points: 10
---

## Problem

Bestimme, ob Messwerte einer Lieferroute streng ansteigen. `isStrictlyIncreasing` gibt einen booleschen Wert zurück; gleiche Nachbarwerte gelten nicht als steigend.

## Beispiele

- `isStrictlyIncreasing([1, 3, 8])` → `true`
- `isStrictlyIncreasing([2, 2, 5])` → `false`

## Einschränkungen

- 0 <= nums.length <= 100000; -100000 <= nums[i] <= 100000

## Hinweis

Vergleiche jedes benachbarte Paar einmal.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isStrictlyIncreasing(std::vector<int>& nums) { return False; }
};
```

```java
class Solution {
  public boolean isStrictlyIncreasing(int[] nums) { return False; }
}
```

```python
class Solution:
    def isStrictlyIncreasing(self, nums):
        return False
```

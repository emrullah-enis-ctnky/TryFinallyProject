---
slug: dag-katmani-var-mi
title: Bergarray Prüfen
difficulty: kolay
topics: [Arrays]
points: 15
---

## Problem

Bestimme, ob eine Wanderroute zuerst streng ansteigt und danach streng abfällt. Der Gipfel darf weder am Anfang noch am Ende liegen.

## Beispiele

- `isMountain([1, 3, 5, 4, 2])` → `true`
- `isMountain([1, 2, 2, 1])` → `false`

## Einschränkungen

- 3 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hinweis

Gehe bis zum Gipfel und prüfe danach das strenge Fallen bis zum Ende.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isMountain(std::vector<int>& nums) { return False; }
};
```

```java
class Solution {
  public boolean isMountain(int[] nums) { return False; }
}
```

```python
class Solution:
    def isMountain(self, nums):
        return False
```

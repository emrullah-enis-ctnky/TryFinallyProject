---
slug: hedef-degeri-cikar
title: Zielwerte Entfernen
difficulty: kolay
topics: [Zwei Zeiger]
points: 15
---

## Problem

Entferne ungültige `target`-Messwerte aus einer Liste. `withoutTarget` gibt eine neue Liste mit den übrigen Werten in ursprünglicher Reihenfolge zurück.

## Beispiele

- `withoutTarget([2, 5, 2, 7], 2)` → `[5,7]`
- `withoutTarget([1, 3], 9)` → `[1,3]`

## Einschränkungen

- 0 <= nums.length <= 100000; -100000 <= nums[i], target <= 100000.

## Hinweis

Füge nur Werte hinzu, die vom Zielwert abweichen.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> withoutTarget(std::vector<int>& nums, int target) { return []; }
};
```

```java
class Solution {
  public int[] withoutTarget(int[] nums, int target) { return []; }
}
```

```python
class Solution:
    def withoutTarget(self, nums, target):
        return []
```

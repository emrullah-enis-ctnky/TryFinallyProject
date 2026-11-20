---
slug: sirali-tekrarlari-tekille
title: Sortierte Werte Vereinheitlichen
difficulty: kolay
topics: [Zwei Zeiger]
points: 15
---

## Problem

Entferne Duplikate aus einem aufsteigenden Teilekatalog. `uniqueSorted` soll jedes Element einmal in ursprünglicher Reihenfolge zurückgeben.

## Beispiele

- `uniqueSorted([1, 1, 2, 4, 4])` → `[1,2,4]`
- `uniqueSorted([3, 3])` → `[3]`

## Einschränkungen

- 0 <= nums.length <= 100000; nums ist nicht absteigend sortiert; -100000 <= nums[i] <= 100000.

## Hinweis

Füge in einem sortierten Array nur Werte hinzu, die sich vom zuletzt eingefügten unterscheiden.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> uniqueSorted(std::vector<int>& nums) { return []; }
};
```

```java
class Solution {
  public int[] uniqueSorted(int[] nums) { return []; }
}
```

```python
class Solution:
    def uniqueSorted(self, nums):
        return []
```

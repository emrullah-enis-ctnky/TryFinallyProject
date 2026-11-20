---
slug: ekleme-indisi
title: Sortierte Einfügeposition
difficulty: kolay
topics: [Binäre Suche, Arrays]
points: 15
---

## Problem

Gegeben sind ein aufsteigend sortiertes Array ohne doppelte Werte und ein `target`. Schreibe `insertionIndex`, sodass der Index des Ziels oder die Position zurückgegeben wird, an der es die Sortierung beibehält.

## Beispiele

- `insertionIndex([1, 3, 5, 8], 5)` → `2`
- `insertionIndex([1, 3, 5, 8], 4)` → `2`

## Einschränkungen

- `0 <= nums.length <= 100000`
- Das Array ist aufsteigend sortiert und enthält keine Duplikate.
- `-100000 <= nums[i], target <= 100000`

## Hinweis

Suche die Position des ersten Werts, der größer oder gleich dem Ziel ist.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int insertionIndex(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int insertionIndex(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def insertionIndex(self, nums, target):
        return 0
```

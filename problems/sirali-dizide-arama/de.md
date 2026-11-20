---
slug: sirali-dizide-arama
title: Suche im sortierten Array
difficulty: kolay
topics: [Binäre Suche, Arrays]
points: 15
---

## Problem

Gegeben sind ein aufsteigend sortiertes ganzzahliges Array und ein Zielwert. Schreibe `searchFirst`, sodass der erste Index des Zielwerts oder `-1` zurückgegeben wird, falls er fehlt.

## Beispiele

- `searchFirst([-4, 1, 1, 3, 9], 1)` → `1`
- `searchFirst([2, 5, 8], 7)` → `-1`

## Einschränkungen

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i], target <= 100000`
- Das Array ist aufsteigend sortiert.

## Hinweis

Halbiere den Suchbereich in jedem Schritt; prüfe nach einem Treffer, ob es einen früheren Treffer gibt.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int searchFirst(std::vector<int>& nums, int target) { return -1; }
};
```

```java
class Solution {
  public int searchFirst(int[] nums, int target) { return -1; }
}
```

```python
class Solution:
    def searchFirst(self, nums, target):
        return -1
```

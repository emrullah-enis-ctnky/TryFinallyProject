---
slug: ekleme-yerini-bul
title: Einfügeposition Finden
difficulty: orta
topics: [Binäre Suche]
points: 25
---

## Problem

Gib in einer aufsteigenden Liste eindeutiger Produktcodes den Index von `target` zurück. Fehlt der Wert, gib den Einfügeindex zurück, der die Reihenfolge erhält.

## Beispiele

- `searchInsert([1, 4, 8, 12], 8)` → `2`
- `searchInsert([2, 5, 9], 6)` → `2`

## Einschränkungen

- 0 <= nums.length <= 100000; nums ist streng aufsteigend; -100000 <= target, nums[i] <= 100000.

## Hinweis

Halbiere den Suchbereich bei jedem Schritt.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int searchInsert(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int searchInsert(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def searchInsert(self, nums, target):
        return 0
```

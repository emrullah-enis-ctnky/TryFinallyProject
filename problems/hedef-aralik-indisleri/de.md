---
slug: hedef-aralik-indisleri
title: Zielbereich Indizes
difficulty: orta
topics: [Binäre Suche]
points: 25
---

## Problem

Finde den ersten und letzten Index eines Zielwerts in einem aufsteigenden Ereignisprotokoll. Fehlt er, gib `[-1, -1]` zurück.

## Beispiele

- `targetRange([1, 2, 2, 2, 5], 2)` → `[1,3]`
- `targetRange([1, 3, 5], 4)` → `[-1,-1]`

## Einschränkungen

- 0 <= nums.length <= 100000; nums ist nicht absteigend sortiert; -100000 <= target, nums[i] <= 100000.

## Hinweis

Nutze eine Untergrenzensuche für den ersten und eine Obergrenzensuche für den letzten Index.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> targetRange(std::vector<int>& nums, int target) { return []; }
};
```

```java
class Solution {
  public int[] targetRange(int[] nums, int target) { return []; }
}
```

```python
class Solution:
    def targetRange(self, nums, target):
        return []
```

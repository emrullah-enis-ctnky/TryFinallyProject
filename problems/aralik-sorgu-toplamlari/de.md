---
slug: aralik-sorgu-toplamlari
title: Bereichssummen Abfragen
difficulty: orta
topics: [Präfixsumme]
points: 25
---

## Problem

Beantworte mehrere Bereichssummenabfragen für ein Protokoll. Jede Abfrage ist `[left, right]` und schließt beide Grenzen ein. `rangeQuerySums` gibt die Antworten in Abfragereihenfolge zurück.

## Beispiele

- `rangeQuerySums([3, 1, 4, 2], [[0, 2], [1, 3]])` → `[8,7]`
- `rangeQuerySums([5], [[0, 0]])` → `[5]`

## Einschränkungen

- 1 <= nums.length <= 100000; 0 <= queries.length <= 100000; Abfragen sind gültig; -1000 <= nums[i] <= 1000.

## Hinweis

Berechne zuerst Präfixsummen.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> rangeQuerySums(std::vector<int>& nums, std::vector<std::vector<int>>& queries) { return []; }
};
```

```java
class Solution {
  public int[] rangeQuerySums(int[] nums, int[][] queries) { return []; }
}
```

```python
class Solution:
    def rangeQuerySums(self, nums, queries):
        return []
```

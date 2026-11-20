---
slug: tek-cift-indeksi
title: Indizes Für Ein Zahlenpaar
difficulty: kolay
topics: [Arrays, Hashing]
points: 20
---

## Problem

Es ist garantiert, dass genau ein Zahlenpaar in der Rechnungsliste `nums` die Summe `target` ergibt. Finde mit `findPairIndices` zwei verschiedene Indizes dieses Paars. Gib den kleineren Index zuerst zurück.

## Beispiele

- `findPairIndices([2, 7, 11, 15], 9)` → `[0, 1]`
- `findPairIndices([3, 3], 6)` → `[0, 1]`

## Einschränkungen

- `2 <= nums.length <= 100000`
- `-1000000 <= nums[i] <= 1000000`
- Genau ein Indexpaar bildet die Lösung.

## Hinweis

Suche für jeden Wert den benötigten Partner unter den zuvor gesehenen Werten.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> findPairIndices(std::vector<int>& nums, int target) { return {}; }
};
```

```java
class Solution {
  public int[] findPairIndices(int[] nums, int target) { return new int[0]; }
}
```

```python
class Solution:
    def findPairIndices(self, nums, target):
        return []
```

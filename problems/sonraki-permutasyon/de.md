---
slug: sonraki-permutasyon
title: Nächste Permutation
difficulty: orta
topics: [Greedy-Algorithmus]
points: 30
---

## Problem

Bringe einen Sortierschlüssel zur nächsten Anordnung in lexikografischer Reihenfolge. Gibt es keine größere Anordnung, beginne mit der kleinsten. Gib ein neues Array zurück.

## Beispiele

- `nextPermutation([1, 2, 3])` → `[1,3,2]`
- `nextPermutation([3, 2, 1])` → `[1,2,3]`

## Einschränkungen

- 1 <= nums.length <= 100000; 0 <= nums[i] <= 100000; Duplikate sind möglich.

## Hinweis

Finde von rechts das erste ansteigende Paar, tausche es mit dem kleinsten größeren Wert rechts davon und kehre den Rest um.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> nextPermutation(std::vector<int>& nums) { return []; }
};
```

```java
class Solution {
  public int[] nextPermutation(int[] nums) { return []; }
}
```

```python
class Solution:
    def nextPermutation(self, nums):
        return []
```

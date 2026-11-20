---
slug: k-farkli-cift-sayisi
title: K Differenzpaare Zählen
difficulty: orta
topics: [Hashing]
points: 25
---

## Problem

Zähle verschiedene Wertepaare mit genauem Abstand `k`. Jedes Wertepaar zählt unabhängig von seiner Häufigkeit nur einmal.

## Beispiele

- `countKDifferencePairs([3, 1, 4, 1, 5], 2)` → `2`
- `countKDifferencePairs([1, 2, 3, 4], 0)` → `0`

## Einschränkungen

- 0 <= nums.length <= 100000; 0 <= k <= 100000; -100000 <= nums[i] <= 100000.

## Hinweis

Lege Werte in eine Menge und suche für jeden Wert den passenden Partner.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int countKDifferencePairs(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public int countKDifferencePairs(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def countKDifferencePairs(self, nums, k):
        return 0
```

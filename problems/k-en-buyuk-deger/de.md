---
slug: k-en-buyuk-deger
title: K-größter Wert
difficulty: orta
topics: [Prioritätswarteschlange, Arrays]
points: 30
---

## Problem

Gegeben sind ein ganzzahliges Array und `k`. Schreibe `kthLargest`, sodass der Wert an Position `k` zurückgegeben wird, wenn die Werte absteigend sortiert werden. Gleiche Werte belegen jeweils eine eigene Position.

## Beispiele

- `kthLargest([3, 2, 1, 5, 6, 4], 2)` → `5`
- `kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)` → `4`

## Einschränkungen

- `1 <= k <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## Hinweis

Halte eine Prioritätswarteschlange der Größe `k` und entferne kleinere Werte, während du die größten `k` Werte behältst.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int kthLargest(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public int kthLargest(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def kthLargest(self, nums, k):
        return 0
```

---
slug: sirali-cift-toplami
title: Geordnetes Zahlenpaar
difficulty: kolay
topics: [Zwei Zeiger, Arrays]
points: 15
---

## Problem

Gegeben sind ein aufsteigend sortiertes ganzzahliges Array und ein `target`. Schreibe `hasPairWithSum`, sodass `true` zurückgegeben wird, wenn zwei Werte an verschiedenen Indizes zusammen `target` ergeben, andernfalls `false`.

## Beispiele

- `hasPairWithSum([1, 2, 4, 7], 6)` → `true`
- `hasPairWithSum([1, 3, 5], 10)` → `false`

Im ersten Beispiel gilt `2 + 4 = 6`.

## Einschränkungen

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`
- `-200000 <= target <= 200000`
- Das Array ist aufsteigend sortiert; doppelte Werte sind erlaubt.

## Hinweis

Verschiebe den linken Index bei einer zu kleinen Summe und den rechten bei einer zu großen Summe.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  bool hasPairWithSum(std::vector<int>& nums, int target) { return false; }
};
```

```java
class Solution {
  public boolean hasPairWithSum(int[] nums, int target) { return false; }
}
```

```python
class Solution:
    def hasPairWithSum(self, nums, target):
        return False
```

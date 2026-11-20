---
slug: sifir-toplamli-aralik
title: Bereich mit Summe Null
difficulty: orta
topics: [Präfixsumme, Hashing]
points: 25
---

## Problem

Gegeben ist ein ganzzahliges Array. Schreibe `hasZeroSumRange`, sodass `true` zurückgegeben wird, wenn die Summe eines nicht leeren zusammenhängenden Bereichs null ist, andernfalls `false`.

## Beispiele

- `hasZeroSumRange([4, -1, -3, 7])` → `true`
- `hasZeroSumRange([2, 1, 5])` → `false`

## Einschränkungen

- `0 <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`

## Hinweis

Die Elemente zwischen zwei gleichen Präfixsummen ergeben zusammen null.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  bool hasZeroSumRange(std::vector<int>& nums) { return false; }
};
```

```java
class Solution {
  public boolean hasZeroSumRange(int[] nums) { return false; }
}
```

```python
class Solution:
    def hasZeroSumRange(self, nums):
        return False
```

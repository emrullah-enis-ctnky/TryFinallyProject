---
slug: tek-kalan-sayi
title: Einzelnen Wert finden
difficulty: kolay
topics: [Bitmanipulation, Arrays]
points: 15
---

## Problem

In einem ganzzahligen Array kommt ein Wert einmal und jeder andere genau zweimal vor. Schreibe `singleNumber`, sodass der einmal vorkommende Wert zurückgegeben wird.

## Beispiele

- `singleNumber([4, 1, 2, 1, 2])` → `4`
- `singleNumber([-1, 2, 2])` → `-1`

## Einschränkungen

- `1 <= nums.length <= 100000`
- Die Arraylänge ist ungerade.
- `-2147483648 <= nums[i] <= 2147483647`

## Hinweis

Das bitweise exklusive Oder zweier gleicher Zahlen ist null.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int singleNumber(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int singleNumber(int[] nums) { return 0; }
}
```

```python
class Solution:
    def singleNumber(self, nums):
        return 0
```

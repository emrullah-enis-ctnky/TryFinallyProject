---
slug: yan-yana-olmayan-toplam
title: Maximum Nonadjacent Sum
difficulty: orta
topics: [Dynamic Programming - 1D, Arrays]
points: 25
---

## Problem

You are given a non-negative array where each value is the amount of money in a house. No two neighboring houses may be chosen. Write `maxNonAdjacentSum` to return the greatest amount that can be collected. Choosing no houses is allowed.

## Examples

- `maxNonAdjacentSum([2, 7, 9, 3, 1])` → `12`
- `maxNonAdjacentSum([2, 1, 1, 2])` → `4`

In the first example, the second and third houses cannot both be chosen; the best choice is `2 + 9 + 1 = 12`.

## Constraints

- `0 <= values.length <= 100000`
- `0 <= values[i] <= 10000`

## Hint

At each position, compare the total from choosing that house with the best total before it.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int maxNonAdjacentSum(std::vector<int>& values) { return 0; }
};
```

```java
class Solution {
  public int maxNonAdjacentSum(int[] values) { return 0; }
}
```

```python
class Solution:
    def maxNonAdjacentSum(self, values):
        return 0
```

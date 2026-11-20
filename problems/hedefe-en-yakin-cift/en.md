---
slug: hedefe-en-yakin-cift
title: Closest Pair To Target
difficulty: orta
topics: [Arrays, Two Pointers]
points: 30
---

## Problem

Given a price list `prices` sorted in ascending order and a target, write `closestPair` to return the values at two distinct indices whose sum is closest to the target. If several pairs are equally close, choose the one with the smaller first value, then the smaller second value.

## Examples

- `closestPair([1, 3, 4, 8], 7)` → `[3, 4]`
- `closestPair([2, 5, 6, 9], 10)` → `[2, 9]`

## Constraints

- `2 <= prices.length <= 100000`
- `prices` is sorted in nondecreasing order.
- `-1000000000 <= prices[i], target <= 1000000000`

## Hint

If the sum is below the target, move toward a larger value; if it is above, move toward a smaller one.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> closestPair(std::vector<int>& prices, int target) { return {}; }
};
```

```java
class Solution {
  public int[] closestPair(int[] prices, int target) { return new int[0]; }
}
```

```python
class Solution:
    def closestPair(self, prices, target):
        return []
```

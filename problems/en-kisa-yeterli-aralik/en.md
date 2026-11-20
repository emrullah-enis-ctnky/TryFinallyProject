---
slug: en-kisa-yeterli-aralik
title: Shortest Sufficient Range
difficulty: orta
topics: [Arrays, Sliding Window]
points: 30
---

## Problem

A shop's positive daily sales are given in `sales`. Return the length of the shortest contiguous range of days whose total sales are at least `target`. Return `0` if no such range exists.

## Examples

- `shortestEnoughRange([2, 3, 1, 2, 4, 3], 7)` → `2`
- `shortestEnoughRange([1, 1, 1], 5)` → `0`

## Constraints

- `1 <= sales.length <= 100000`
- `1 <= sales[i], target <= 1000000000`

## Hint

With positive sales, you can move the left end forward once the window reaches the threshold.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int shortestEnoughRange(std::vector<int>& sales, int target) { return 0; }
};
```

```java
class Solution {
  public int shortestEnoughRange(int[] sales, int target) { return 0; }
}
```

```python
class Solution:
    def shortestEnoughRange(self, sales, target):
        return 0
```

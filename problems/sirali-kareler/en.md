---
slug: sirali-kareler
title: Sorted Squares
difficulty: orta
topics: [Two Pointers]
points: 25
---

## Problem

Return the squares of an increasing array in increasing order. `sortedSquares` must contain the square of each value exactly once.

## Examples

- `sortedSquares([-5, -1, 0, 3, 8])` → `[0,1,9,25,64]`
- `sortedSquares([-2, 2])` → `[4,4]`

## Constraints

- 1 <= nums.length <= 100000; nums is sorted increasingly; -46340 <= nums[i] <= 46340.

## Hint

The value with greatest absolute magnitude is at one of the ends.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> sortedSquares(std::vector<int>& nums) { return new int[0]; }
};
```

```java
class Solution {
  public int[] sortedSquares(int[] nums) { return new int[0]; }
}
```

```python
class Solution:
    def sortedSquares(self, nums):
        return new int[0]
```

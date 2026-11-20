---
slug: diziyi-saga-kaydir
title: Rotate an Array Right
difficulty: kolay
topics: [Arrays, Two Pointers]
points: 15
---

## Problem

You are given an integer array and a non-negative integer `k`. Write `rotateRight` to return a new array rotated `k` positions to the right. An element that passes the last position continues from the beginning.

## Examples

- `rotateRight([1, 2, 3, 4, 5], 2)` → `[4, 5, 1, 2, 3]`
- `rotateRight([-1, 7], 3)` → `[7, -1]`

In the second example, three rotations of a length-two array are equivalent to one rotation.

## Constraints

- `1 <= nums.length <= 100000`
- `0 <= k <= 1000000000`
- `-100000 <= nums[i] <= 100000`

## Hint

Reduce the rotation count using the array length; reversing parts of the array may help.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> rotateRight(std::vector<int>& nums, int k) { return {}; }
};
```

```java
class Solution {
  public int[] rotateRight(int[] nums, int k) { return new int[]{}; }
}
```

```python
class Solution:
    def rotateRight(self, nums, k):
        return []
```

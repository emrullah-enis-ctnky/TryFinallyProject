---
slug: diziyi-sola-dondur
title: Rotate Array Left
difficulty: kolay
topics: [Arrays, Two Pointers]
points: 15
---

## Problem

A music playlist is rearranged cyclically from its beginning. `rotateLeft` must return a new array rotated `k` positions to the left. `k` may be larger than the array length.

## Examples

- `rotateLeft([1, 2, 3, 4, 5], 2)` → `[3, 4, 5, 1, 2]`
- `rotateLeft([7, 8], 4)` → `[7, 8]`

## Constraints

- `0 <= nums.length <= 100000`
- `0 <= k <= 1000000000`

## Hint

Use the array length to find the effective rotation amount.

## Starter Code

```cpp
#include <vector>
#include <string>
class Solution {
public:
  std::vector<int> rotateLeft(std::vector<int>& nums, int k) { return {}; }
};
```

```java
class Solution {
  public int[] rotateLeft(int[] nums, int k) { return new int[0]; }
}
```

```python
class Solution:
    def rotateLeft(self, nums, k):
        return []
```

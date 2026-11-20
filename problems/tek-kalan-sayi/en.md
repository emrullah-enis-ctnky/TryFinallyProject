---
slug: tek-kalan-sayi
title: Find the Single Value
difficulty: kolay
topics: [Bit Manipulation, Arrays]
points: 15
---

## Problem

In an integer array, one value appears once and every other value appears exactly twice. Write `singleNumber` to return the value that appears once.

## Examples

- `singleNumber([4, 1, 2, 1, 2])` → `4`
- `singleNumber([-1, 2, 2])` → `-1`

## Constraints

- `1 <= nums.length <= 100000`
- The array length is odd.
- `-2147483648 <= nums[i] <= 2147483647`

## Hint

The bitwise exclusive-or of two equal numbers is zero.

## Starter Code

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

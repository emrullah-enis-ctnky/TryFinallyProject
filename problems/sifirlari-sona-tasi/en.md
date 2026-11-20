---
slug: sifirlari-sona-tasi
title: Move Zeros To End
difficulty: kolay
topics: [Arrays, Two Pointers]
points: 15
---

## Problem

Zero values in a sensor log represent unreadable measurements. Write `moveZerosToEnd` to return a new array where all nonzero values keep their relative order and all zeros appear at the end.

## Examples

- `moveZerosToEnd([0, 4, 0, 2, 7])` → `[4, 2, 7, 0, 0]`
- `moveZerosToEnd([1, 3])` → `[1, 3]`

## Constraints

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## Hint

Track the next position for a nonzero value in the result.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> moveZerosToEnd(std::vector<int>& nums) { return {}; }
};
```

```java
class Solution {
  public int[] moveZerosToEnd(int[] nums) { return new int[0]; }
}
```

```python
class Solution:
    def moveZerosToEnd(self, nums):
        return []
```

---
slug: ikinci-buyuk-deger
title: Second Largest Value
difficulty: kolay
topics: [Arrays, Sorting]
points: 15
---

## Problem

An integer array is guaranteed to contain at least two distinct values. Write `secondLargest` to return the greatest distinct value that is smaller than the maximum. Repeated values count only once.

## Examples

- `secondLargest([7, 2, 9, 9, 5])` → `7`
- `secondLargest([-4, -1, -9])` → `-4`

In the first example, the largest distinct value is `9`, and the next one is `7`.

## Constraints

- `2 <= nums.length <= 100000`
- The array contains at least two distinct values.
- `-2147483648 <= nums[i] <= 2147483647`

## Hint

You can track the two largest distinct values in one pass.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int secondLargest(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int secondLargest(int[] nums) { return 0; }
}
```

```python
class Solution:
    def secondLargest(self, nums):
        return 0
```

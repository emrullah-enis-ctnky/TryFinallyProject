---
slug: en-kucuk-boleni-bul
title: Find Smallest Divisor
difficulty: orta
topics: [Binary Search]
points: 25
---

## Problem

Divide every positive value by a divisor `d`, rounding each result up. Find the smallest positive `d` whose rounded values sum to at most `threshold`.

## Examples

- `smallestDivisor([1, 2, 5, 9], 6)` → `5`
- `smallestDivisor([2, 3, 5], 11)` → `1`

## Constraints

- 1 <= nums.length <= 100000; 1 <= nums[i] <= 1000000; nums.length <= threshold <= 1000000000.

## Hint

Compute the sum for a candidate divisor and search smaller candidates when it works.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int smallestDivisor(std::vector<int>& nums, int threshold) { return 0; }
};
```

```java
class Solution {
  public int smallestDivisor(int[] nums, int threshold) { return 0; }
}
```

```python
class Solution:
    def smallestDivisor(self, nums, threshold):
        return 0
```

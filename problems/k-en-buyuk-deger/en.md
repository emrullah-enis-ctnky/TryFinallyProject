---
slug: k-en-buyuk-deger
title: Kth Largest Value
difficulty: orta
topics: [Priority Queue, Arrays]
points: 30
---

## Problem

You are given an integer array and `k`. Write `kthLargest` to return the value in position `k` when the values are sorted from largest to smallest. Equal values occupy separate positions.

## Examples

- `kthLargest([3, 2, 1, 5, 6, 4], 2)` → `5`
- `kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)` → `4`

## Constraints

- `1 <= k <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## Hint

Keep a priority queue of size `k`, discarding smaller values while retaining the largest `k` values.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int kthLargest(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public int kthLargest(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def kthLargest(self, nums, k):
        return 0
```

---
slug: k-farkli-cift-sayisi
title: Count K Difference Pairs
difficulty: orta
topics: [Hashing]
points: 25
---

## Problem

Count distinct value pairs whose difference is exactly `k`. Count a value pair once regardless of how many times it occurs in the array.

## Examples

- `countKDifferencePairs([3, 1, 4, 1, 5], 2)` → `2`
- `countKDifferencePairs([1, 2, 3, 4], 0)` → `0`

## Constraints

- 0 <= nums.length <= 100000; 0 <= k <= 100000; -100000 <= nums[i] <= 100000.

## Hint

Put values in a set and look up the matching counterpart for each value.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int countKDifferencePairs(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public int countKDifferencePairs(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def countKDifferencePairs(self, nums, k):
        return 0
```

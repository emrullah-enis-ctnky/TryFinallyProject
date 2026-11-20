---
slug: en-uzun-yukselen-seri
title: Longest Rising Run
difficulty: kolay
topics: [Arrays]
points: 15
---

## Problem

A sensor stores consecutive readings in `nums`. Write `longestRisingRun` to return the length of the longest contiguous segment in which every value is strictly greater than the previous one.

## Examples

- `longestRisingRun([1, 2, 2, 4, 6])` → `3`
- `longestRisingRun([5, 4, 3])` → `1`

## Constraints

- `1 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## Hint

Start a new run whenever the readings stop increasing.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int longestRisingRun(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int longestRisingRun(int[] nums) { return 0; }
}
```

```python
class Solution:
    def longestRisingRun(self, nums):
        return 0
```

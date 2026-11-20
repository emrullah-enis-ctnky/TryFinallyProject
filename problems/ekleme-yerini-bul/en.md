---
slug: ekleme-yerini-bul
title: Find Insertion Position
difficulty: orta
topics: [Binary Search]
points: 25
---

## Problem

In an increasing list of unique product codes, return the index of `target`. If it is absent, return the insertion index that preserves the order.

## Examples

- `searchInsert([1, 4, 8, 12], 8)` → `2`
- `searchInsert([2, 5, 9], 6)` → `2`

## Constraints

- 0 <= nums.length <= 100000; nums is strictly increasing; -100000 <= target, nums[i] <= 100000.

## Hint

Halve the search interval at each step.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int searchInsert(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int searchInsert(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def searchInsert(self, nums, target):
        return 0
```

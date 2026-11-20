---
slug: frekans-eslesmesi
title: Count Occurrences
difficulty: kolay
topics: [Arrays, Hashing]
points: 15
---

## Problem

Find how many times a measurement appears in a sensor log. The `countOccurrences` method must return the number of times `target` occurs in the array.

## Examples

- `countOccurrences([3, 1, 3, 2, 3], 3)` → `3`
- `countOccurrences([], 8)` → `0`

## Constraints

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i], target <= 100000`

## Hint

Count matches during one pass through the array.

## Starter Code

```cpp
#include <vector>
#include <string>
class Solution {
public:
  int countOccurrences(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int countOccurrences(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def countOccurrences(self, nums, target):
        return 0
```

---
slug: sirali-kayit-araligi-adedi
title: Count In Sorted Range
difficulty: orta
topics: [Binary Search, Arrays]
points: 30
---

## Problem

The ascending array `codes` may contain the same code more than once. Use `countCodeOccurrences` to find how many times `target` appears. Your solution must not scan the entire array.

## Examples

- `countCodeOccurrences([1, 2, 2, 2, 5], 2)` → `3`
- `countCodeOccurrences([1, 3, 5], 4)` → `0`

## Constraints

- `0 <= codes.length <= 1000000`
- `codes` is sorted in ascending order.
- `-1000000000 <= codes[i], target <= 1000000000`

## Hint

Use binary search to find the first and last positions where the target could appear.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int countCodeOccurrences(std::vector<int>& codes, int target) { return 0; }
};
```

```java
class Solution {
  public int countCodeOccurrences(int[] codes, int target) { return 0; }
}
```

```python
class Solution:
    def countCodeOccurrences(self, codes, target):
        return 0
```

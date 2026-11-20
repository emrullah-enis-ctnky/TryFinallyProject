---
slug: en-uzun-ardisik-seri
title: Longest Consecutive Run
difficulty: orta
topics: [Hashing, Arrays]
points: 30
---

## Problem

Inventory label numbers are stored in the unsorted array `codes`. Write `longestConsecutiveRun` to find the length of the longest group of consecutive values, regardless of whether they are adjacent in the array.

## Examples

- `longestConsecutiveRun([100, 4, 200, 1, 3, 2])` → `4`
- `longestConsecutiveRun([9, 1, 5])` → `1`

## Constraints

- `0 <= codes.length <= 100000`
- `-1000000000 <= codes[i] <= 1000000000`

## Hint

Start a run only when its preceding value is absent from the set.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int longestConsecutiveRun(std::vector<int>& codes) { return 0; }
};
```

```java
class Solution {
  public int longestConsecutiveRun(int[] codes) { return 0; }
}
```

```python
class Solution:
    def longestConsecutiveRun(self, codes):
        return 0
```

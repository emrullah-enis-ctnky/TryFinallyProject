---
slug: iki-sirali-dizinin-mediani
title: Two Array Median
difficulty: zor
topics: [Binary Search, Searching]
points: 40
---

## Problem

Find the median of two increasing measurement arrays as if they were merged. The two inputs are not both empty.

## Examples

- `medianOfSortedArrays([1, 3], [2])` → `2.0`
- `medianOfSortedArrays([1, 2], [3, 4])` → `2.5`

## Constraints

- 0 <= first.length, second.length <= 100000; total length is at least 1; arrays are increasing.

## Hint

Use binary search to find the partition in the shorter array.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  double medianOfSortedArrays(std::vector<int>& first, std::vector<int>& second) { return 0.0; }
};
```

```java
class Solution {
  public double medianOfSortedArrays(int[] first, int[] second) { return 0.0; }
}
```

```python
class Solution:
    def medianOfSortedArrays(self, first, second):
        return 0.0
```

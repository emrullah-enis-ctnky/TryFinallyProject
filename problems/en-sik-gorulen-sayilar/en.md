---
slug: en-sik-gorulen-sayilar
title: Most Frequent Values
difficulty: orta
topics: [Hashing, Priority Queue, Sorting]
points: 30
---

## Problem

A measurement log is stored in `values`. Return the `k` distinct values that occur most often, ordered by decreasing frequency. If frequencies tie, the smaller number comes first.

## Examples

- `topFrequentValues([1, 1, 1, 2, 2, 3], 2)` → `[1, 2]`
- `topFrequentValues([4, 4, 5, 5], 2)` → `[4, 5]`

## Constraints

- `1 <= values.length <= 100000`
- `1 <= k <=` the number of distinct values in the array
- `-100000 <= values[i] <= 100000`

## Hint

Count each value first, then order the values by frequency.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> topFrequentValues(std::vector<int>& values, int k) { return {}; }
};
```

```java
class Solution {
  public int[] topFrequentValues(int[] values, int k) { return new int[0]; }
}
```

```python
class Solution:
    def topFrequentValues(self, values, k):
        return []
```

---
slug: aralik-sorgu-toplamlari
title: Range Query Sums
difficulty: orta
topics: [Prefix Sum]
points: 25
---

## Problem

Answer many range-sum queries on a log. Each query is `[left, right]` and includes both endpoints. `rangeQuerySums` returns answers in query order.

## Examples

- `rangeQuerySums([3, 1, 4, 2], [[0, 2], [1, 3]])` → `[8,7]`
- `rangeQuerySums([5], [[0, 0]])` → `[5]`

## Constraints

- 1 <= nums.length <= 100000; 0 <= queries.length <= 100000; queries are valid; -1000 <= nums[i] <= 1000.

## Hint

Compute cumulative sums first.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> rangeQuerySums(std::vector<int>& nums, std::vector<std::vector<int>>& queries) { return new int[0]; }
};
```

```java
class Solution {
  public int[] rangeQuerySums(int[] nums, int[][] queries) { return new int[0]; }
}
```

```python
class Solution:
    def rangeQuerySums(self, nums, queries):
        return new int[0]
```

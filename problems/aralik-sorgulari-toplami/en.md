---
slug: aralik-sorgulari-toplami
title: Range Query Sums
difficulty: orta
topics: [Prefix Sum, Arrays]
points: 30
---

## Problem

A shop stores daily sales in `sales` and receives many requests for totals over day ranges. Each query is `[left, right]`, inclusive at both ends. Write `rangeQuerySums` to return all query results in order.

## Examples

- `rangeQuerySums([3, -1, 4, 2], [[0, 2], [1, 3]])` → `[6, 5]`
- `rangeQuerySums([7], [[0, 0]])` → `[7]`

## Constraints

- `1 <= sales.length <= 100000`
- `1 <= queries.length <= 100000`
- `0 <= queries[i][0] <= queries[i][1] < sales.length`
- `-1000 <= sales[i] <= 1000`

## Hint

Store totals from the beginning so you do not rescan every range.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> rangeQuerySums(std::vector<int>& sales, std::vector<std::vector<int>>& queries) { return {}; }
};
```

```java
class Solution {
  public int[] rangeQuerySums(int[] sales, int[][] queries) { return new int[0]; }
}
```

```python
class Solution:
    def rangeQuerySums(self, sales, queries):
        return []
```

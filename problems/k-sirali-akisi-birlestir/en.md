---
slug: k-sirali-akisi-birlestir
title: Merge K Sorted Streams
difficulty: zor
topics: [Priority Queue, Sorting]
points: 45
---

## Problem

Sorted record streams from several servers are given in `streams`. Each stream is ascending. Write `mergeSortedStreams` to combine all records in ascending order.

## Examples

- `mergeSortedStreams([[1, 4, 7], [2, 5], [3, 6]])` → `[1, 2, 3, 4, 5, 6, 7]`
- `mergeSortedStreams([[], [-2, 0]])` → `[-2, 0]`

## Constraints

- `0 <= streams.length <= 1000`
- Each stream is sorted in ascending order.
- The total number of records across all streams is at most `100000`.
- `-1000000000 <= streams[i][j] <= 1000000000`

## Hint

Keep the next value from each stream and repeatedly choose the smallest one.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> mergeSortedStreams(std::vector<std::vector<int>>& streams) { return {}; }
};
```

```java
class Solution {
  public int[] mergeSortedStreams(int[][] streams) { return new int[0]; }
}
```

```python
class Solution:
    def mergeSortedStreams(self, streams):
        return []
```

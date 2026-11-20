---
slug: hedefe-ulasmak-icin-min-adim
title: Minimum Jumps To End
difficulty: orta
topics: [Greedy]
points: 30
---

## Problem

Each position gives the maximum number of steps you may jump forward. Find the fewest jumps from the first to the last position, or return -1 if unreachable.

## Examples

- `minimumJumps([2, 3, 1, 1, 4])` → `2`
- `minimumJumps([3, 2, 1, 0, 4])` → `-1`

## Constraints

- 1 <= jumps.length <= 100000; 0 <= jumps[i] <= 100000.

## Hint

Track the farthest reachable boundary and how many jumps are needed to extend it.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int minimumJumps(std::vector<int>& jumps) { return 0; }
};
```

```java
class Solution {
  public int minimumJumps(int[] jumps) { return 0; }
}
```

```python
class Solution:
    def minimumJumps(self, jumps):
        return 0
```

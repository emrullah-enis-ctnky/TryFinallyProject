---
slug: k-sifirli-pencere
title: Window With K Zeros
difficulty: orta
topics: [Sliding Window]
points: 25
---

## Problem

Find the longest contiguous run of ones obtainable by changing at most `k` zeros to ones.

## Examples

- `longestOnesAfterFlips([1, 1, 0, 0, 1, 1, 1], 1)` → `4`
- `longestOnesAfterFlips([0, 0, 0], 2)` → `2`

## Constraints

- 0 <= bits.length <= 100000; bits[i] is 0 or 1; 0 <= k <= bits.length.

## Hint

Move the left boundary so the window never contains more than `k` zeros.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int longestOnesAfterFlips(std::vector<int>& bits, int k) { return 0; }
};
```

```java
class Solution {
  public int longestOnesAfterFlips(int[] bits, int k) { return 0; }
}
```

```python
class Solution:
    def longestOnesAfterFlips(self, bits, k):
        return 0
```

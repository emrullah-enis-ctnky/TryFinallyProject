---
slug: k-sifirli-pencere
title: Fenster Mit K Nullen
difficulty: orta
topics: [Gleitendes Fenster]
points: 25
---

## Problem

Finde die längste zusammenhängende Einsenfolge, die durch Ändern von höchstens `k` Nullen entsteht.

## Beispiele

- `longestOnesAfterFlips([1, 1, 0, 0, 1, 1, 1], 1)` → `4`
- `longestOnesAfterFlips([0, 0, 0], 2)` → `2`

## Einschränkungen

- 0 <= bits.length <= 100000; bits[i] ist 0 oder 1; 0 <= k <= bits.length.

## Hinweis

Verschiebe die linke Grenze, sodass das Fenster höchstens `k` Nullen enthält.

## Startcode

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

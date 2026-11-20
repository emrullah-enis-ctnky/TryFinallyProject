---
slug: bit-fark-sayisi
title: Bit Difference Count
difficulty: kolay
topics: [Bit Manipulation]
points: 15
---

## Problem

Count bit positions that differ in the binary representations of two device identifiers. Inputs are nonnegative 32-bit integers.

## Examples

- `bitDifferenceCount(1, 4)` → `2`
- `bitDifferenceCount(7, 7)` → `0`

## Constraints

- 0 <= a, b <= 2147483647.

## Hint

The XOR of the numbers has a 1 at each differing bit; count those bits.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int bitDifferenceCount(int a, int b) { return 0; }
};
```

```java
class Solution {
  public int bitDifferenceCount(int a, int b) { return 0; }
}
```

```python
class Solution:
    def bitDifferenceCount(self, a, b):
        return 0
```

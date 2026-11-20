---
slug: ikili-basamaklar-alternatif-mi
title: Are Binary Bits Alternating
difficulty: kolay
topics: [Bit Manipulation]
points: 15
---

## Problem

Determine whether every pair of neighboring bits in a positive integer’s binary representation differs.

## Examples

- `hasAlternatingBits(5)` → `true`
- `hasAlternatingBits(7)` → `false`

## Constraints

- 1 <= n <= 2147483647.

## Hint

Shift the number right by one bit and XOR it with the original.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool hasAlternatingBits(int n) { return false; }
};
```

```java
class Solution {
  public boolean hasAlternatingBits(int n) { return false; }
}
```

```python
class Solution:
    def hasAlternatingBits(self, n):
        return false
```

---
slug: bir-sayisindaki-bitler
title: Count Set Bits
difficulty: kolay
topics: [Bit Manipulation]
points: 15
---

## Problem

You are given a non-negative integer `number`. Write `countSetBits` to return the number of `1` bits in its binary representation.

## Examples

- `countSetBits(13)` → `3`, because the binary representation of `13` is `1101`.
- `countSetBits(8)` → `1`

## Constraints

- `0 <= number <= 2147483647`

## Hint

You can clear the lowest set bit on each step with `number & (number - 1)`.

## Starter Code

```cpp
class Solution {
public:
  int countSetBits(int number) { return 0; }
};
```

```java
class Solution {
  public int countSetBits(int number) { return 0; }
}
```

```python
class Solution:
    def countSetBits(self, number):
        return 0
```

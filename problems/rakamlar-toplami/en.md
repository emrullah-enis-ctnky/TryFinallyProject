---
slug: rakamlar-toplami
title: Sum of Digits
difficulty: kolay
topics: [Recursion]
points: 10
---

## Problem

You are given a non-negative integer. Write `sumDigits` to return the sum of its decimal digits. Solve it by calling the method on a smaller number. The digit sum of `0` is `0`.

## Examples

- `sumDigits(472)` → `13`
- `sumDigits(0)` → `0`

## Constraints

- `0 <= number <= 2147483647`

## Hint

Separate the last digit with `number % 10` and call the method again for the remaining digits.

## Starter Code

```cpp
class Solution {
public:
  int sumDigits(int number) { return 0; }
};
```

```java
class Solution {
  public int sumDigits(int number) { return 0; }
}
```

```python
class Solution:
    def sumDigits(self, number):
        return 0
```

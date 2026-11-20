---
slug: tam-kareyi-dogrula
title: Perfect Square Check
difficulty: kolay
topics: [Binary Search]
points: 15
---

## Problem

A warehouse records the number of square boxes as `count`. Write `isPerfectSquare` to determine whether this number is the square of an integer. Negative numbers are not perfect squares.

## Examples

- `isPerfectSquare(49)` → `true`
- `isPerfectSquare(50)` → `false`

## Constraints

- `-2147483648 <= count <= 2147483647`

## Hint

You can narrow the possible roots within a sorted range.

## Starter Code

```cpp
class Solution {
public:
  bool isPerfectSquare(int count) { return false; }
};
```

```java
class Solution {
  public boolean isPerfectSquare(int count) { return false; }
}
```

```python
class Solution:
    def isPerfectSquare(self, count):
        return False
```

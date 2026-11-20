---
slug: eksik-bilet-numarasi
title: Missing Ticket Number
difficulty: kolay
topics: [Arrays, Bit Manipulation]
points: 15
---

## Problem

An event numbers its tickets from `0` through `n`. The array `nums` contains each of those numbers at most once, with exactly one number missing. Find the missing number with `findMissingTicket`.

## Examples

- `findMissingTicket([3, 0, 1])` → `2`
- `findMissingTicket([0, 1])` → `2`

## Constraints

- `0 <= nums.length <= 100000`
- Values are distinct and between `0` and `nums.length`.

## Hint

XORing a number with itself cancels it out.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int findMissingTicket(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int findMissingTicket(int[] nums) { return 0; }
}
```

```python
class Solution:
    def findMissingTicket(self, nums):
        return 0
```

---
slug: kuyrugun-basini-ters-cevir
title: Reverse Queue Prefix
difficulty: kolay
topics: [Queue & Deque, Stack]
points: 20
---

## Problem

A package queue is given as `items`, with the first value at the front. Write `reverseQueuePrefix` to return a new queue with the first `k` packages reversed and the remaining order preserved.

## Examples

- `reverseQueuePrefix([1, 2, 3, 4, 5], 3)` → `[3, 2, 1, 4, 5]`
- `reverseQueuePrefix([7, 8], 0)` → `[7, 8]`

## Constraints

- `0 <= items.length <= 100000`
- `0 <= k <= items.length`
- `-100000 <= items[i] <= 100000`

## Hint

Temporarily put the first `k` items on a stack before taking them back.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> reverseQueuePrefix(std::vector<int>& items, int k) { return {}; }
};
```

```java
class Solution {
  public int[] reverseQueuePrefix(int[] items, int k) { return new int[0]; }
}
```

```python
class Solution:
    def reverseQueuePrefix(self, items, k):
        return []
```

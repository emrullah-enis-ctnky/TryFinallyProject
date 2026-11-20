---
slug: bagli-liste-dongusu
title: Linked List Cycle
difficulty: orta
topics: [Linked Lists]
points: 25
---

## Problem

Nodes in a linked list are numbered from `0`. `next[i]` stores the index of the node following node `i`, or `-1` for the end of the list. Given a starting index `head`, write `hasListCycle` to return `true` if following the links from `head` enters a cycle, and `false` otherwise.

## Examples

- `hasListCycle([1, 2, 3, 1], 0)` → `true`
- `hasListCycle([1, 2, -1], 0)` → `false`

In the first example, the links go `0 → 1 → 2 → 3 → 1` and repeat.

## Constraints

- `0 <= next.length <= 100000`
- `head` is `-1` or a valid node index.
- Each `next[i]` is `-1` or a valid node index.

## Hint

Use two pointers: one advances one link at a time and the other advances two.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  bool hasListCycle(std::vector<int>& next, int head) { return false; }
};
```

```java
class Solution {
  public boolean hasListCycle(int[] next, int head) { return false; }
}
```

```python
class Solution:
    def hasListCycle(self, next, head):
        return False
```

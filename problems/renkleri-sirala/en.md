---
slug: renkleri-sirala
title: Sort Part Colors
difficulty: orta
topics: [Sorting, Two Pointers]
points: 25
---

## Problem

Parts on a production line are labeled `0`, `1`, or `2`. Write `sortPartColors` to return a new array with the labels in ascending order. Try to do it in one pass without using a general comparison sort.

## Examples

- `sortPartColors([2, 0, 2, 1, 1, 0])` → `[0, 0, 1, 1, 2, 2]`
- `sortPartColors([1, 0])` → `[0, 1]`

## Constraints

- `0 <= colors.length <= 100000`
- Each `colors[i]` is `0`, `1`, or `2`.

## Hint

Track the boundaries of three regions and move small and large values toward the ends.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> sortPartColors(std::vector<int>& colors) { return {}; }
};
```

```java
class Solution {
  public int[] sortPartColors(int[] colors) { return new int[0]; }
}
```

```python
class Solution:
    def sortPartColors(self, colors):
        return []
```

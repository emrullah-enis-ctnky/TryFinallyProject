---
slug: listeler-esit-mi
title: Are the Lists Equal?
difficulty: kolay
topics: [Arrays]
points: 10
---

## Problem

Given two integer lists, write an `areListsEqual` method that returns `true` if the lists have the same length and contain the same elements in the same order, and `false` otherwise.

## Examples

- `areListsEqual([1, 2, 3], [1, 2, 3])` → `true`
- `areListsEqual([1, 2], [2, 1])` → `false`

## Constraints

- The lists contain integers.
- The lists may be empty.
- Element order matters.

## Hint

Compare the list lengths first, then compare the elements at matching positions.

## Starter Code

```cpp
#include <vector>

class Solution {
public:
  bool areListsEqual(const std::vector<int>& list1, const std::vector<int>& list2) {
    // Write your solution here
    return false;
  }
};
```

```java
class Solution {
  public boolean areListsEqual(int[] list1, int[] list2) {
    // Write your solution here
    return false;
  }
}
```

```python
class Solution:
    def areListsEqual(self, list1, list2):
        # Write your solution here
        return False
```

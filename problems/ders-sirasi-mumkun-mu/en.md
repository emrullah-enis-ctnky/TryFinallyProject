---
slug: ders-sirasi-mumkun-mu
title: Can Courses Be Finished
difficulty: orta
topics: [Graphs, Queue & Deque]
points: 30
---

## Problem

An education plan contains `n` courses. A pair `[course, prerequisite]` in `prerequisites` means the prerequisite must be completed before the course. Write `canFinishCourses` to determine whether all courses can be completed.

## Examples

- `canFinishCourses(3, [[1, 0], [2, 1]])` → `true`
- `canFinishCourses(2, [[1, 0], [0, 1]])` → `false`

## Constraints

- `0 <= n <= 1000`
- `0 <= prerequisites.length <= 10000`
- Course numbers in each pair are between `0` and `n - 1`.

## Hint

Complete courses with no remaining prerequisites, then release the courses that depend on them.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  bool canFinishCourses(int n, std::vector<std::vector<int>>& prerequisites) { return false; }
};
```

```java
class Solution {
  public boolean canFinishCourses(int n, int[][] prerequisites) { return false; }
}
```

```python
class Solution:
    def canFinishCourses(self, n, prerequisites):
        return False
```

---
slug: ortak-elemanlar
title: Unique Common Values
difficulty: orta
topics: [Hashing]
points: 25
---

## Problem

Find values shared by two inventory lists. `commonValues` must return each shared value once, in increasing order.

## Examples

- `commonValues([4, 2, 4, 1], [2, 4, 4, 7])` → `[2,4]`
- `commonValues([1, 3], [2, 4])` → `[]`

## Constraints

- 0 <= first.length, second.length <= 100000; -100000 <= values <= 100000

## Hint

Put one list in a set, find shared values, then sort the result.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> commonValues(std::vector<int>& first, std::vector<int>& second) { return new int[0]; }
};
```

```java
class Solution {
  public int[] commonValues(int[] first, int[] second) { return new int[0]; }
}
```

```python
class Solution:
    def commonValues(self, first, second):
        return new int[0]
```

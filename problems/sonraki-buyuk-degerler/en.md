---
slug: sonraki-buyuk-degerler
title: Next Greater Values
difficulty: orta
topics: [Stack]
points: 25
---

## Problem

For each value in a sensor array, find the first greater value to its right. Use -1 when no such value exists.

## Examples

- `nextGreaterValues([2, 1, 3, 2])` → `[3,3,-1,-1]`
- `nextGreaterValues([5, 4])` → `[-1,-1]`

## Constraints

- 0 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hint

Keep unresolved indices on a stack.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> nextGreaterValues(std::vector<int>& nums) { return new int[0]; }
};
```

```java
class Solution {
  public int[] nextGreaterValues(int[] nums) { return new int[0]; }
}
```

```python
class Solution:
    def nextGreaterValues(self, nums):
        return new int[0]
```

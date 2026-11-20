---
slug: dairesel-sonraki-buyuk
title: Circular Next Greater
difficulty: orta
topics: [Stack]
points: 30
---

## Problem

Treat the array as circular and find the first greater value clockwise for each element. Return -1 when no greater value exists.

## Examples

- `circularNextGreater([1, 2, 1])` → `[2,-1,2]`
- `circularNextGreater([3, 2, 1])` → `[-1,3,3]`

## Constraints

- 1 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hint

Traverse the array twice; the second pass only resolves remaining indices.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> circularNextGreater(std::vector<int>& nums) { return new int[0]; }
};
```

```java
class Solution {
  public int[] circularNextGreater(int[] nums) { return new int[0]; }
}
```

```python
class Solution:
    def circularNextGreater(self, nums):
        return new int[0]
```

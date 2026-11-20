---
slug: sirali-tekrarlari-tekille
title: Deduplicate Sorted Values
difficulty: kolay
topics: [Two Pointers]
points: 15
---

## Problem

Remove duplicates from an increasing parts catalog. `uniqueSorted` must return a new array containing each value once in the original order.

## Examples

- `uniqueSorted([1, 1, 2, 4, 4])` → `[1,2,4]`
- `uniqueSorted([3, 3])` → `[3]`

## Constraints

- 0 <= nums.length <= 100000; nums is nondecreasing; -100000 <= nums[i] <= 100000.

## Hint

In a sorted array, append a value only when it differs from the last appended value.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> uniqueSorted(std::vector<int>& nums) { return new int[0]; }
};
```

```java
class Solution {
  public int[] uniqueSorted(int[] nums) { return new int[0]; }
}
```

```python
class Solution:
    def uniqueSorted(self, nums):
        return new int[0]
```

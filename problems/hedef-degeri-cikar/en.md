---
slug: hedef-degeri-cikar
title: Remove Target Values
difficulty: kolay
topics: [Two Pointers]
points: 15
---

## Problem

Remove invalid `target` readings from a measurement list. `withoutTarget` returns a new list containing the remaining values in their original order.

## Examples

- `withoutTarget([2, 5, 2, 7], 2)` → `[5,7]`
- `withoutTarget([1, 3], 9)` → `[1,3]`

## Constraints

- 0 <= nums.length <= 100000; -100000 <= nums[i], target <= 100000.

## Hint

Append only values different from the target.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> withoutTarget(std::vector<int>& nums, int target) { return new int[0]; }
};
```

```java
class Solution {
  public int[] withoutTarget(int[] nums, int target) { return new int[0]; }
}
```

```python
class Solution:
    def withoutTarget(self, nums, target):
        return new int[0]
```

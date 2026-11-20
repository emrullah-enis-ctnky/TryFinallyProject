---
slug: digerleri-haric-carpim
title: Products Except Self
difficulty: orta
topics: [Prefix Sum]
points: 25
---

## Problem

For each station in a production line, calculate the product of all values except that station. Return the result array without using division.

## Examples

- `productsExceptSelf([1, 2, 3, 4])` → `[24,12,8,6]`
- `productsExceptSelf([0, 3, 0])` → `[0,0,0]`

## Constraints

- 2 <= nums.length <= 10; -10 <= nums[i] <= 10; all products fit in int.

## Hint

Combine the product to the left and the product to the right of each index.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> productsExceptSelf(std::vector<int>& nums) { return new int[0]; }
};
```

```java
class Solution {
  public int[] productsExceptSelf(int[] nums) { return new int[0]; }
}
```

```python
class Solution:
    def productsExceptSelf(self, nums):
        return new int[0]
```

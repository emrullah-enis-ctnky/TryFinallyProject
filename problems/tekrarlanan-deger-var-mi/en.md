---
slug: tekrarlanan-deger-var-mi
title: Any Repeated Value
difficulty: kolay
topics: [Hashing, Arrays]
points: 15
---

## Problem

You are given an integer array. Write `containsDuplicate` to return `true` if any value appears at least twice, and `false` if all values are distinct.

## Examples

- `containsDuplicate([4, 1, 4])` → `true`
- `containsDuplicate([2, 5, 8])` → `false`

## Constraints

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## Hint

Keep previously seen values in a set so you can check them quickly.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  bool containsDuplicate(std::vector<int>& nums) { return false; }
};
```

```java
class Solution {
  public boolean containsDuplicate(int[] nums) { return false; }
}
```

```python
class Solution:
    def containsDuplicate(self, nums):
        return False
```

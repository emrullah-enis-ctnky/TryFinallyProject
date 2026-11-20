---
slug: sonraki-permutasyon
title: Next Permutation
difficulty: orta
topics: [Greedy]
points: 30
---

## Problem

Advance a sorting key to the next arrangement in lexicographic order. If no greater arrangement exists, wrap to the smallest arrangement. Return the new array.

## Examples

- `nextPermutation([1, 2, 3])` → `[1,3,2]`
- `nextPermutation([3, 2, 1])` → `[1,2,3]`

## Constraints

- 1 <= nums.length <= 100000; 0 <= nums[i] <= 100000; duplicates may occur.

## Hint

Find the first increasing pair from the right, swap it with the smallest greater value to its right, then reverse the suffix.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> nextPermutation(std::vector<int>& nums) { return new int[0]; }
};
```

```java
class Solution {
  public int[] nextPermutation(int[] nums) { return new int[0]; }
}
```

```python
class Solution:
    def nextPermutation(self, nums):
        return new int[0]
```

---
slug: pencere-en-buyukleri
title: Sliding Window Maximums
difficulty: zor
topics: [Queue & Deque]
points: 40
---

## Problem

Find the maximum value in each consecutive window of length `k`, in order. Every window contains at least one value.

## Examples

- `windowMaximums([1, 3, -1, -3, 5, 3, 6, 7], 3)` → `[3,3,5,5,6,7]`
- `windowMaximums([4, 2], 2)` → `[4]`

## Constraints

- 1 <= k <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hint

In an index deque, remove indices outside the window and discard smaller values from the back.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> windowMaximums(std::vector<int>& nums, int k) { return new int[0]; }
};
```

```java
class Solution {
  public int[] windowMaximums(int[] nums, int k) { return new int[0]; }
}
```

```python
class Solution:
    def windowMaximums(self, nums, k):
        return new int[0]
```

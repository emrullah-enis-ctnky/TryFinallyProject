---
slug: fenster-maxima-summe
title: Sum of Window Maximums
difficulty: orta
topics: [Sliding Window, Queue & Deque]
points: 30
---

## Problem

You are given an integer array and a window length `k`. For every contiguous window of length `k`, find its maximum value. Write `sumWindowMaximums` to return the sum of these maximum values.

## Examples

- `sumWindowMaximums([1, 3, -1, -3, 5, 3, 6, 7], 3)` → `29`
- `sumWindowMaximums([4, 4, 4], 2)` → `8`

In the first example, the window maximums are `3, 3, 5, 5, 6, 7`, which sum to `29`.

## Constraints

- `1 <= k <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`
- The sum fits in a signed 64-bit integer.

## Hint

Keep indices in a deque and remove values that can no longer become a future maximum.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  long long sumWindowMaximums(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public long sumWindowMaximums(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def sumWindowMaximums(self, nums, k):
        return 0
```

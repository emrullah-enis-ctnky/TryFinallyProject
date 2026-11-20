---
slug: ilk-tekrar-eden
title: First Repeated Value
difficulty: orta
topics: [Hashing]
points: 25
---

## Problem

Find the first value in an event stream that has already appeared. `firstRepeated` returns the first value encountered for a second time, or -1 if none repeats.

## Examples

- `firstRepeated([4, 8, 3, 8, 4])` → `8`
- `firstRepeated([1, 2, 3])` → `-1`

## Constraints

- 0 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hint

Keep previously seen values in a set.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int firstRepeated(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int firstRepeated(int[] nums) { return 0; }
}
```

```python
class Solution:
    def firstRepeated(self, nums):
        return 0
```

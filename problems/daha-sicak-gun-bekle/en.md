---
slug: daha-sicak-gun-bekle
title: Next Warmer Day
difficulty: orta
topics: [Stack, Arrays]
points: 30
---

## Problem

Daily temperatures are stored in `temperatures`. For each day, return how many days must pass until a warmer day. Return `0` for a day with no warmer day ahead.

## Examples

- `daysUntilWarmer([73, 74, 75, 71, 69, 72, 76, 73])` → `[1, 1, 4, 2, 1, 1, 0, 0]`
- `daysUntilWarmer([30, 40, 50])` → `[1, 1, 0]`

## Constraints

- `1 <= temperatures.length <= 100000`
- `-50000 <= temperatures[i] <= 50000`

## Hint

Keep days without a warmer reading on a stack ordered by nonincreasing temperature.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> daysUntilWarmer(std::vector<int>& temperatures) { return {}; }
};
```

```java
class Solution {
  public int[] daysUntilWarmer(int[] temperatures) { return new int[0]; }
}
```

```python
class Solution:
    def daysUntilWarmer(self, temperatures):
        return []
```

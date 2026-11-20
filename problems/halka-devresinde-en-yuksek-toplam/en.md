---
slug: halka-devresinde-en-yuksek-toplam
title: Maximum Ring Value
difficulty: orta
topics: [Dynamic Programming - 1D, Arrays]
points: 30
---

## Problem

A building's security lights are arranged in a circle and represented by `values`. You cannot turn on two neighboring lights, and the first and last lights are neighbors. Write `maximumCircularLightValue` to maximize the total value of the lights you turn on.

## Examples

- `maximumCircularLightValue([2, 3, 2])` → `3`
- `maximumCircularLightValue([1, 2, 3, 1])` → `4`

## Constraints

- `1 <= values.length <= 100000`
- `0 <= values[i] <= 1000000000`

## Hint

Consider separately the cases where the first light is chosen and where it is not.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  long long maximumCircularLightValue(std::vector<int>& values) { return 0; }
};
```

```java
class Solution {
  public long maximumCircularLightValue(int[] values) { return 0; }
}
```

```python
class Solution:
    def maximumCircularLightValue(self, values):
        return 0
```

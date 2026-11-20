---
slug: maksimum-k-ortalamasi
title: Maximaler K Durchschnitt
difficulty: orta
topics: [Gleitendes Fenster]
points: 25
---

## Problem

Finde den größten Durchschnitt aller zusammenhängenden Teilarrays der Länge `k`.

## Beispiele

- `maximumAverage([1, 12, -5, -6, 50, 3], 4)` → `12.75`
- `maximumAverage([5], 1)` → `5.0`

## Einschränkungen

- 1 <= k <= nums.length <= 100000; -10000 <= nums[i] <= 10000.

## Hinweis

Finde zuerst die größte Fenstersumme und teile danach.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  double maximumAverage(std::vector<int>& nums, int k) { return 0.0; }
};
```

```java
class Solution {
  public double maximumAverage(int[] nums, int k) { return 0.0; }
}
```

```python
class Solution:
    def maximumAverage(self, nums, k):
        return 0.0
```

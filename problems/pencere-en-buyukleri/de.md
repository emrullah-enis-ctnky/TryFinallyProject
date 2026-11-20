---
slug: pencere-en-buyukleri
title: Fenstermaxima
difficulty: zor
topics: [Warteschlange & Deque]
points: 40
---

## Problem

Finde der Reihe nach den größten Wert in jedem zusammenhängenden Fenster der Länge `k`. Jedes Fenster enthält mindestens einen Wert.

## Beispiele

- `windowMaximums([1, 3, -1, -3, 5, 3, 6, 7], 3)` → `[3,3,5,5,6,7]`
- `windowMaximums([4, 2], 2)` → `[4]`

## Einschränkungen

- 1 <= k <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## Hinweis

Entferne aus einer Indexdeque abgelaufene Indizes und kleinere Werte am Ende.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> windowMaximums(std::vector<int>& nums, int k) { return []; }
};
```

```java
class Solution {
  public int[] windowMaximums(int[] nums, int k) { return []; }
}
```

```python
class Solution:
    def windowMaximums(self, nums, k):
        return []
```

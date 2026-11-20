---
slug: sirali-kareler
title: Sortierte Quadrate
difficulty: orta
topics: [Zwei Zeiger]
points: 25
---

## Problem

Gib die Quadrate eines aufsteigend sortierten Arrays ebenfalls aufsteigend zurück. `sortedSquares` muss jedes Quadrat genau einmal enthalten.

## Beispiele

- `sortedSquares([-5, -1, 0, 3, 8])` → `[0,1,9,25,64]`
- `sortedSquares([-2, 2])` → `[4,4]`

## Einschränkungen

- 1 <= nums.length <= 100000; nums ist aufsteigend sortiert; -46340 <= nums[i] <= 46340.

## Hinweis

Der Wert mit dem größten Betrag steht an einem der Enden.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> sortedSquares(std::vector<int>& nums) { return []; }
};
```

```java
class Solution {
  public int[] sortedSquares(int[] nums) { return []; }
}
```

```python
class Solution:
    def sortedSquares(self, nums):
        return []
```

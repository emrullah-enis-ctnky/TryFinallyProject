---
slug: ortak-urun-kodlari
title: Shared Product Codes
difficulty: kolay
topics: [Hashing, Arrays]
points: 20
---

## Problem

Two stores keep their stock codes in the arrays `first` and `second`. Write `sharedProductCodes` to return the distinct codes present in both stores, in ascending order. A code repeated within one store must appear only once in the result.

## Examples

- `sharedProductCodes([7, 2, 7, 4], [4, 7, 9])` → `[4, 7]`
- `sharedProductCodes([1, 3], [2, 4])` → `[]`

## Constraints

- `0 <= first.length, second.length <= 100000`
- `-1000000000 <= first[i], second[i] <= 1000000000`

## Hint

Store the values from one array in a set for fast membership checks.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> sharedProductCodes(std::vector<int>& first, std::vector<int>& second) { return {}; }
};
```

```java
class Solution {
  public int[] sharedProductCodes(int[] first, int[] second) { return new int[0]; }
}
```

```python
class Solution:
    def sharedProductCodes(self, first, second):
        return []
```

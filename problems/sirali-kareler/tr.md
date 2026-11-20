---
slug: sirali-kareler
title: Sıralı Kareler
difficulty: orta
topics: [İki İşaretçi]
points: 25
---

## Problem

Artan sırada verilmiş sayıların karelerini yine artan sırada döndürün. `sortedSquares` her değerin karesini tam bir kez içermelidir.

## Örnekler

- `sortedSquares([-5, -1, 0, 3, 8])` → `[0,1,9,25,64]`
- `sortedSquares([-2, 2])` → `[4,4]`

## Kısıtlamalar

- 1 <= nums.length <= 100000; nums artan sıradadır; -46340 <= nums[i] <= 46340.

## İpucu

En büyük mutlak değere sahip sayı uçlardan birindedir.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> sortedSquares(std::vector<int>& nums) { return {}; }
};
```

```java
class Solution {
  public int[] sortedSquares(int[] nums) { return {}; }
}
```

```python
class Solution:
    def sortedSquares(self, nums):
        return {}
```

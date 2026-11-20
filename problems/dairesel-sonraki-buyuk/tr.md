---
slug: dairesel-sonraki-buyuk
title: Dairesel Sonraki Büyük
difficulty: orta
topics: [Yığın]
points: 30
---

## Problem

Dairesel kabul edilen bir dizide her değer için saat yönünde karşılaşılan ilk daha büyük değeri bulun. Böyle bir değer yoksa -1 döndürün.

## Örnekler

- `circularNextGreater([1, 2, 1])` → `[2,-1,2]`
- `circularNextGreater([3, 2, 1])` → `[-1,3,3]`

## Kısıtlamalar

- 1 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## İpucu

Diziyi iki kez dolaşın; ikinci tur yalnızca bekleyen indisleri çözmek içindir.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> circularNextGreater(std::vector<int>& nums) { return {}; }
};
```

```java
class Solution {
  public int[] circularNextGreater(int[] nums) { return {}; }
}
```

```python
class Solution:
    def circularNextGreater(self, nums):
        return {}
```

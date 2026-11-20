---
slug: en-buyuk-pencere-toplami
title: En Büyük Pencere Toplamı
difficulty: orta
topics: [Kayan Pencere]
points: 25
---

## Problem

Bir satış serisinde ardışık `k` günün en yüksek toplamını bulun. `k` en az 1 ve dizi uzunluğundan büyük değildir.

## Örnekler

- `maxWindowSum([2, 1, 5, 1, 3, 2], 3)` → `9`
- `maxWindowSum([-4, -2, -7], 2)` → `-6`

## Kısıtlamalar

- 1 <= k <= nums.length <= 100000; -10000 <= nums[i] <= 10000.

## İpucu

Bir pencere toplamını hesaplayıp her adımda bir değeri çıkarın ve yenisini ekleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maxWindowSum(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public int maxWindowSum(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def maxWindowSum(self, nums, k):
        return 0
```

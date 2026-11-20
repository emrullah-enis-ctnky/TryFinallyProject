---
slug: en-buyuk-carpim-alt-dizisi
title: Maksimum Alt Dizi Çarpımı
difficulty: orta
topics: [Dinamik Programlama 1D]
points: 30
---

## Problem

Bir sensör dizisinde ardışık en az bir ölçüm içeren alt dizinin en büyük çarpımını bulun.

## Örnekler

- `maxProductSubarray([2, 3, -2, 4])` → `6`
- `maxProductSubarray([-2, 0, -1])` → `0`

## Kısıtlamalar

- 1 <= nums.length <= 10; -3 <= nums[i] <= 3; sonuç int aralığındadır.

## İpucu

Negatif bir değer en küçük çarpımı en büyük çarpıma çevirebilir; iki uç çarpımı izleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maxProductSubarray(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int maxProductSubarray(int[] nums) { return 0; }
}
```

```python
class Solution:
    def maxProductSubarray(self, nums):
        return 0
```

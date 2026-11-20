---
slug: digerleri-haric-carpim
title: Kendisi Hariç Çarpımlar
difficulty: orta
topics: [Önek Toplamı]
points: 25
---

## Problem

Bir üretim hattındaki her istasyon için, o istasyonun değeri dışında kalan tüm değerlerin çarpımını hesaplayın. Bölme kullanmadan sonuç dizisini döndürün.

## Örnekler

- `productsExceptSelf([1, 2, 3, 4])` → `[24,12,8,6]`
- `productsExceptSelf([0, 3, 0])` → `[0,0,0]`

## Kısıtlamalar

- 2 <= nums.length <= 10; -10 <= nums[i] <= 10; tüm çarpımlar int aralığındadır.

## İpucu

Her indis için solundaki ve sağındaki çarpımları birleştirin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> productsExceptSelf(std::vector<int>& nums) { return {}; }
};
```

```java
class Solution {
  public int[] productsExceptSelf(int[] nums) { return {}; }
}
```

```python
class Solution:
    def productsExceptSelf(self, nums):
        return {}
```

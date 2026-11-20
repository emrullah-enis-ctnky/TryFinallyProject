---
slug: en-kucuk-boleni-bul
title: En Küçük Böleni Bul
difficulty: orta
topics: [İkili Arama]
points: 25
---

## Problem

Her pozitif sayıyı `d` bölenine bölüp yukarı yuvarlayın. Bu yuvarlanmış değerlerin toplamı en fazla `threshold` olacak en küçük pozitif `d` değerini bulun.

## Örnekler

- `smallestDivisor([1, 2, 5, 9], 6)` → `5`
- `smallestDivisor([2, 3, 5], 11)` → `1`

## Kısıtlamalar

- 1 <= nums.length <= 100000; 1 <= nums[i] <= 1000000; nums.length <= threshold <= 1000000000.

## İpucu

Bir bölen adayının toplamını hesaplayıp mümkünse daha küçük adayları arayın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int smallestDivisor(std::vector<int>& nums, int threshold) { return 0; }
};
```

```java
class Solution {
  public int smallestDivisor(int[] nums, int threshold) { return 0; }
}
```

```python
class Solution:
    def smallestDivisor(self, nums, threshold):
        return 0
```

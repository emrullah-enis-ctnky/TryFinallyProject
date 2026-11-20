---
slug: tek-kalan-sayi
title: Tek Kalan Sayı
difficulty: kolay
topics: [Bit İşlemleri, Diziler]
points: 15
---

## Problem

Bir tam sayı dizisinde bir değer bir kez, diğer bütün değerler tam olarak iki kez geçer. Bir kez geçen değeri `singleNumber` metoduyla döndürün.

## Örnekler

- `singleNumber([4, 1, 2, 1, 2])` → `4`
- `singleNumber([-1, 2, 2])` → `-1`

## Kısıtlamalar

- `1 <= nums.length <= 100000`
- Dizi uzunluğu tektir.
- `-2147483648 <= nums[i] <= 2147483647`

## İpucu

İki eşit sayının bit düzeyindeki özel-veya sonucu sıfırdır.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int singleNumber(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int singleNumber(int[] nums) { return 0; }
}
```

```python
class Solution:
    def singleNumber(self, nums):
        return 0
```

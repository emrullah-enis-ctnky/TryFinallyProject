---
slug: aralik-toplami
title: Dizi Aralığının Toplamı
difficulty: kolay
topics: [Diziler, Önek Toplamı]
points: 15
---

## Problem

Bir tam sayı dizisi ile `left` ve `right` indisleri verilir. `left` ve `right` dahil olmak üzere bu aralıktaki elemanların toplamını döndüren `rangeSum` metodunu yazın.

## Örnekler

- `rangeSum([2, 4, 1, 7, 3], 1, 3)` → `12`
- `rangeSum([-5, 8, -2], 0, 2)` → `1`

İlk aralık `[4, 1, 7]` elemanlarını içerir ve toplamı `12`'dir.

## Kısıtlamalar

- `1 <= nums.length <= 100000`
- `0 <= left <= right < nums.length`
- `-10000 <= nums[i] <= 10000`
- Sonuç 32 bit işaretli tam sayı aralığındadır.

## İpucu

Aralığın başlangıcına kadarki birikimli toplamları kullanabilirsiniz.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int rangeSum(std::vector<int>& nums, int left, int right) {
    return 0;
  }
};
```

```java
class Solution {
  public int rangeSum(int[] nums, int left, int right) { return 0; }
}
```

```python
class Solution:
    def rangeSum(self, nums, left, right):
        return 0
```

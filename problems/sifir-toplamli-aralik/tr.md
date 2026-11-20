---
slug: sifir-toplamli-aralik
title: Sıfır Toplamlı Aralık
difficulty: orta
topics: [Önek Toplamı, Hashleme]
points: 25
---

## Problem

Bir tam sayı dizisi verilir. En az bir eleman içeren ardışık bir aralığın toplamı sıfırsa `true`, aksi halde `false` döndüren `hasZeroSumRange` metodunu yazın.

## Örnekler

- `hasZeroSumRange([4, -1, -3, 7])` → `true`
- `hasZeroSumRange([2, 1, 5])` → `false`

## Kısıtlamalar

- `0 <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`

## İpucu

İki eşit önek toplamı arasındaki elemanların toplamı sıfırdır.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  bool hasZeroSumRange(std::vector<int>& nums) { return false; }
};
```

```java
class Solution {
  public boolean hasZeroSumRange(int[] nums) { return false; }
}
```

```python
class Solution:
    def hasZeroSumRange(self, nums):
        return False
```

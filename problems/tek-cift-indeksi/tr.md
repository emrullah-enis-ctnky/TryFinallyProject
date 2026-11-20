---
slug: tek-cift-indeksi
title: Tek Çift İndeksi
difficulty: kolay
topics: [Diziler, Hashleme]
points: 20
---

## Problem

Bir fatura listesindeki `nums` değerlerinden toplamı `target` olan tam bir indis çifti bulunduğu garanti edilir. Farklı iki indis kullanarak çifti bulan `findPairIndices` metodunu yazın. İndisleri küçük olan önce gelecek şekilde döndürün.

## Örnekler

- `findPairIndices([2, 7, 11, 15], 9)` → `[0, 1]`
- `findPairIndices([3, 3], 6)` → `[0, 1]`

## Kısıtlamalar

- `2 <= nums.length <= 100000`
- `-1000000 <= nums[i] <= 1000000`
- Cevabı oluşturan tam bir indis çifti vardır.

## İpucu

Her sayı için gereken eşini daha önce görülmüş değerler arasında arayın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> findPairIndices(std::vector<int>& nums, int target) { return {}; }
};
```

```java
class Solution {
  public int[] findPairIndices(int[] nums, int target) { return new int[0]; }
}
```

```python
class Solution:
    def findPairIndices(self, nums, target):
        return []
```

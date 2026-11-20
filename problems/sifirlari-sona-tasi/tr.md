---
slug: sifirlari-sona-tasi
title: Sıfırları Sona Taşı
difficulty: kolay
topics: [Diziler, İki İşaretçi]
points: 15
---

## Problem

Bir sensör dizisindeki sıfır değerler okunamayan ölçümleri gösterir. `moveZerosToEnd` metoduyla sıfır olmayan değerlerin göreli sırasını koruyarak yeni bir dizi döndürün; tüm sıfırlar dizinin sonunda bulunsun.

## Örnekler

- `moveZerosToEnd([0, 4, 0, 2, 7])` → `[4, 2, 7, 0, 0]`
- `moveZerosToEnd([1, 3])` → `[1, 3]`

## Kısıtlamalar

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## İpucu

Sonuç dizisinde bir sonraki sıfır olmayan değerin yerini izleyin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> moveZerosToEnd(std::vector<int>& nums) { return {}; }
};
```

```java
class Solution {
  public int[] moveZerosToEnd(int[] nums) { return new int[0]; }
}
```

```python
class Solution:
    def moveZerosToEnd(self, nums):
        return []
```

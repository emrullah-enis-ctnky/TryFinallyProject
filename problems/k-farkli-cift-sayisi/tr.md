---
slug: k-farkli-cift-sayisi
title: K Farklı Çift Sayısı
difficulty: orta
topics: [Hashleme]
points: 25
---

## Problem

Farkı tam olarak `k` olan farklı değer çiftlerinin sayısını bulun. Aynı değer çifti, dizide kaç kez oluşursa oluşsun bir kez sayılır.

## Örnekler

- `countKDifferencePairs([3, 1, 4, 1, 5], 2)` → `2`
- `countKDifferencePairs([1, 2, 3, 4], 0)` → `0`

## Kısıtlamalar

- 0 <= nums.length <= 100000; 0 <= k <= 100000; -100000 <= nums[i] <= 100000.

## İpucu

Dizi değerlerini bir kümede tutup her değer için diğer tarafı arayın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int countKDifferencePairs(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public int countKDifferencePairs(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def countKDifferencePairs(self, nums, k):
        return 0
```

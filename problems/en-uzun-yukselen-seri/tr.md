---
slug: en-uzun-yukselen-seri
title: En Uzun Yükselen Seri
difficulty: kolay
topics: [Diziler]
points: 15
---

## Problem

Bir sensörün ardışık ölçümleri `nums` dizisinde tutulur. Ardışık indislerdeki her sonraki değerin kesin olarak daha büyük olduğu en uzun kesintisiz parçanın uzunluğunu döndüren `longestRisingRun` metodunu yazın.

## Örnekler

- `longestRisingRun([1, 2, 2, 4, 6])` → `3`
- `longestRisingRun([5, 4, 3])` → `1`

## Kısıtlamalar

- `1 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## İpucu

Ölçümler yükselmeyi bıraktığında mevcut seriyi yeniden başlatın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int longestRisingRun(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int longestRisingRun(int[] nums) { return 0; }
}
```

```python
class Solution:
    def longestRisingRun(self, nums):
        return 0
```

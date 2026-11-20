---
slug: maksimum-k-ortalamasi
title: Maksimum K Ortalaması
difficulty: orta
topics: [Kayan Pencere]
points: 25
---

## Problem

Uzunluğu `k` olan ardışık bir aralığın elde edebileceği en büyük ortalamayı bulun.

## Örnekler

- `maximumAverage([1, 12, -5, -6, 50, 3], 4)` → `12.75`
- `maximumAverage([5], 1)` → `5.0`

## Kısıtlamalar

- 1 <= k <= nums.length <= 100000; -10000 <= nums[i] <= 10000.

## İpucu

Bölme yapmadan önce pencere toplamlarının en büyüğünü bulun.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  double maximumAverage(std::vector<int>& nums, int k) { return 0.0; }
};
```

```java
class Solution {
  public double maximumAverage(int[] nums, int k) { return 0.0; }
}
```

```python
class Solution:
    def maximumAverage(self, nums, k):
        return 0.0
```

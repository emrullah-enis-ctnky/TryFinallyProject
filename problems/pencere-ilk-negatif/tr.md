---
slug: pencere-ilk-negatif
title: Pencerenin İlk Negatifi
difficulty: orta
topics: [Kuyruk & Deque, Kayan Pencere, Diziler]
points: 30
---

## Problem

Bir cihazın ölçümleri `values` dizisindedir. Her uzunluğu `k` olan kesintisiz parçanın ilk negatif değerini sırayla döndürün. Parçada negatif değer yoksa o cevap için `0` kullanın.

## Örnekler

- `firstNegativePerWindow([12, -1, -7, 8, -15, 30, 16], 3)` → `[-1, -1, -7, -15, -15]`
- `firstNegativePerWindow([2, 3, 4], 2)` → `[0, 0]`

## Kısıtlamalar

- `1 <= k <= values.length <= 100000`
- `-100000 <= values[i] <= 100000`

## İpucu

Her penceredeki negatif değerlerin indislerini sırayla tutun.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> firstNegativePerWindow(std::vector<int>& values, int k) { return {}; }
};
```

```java
class Solution {
  public int[] firstNegativePerWindow(int[] values, int k) { return new int[0]; }
}
```

```python
class Solution:
    def firstNegativePerWindow(self, values, k):
        return []
```

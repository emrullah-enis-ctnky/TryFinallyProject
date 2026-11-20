---
slug: k-en-buyuk-deger
title: K En Büyük Değer
difficulty: orta
topics: [Öncelik Kuyruğu, Diziler]
points: 30
---

## Problem

Bir tam sayı dizisi ve `k` verilir. Değerler büyükten küçüğe sıralandığında `k`'inci sırada bulunan değeri döndüren `kthLargest` metodunu yazın. Aynı değerler sıralamada ayrı ayrı sayılır.

## Örnekler

- `kthLargest([3, 2, 1, 5, 6, 4], 2)` → `5`
- `kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)` → `4`

## Kısıtlamalar

- `1 <= k <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## İpucu

Boyutu `k` olan bir öncelik kuyruğu tutup daha küçük değerleri elerken en büyük `k` değeri saklayabilirsiniz.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int kthLargest(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public int kthLargest(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def kthLargest(self, nums, k):
        return 0
```

---
slug: fenster-maxima-summe
title: Pencere Maksimumları Toplamı
difficulty: orta
topics: [Kayan Pencere, Kuyruk & Deque]
points: 30
---

## Problem

Bir tam sayı dizisi ve pencere uzunluğu `k` verilir. Uzunluğu `k` olan her ardışık pencerenin en büyük değeri bulunur. Bu maksimum değerlerin toplamını döndüren `sumWindowMaximums` metodunu yazın.

## Örnekler

- `sumWindowMaximums([1, 3, -1, -3, 5, 3, 6, 7], 3)` → `29`
- `sumWindowMaximums([4, 4, 4], 2)` → `8`

İlk örnekte pencere maksimumları `3, 3, 5, 5, 6, 7` ve toplamları `29`'dur.

## Kısıtlamalar

- `1 <= k <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`
- Toplam 64 bit işaretli tam sayı aralığındadır.

## İpucu

Bir indeksi kuyrukta tutup, artık maksimum olamayacak değerleri kuyruktan çıkarabilirsiniz.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  long long sumWindowMaximums(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public long sumWindowMaximums(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def sumWindowMaximums(self, nums, k):
        return 0
```

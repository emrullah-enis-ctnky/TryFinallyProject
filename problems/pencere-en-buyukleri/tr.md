---
slug: pencere-en-buyukleri
title: Pencere En Büyükleri
difficulty: zor
topics: [Kuyruk & Deque]
points: 40
---

## Problem

Her uzunluğu `k` olan ardışık pencerenin en büyük değerini sırayla bulun. Her pencere en az bir değer içerir.

## Örnekler

- `windowMaximums([1, 3, -1, -3, 5, 3, 6, 7], 3)` → `[3,3,5,5,6,7]`
- `windowMaximums([4, 2], 2)` → `[4]`

## Kısıtlamalar

- 1 <= k <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## İpucu

Bir indeks kuyruğunda, artık pencereye girmeyenleri çıkarın ve küçük değerleri arkadan temizleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> windowMaximums(std::vector<int>& nums, int k) { return {}; }
};
```

```java
class Solution {
  public int[] windowMaximums(int[] nums, int k) { return {}; }
}
```

```python
class Solution:
    def windowMaximums(self, nums, k):
        return {}
```

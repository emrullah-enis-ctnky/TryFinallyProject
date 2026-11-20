---
slug: alt-dizi-hedef-sayisi
title: Hedef Toplamlı Alt Diziler
difficulty: orta
topics: [Önek Toplamı]
points: 30
---

## Problem

Bir olay akışında toplamı `target` olan ardışık aralıkların sayısını bulun. Aynı aralık farklı başlangıç veya bitiş konumuyla oluşuyorsa ayrı sayılır.

## Örnekler

- `countTargetSubarrays([1, 1, 1], 2)` → `2`
- `countTargetSubarrays([1, 2, 3], 3)` → `2`

## Kısıtlamalar

- 0 <= nums.length <= 60000; -1000 <= nums[i], target <= 1000; cevap int aralığındadır.

## İpucu

Her önek toplamı için daha önce kaç kez gereken önceki toplamın görüldüğünü izleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int countTargetSubarrays(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int countTargetSubarrays(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def countTargetSubarrays(self, nums, target):
        return 0
```

---
slug: hedef-toplamli-alt-kumeler
title: Hedef Toplamlı Alt Kümeler
difficulty: zor
topics: [Geri İzleme, Diziler]
points: 40
---

## Problem

Pozitif tam sayılardan oluşan bir dizi ve `target` verilir. Her indisi en fazla bir kez kullanarak toplamı `target` olan kaç farklı alt küme seçilebileceğini döndüren `countTargetSubsets` metodunu yazın. Aynı değere sahip farklı indisler farklı seçimler oluşturur. Boş alt kümenin toplamı `0` kabul edilir.

## Örnekler

- `countTargetSubsets([2, 3, 5, 6, 8, 10], 10)` → `3`
- `countTargetSubsets([1, 2, 3], 4)` → `1`

İlk örnekte geçerli seçimler `[10]`, `[2, 8]` ve `[2, 3, 5]`'tir.

## Kısıtlamalar

- `0 <= nums.length <= 20`
- `1 <= nums[i] <= 1000`
- `0 <= target <= 10000`

## İpucu

Her sayı için onu seçme ve atlama durumlarını araştırın; kalan toplam hedefi aşınca o dalı kesebilirsiniz.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int countTargetSubsets(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int countTargetSubsets(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def countTargetSubsets(self, nums, target):
        return 0
```

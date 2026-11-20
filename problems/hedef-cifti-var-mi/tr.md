---
slug: hedef-cifti-var-mi
title: Hedef Çifti Var mı
difficulty: kolay
topics: [İki İşaretçi]
points: 15
---

## Problem

Artan sıradaki bir fiyat listesinde toplamı bütçeye eşit iki farklı ürün olup olmadığını belirleyin. `hasPairSum` böyle bir çift varsa true döndürür.

## Örnekler

- `hasPairSum([1, 3, 6, 9], 10)` → `true`
- `hasPairSum([2, 4, 8], 7)` → `false`

## Kısıtlamalar

- 0 <= nums.length <= 100000; nums artan sıradadır; hedef ve değerler int aralığındadır.

## İpucu

Listenin iki ucundan başlayıp toplamı karşılaştırın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool hasPairSum(std::vector<int>& nums, int target) { return false; }
};
```

```java
class Solution {
  public boolean hasPairSum(int[] nums, int target) { return false; }
}
```

```python
class Solution:
    def hasPairSum(self, nums, target):
        return false
```

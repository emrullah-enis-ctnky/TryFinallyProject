---
slug: sirali-cift-toplami
title: Sıralı Çift Toplamı
difficulty: kolay
topics: [İki İşaretçi, Diziler]
points: 15
---

## Problem

Artan sırada sıralanmış bir tam sayı dizisi ve `target` verilir. Farklı indislerdeki iki değerin toplamı `target` ise `true`, aksi halde `false` döndüren `hasPairWithSum` metodunu yazın.

## Örnekler

- `hasPairWithSum([1, 2, 4, 7], 6)` → `true`
- `hasPairWithSum([1, 3, 5], 10)` → `false`

İlk örnekte `2 + 4 = 6` olur.

## Kısıtlamalar

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`
- `-200000 <= target <= 200000`
- Dizi artan sırada veya eşit değerler içerecek biçimde sıralıdır.

## İpucu

Toplam küçükse soldaki, büyükse sağdaki indisi hareket ettirin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  bool hasPairWithSum(std::vector<int>& nums, int target) { return false; }
};
```

```java
class Solution {
  public boolean hasPairWithSum(int[] nums, int target) { return false; }
}
```

```python
class Solution:
    def hasPairWithSum(self, nums, target):
        return False
```

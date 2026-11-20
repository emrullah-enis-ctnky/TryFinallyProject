---
slug: en-kisa-yeterli-aralik
title: En Kısa Yeterli Aralık
difficulty: orta
topics: [Diziler, Kayan Pencere]
points: 30
---

## Problem

Her gün pozitif sayıda ürün satan bir mağazanın satışları `sales` dizisinde verilir. Toplam satışı en az `target` olan en kısa kesintisiz gün aralığının uzunluğunu döndürün. Böyle bir aralık yoksa `0` döndürün.

## Örnekler

- `shortestEnoughRange([2, 3, 1, 2, 4, 3], 7)` → `2`
- `shortestEnoughRange([1, 1, 1], 5)` → `0`

## Kısıtlamalar

- `1 <= sales.length <= 100000`
- `1 <= sales[i], target <= 1000000000`

## İpucu

Pozitif satışlarda pencere toplamı eşik değeri aştığında sol ucunu ilerletebilirsiniz.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int shortestEnoughRange(std::vector<int>& sales, int target) { return 0; }
};
```

```java
class Solution {
  public int shortestEnoughRange(int[] sales, int target) { return 0; }
}
```

```python
class Solution:
    def shortestEnoughRange(self, sales, target):
        return 0
```

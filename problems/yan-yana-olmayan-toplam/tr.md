---
slug: yan-yana-olmayan-toplam
title: Yan Yana Olmayan Toplam
difficulty: orta
topics: [Dinamik Programlama 1D, Diziler]
points: 25
---

## Problem

Her değeri bir evdeki para miktarını gösteren, negatif olmayan bir dizi verilir. Yan yana olan evlerden aynı anda para alınamayacağına göre alınabilecek en büyük toplamı döndüren `maxNonAdjacentSum` metodunu yazın. Hiç ev seçmemek de mümkündür.

## Örnekler

- `maxNonAdjacentSum([2, 7, 9, 3, 1])` → `12`
- `maxNonAdjacentSum([2, 1, 1, 2])` → `4`

İlk örnekte ikinci ve üçüncü ev birlikte seçilemez; en iyi seçim `2 + 9 + 1 = 12`'dir.

## Kısıtlamalar

- `0 <= values.length <= 100000`
- `0 <= values[i] <= 10000`

## İpucu

Her konum için o evi seçmenin toplamı ile seçmeden önceki en iyi toplamı karşılaştırın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int maxNonAdjacentSum(std::vector<int>& values) { return 0; }
};
```

```java
class Solution {
  public int maxNonAdjacentSum(int[] values) { return 0; }
}
```

```python
class Solution:
    def maxNonAdjacentSum(self, values):
        return 0
```

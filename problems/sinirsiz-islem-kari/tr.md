---
slug: sinirsiz-islem-kari
title: Sınırsız İşlem Kârı
difficulty: orta
topics: [Açgözlü]
points: 25
---

## Problem

Her gün bir varlıktan en fazla bir birim alıp satabilirsiniz; aynı anda en fazla bir birim tutabilirsiniz. Fiyatlar biliniyorken elde edilebilecek en büyük toplam kârı bulun.

## Örnekler

- `unlimitedTradeProfit([7, 1, 5, 3, 6, 4])` → `7`
- `unlimitedTradeProfit([5, 4, 3])` → `0`

## Kısıtlamalar

- 1 <= prices.length <= 100000; 0 <= prices[i] <= 100000.

## İpucu

Her yükselen ardışık fiyat farkı, o aralıktaki alım satım kârını temsil eder.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int unlimitedTradeProfit(std::vector<int>& prices) { return 0; }
};
```

```java
class Solution {
  public int unlimitedTradeProfit(int[] prices) { return 0; }
}
```

```python
class Solution:
    def unlimitedTradeProfit(self, prices):
        return 0
```

---
slug: tek-islem-en-yuksek-kar
title: Tek Alış Satış Kârı
difficulty: kolay
topics: [Diziler, Açgözlü]
points: 15
---

## Problem

Bir ürünün günlere göre fiyatı `prices` dizisinde verilir. Önce bir gün alıp daha sonraki bir gün en fazla bir kez satabilirsiniz. Elde edilebilecek en yüksek kârı `maximumSingleTradeProfit` ile bulun; kâr yoksa `0` döndürün.

## Örnekler

- `maximumSingleTradeProfit([7, 1, 5, 3, 6, 4])` → `5`
- `maximumSingleTradeProfit([7, 6, 4, 3, 1])` → `0`

## Kısıtlamalar

- `1 <= prices.length <= 100000`
- `0 <= prices[i] <= 1000000000`

## İpucu

Her satış gününde, o güne kadar görülen en düşük alış fiyatını kullanın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int maximumSingleTradeProfit(std::vector<int>& prices) { return 0; }
};
```

```java
class Solution {
  public int maximumSingleTradeProfit(int[] prices) { return 0; }
}
```

```python
class Solution:
    def maximumSingleTradeProfit(self, prices):
        return 0
```

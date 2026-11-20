---
slug: hedefe-en-yakin-cift
title: Hedefe En Yakın Çift
difficulty: orta
topics: [Diziler, İki İşaretçi]
points: 30
---

## Problem

Artan sırada sıralanmış bir fiyat listesi `prices` ve bir hedef `target` verilir. Toplamı hedefe mutlak fark bakımından en yakın olan iki farklı indisteki fiyatı döndüren `closestPair` metodunu yazın. Birden fazla çift eşit derecede yakınsa önce küçük fiyatı, sonra küçük büyük fiyatı seçin.

## Örnekler

- `closestPair([1, 3, 4, 8], 7)` → `[3, 4]`
- `closestPair([2, 5, 6, 9], 10)` → `[2, 9]`

## Kısıtlamalar

- `2 <= prices.length <= 100000`
- `prices` azalmayan sırada sıralıdır.
- `-1000000000 <= prices[i], target <= 1000000000`

## İpucu

Toplam hedefin altında kalırsa daha büyük bir değere, üstünde kalırsa daha küçük bir değere yönelin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> closestPair(std::vector<int>& prices, int target) { return {}; }
};
```

```java
class Solution {
  public int[] closestPair(int[] prices, int target) { return new int[0]; }
}
```

```python
class Solution:
    def closestPair(self, prices, target):
        return []
```

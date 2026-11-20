---
slug: bozuk-para-yollari
title: Bozuk Para Yolları
difficulty: orta
topics: [Dinamik Programlama 1D]
points: 30
---

## Problem

Bir otomatın kullanabileceği farklı para değerleri `coins` dizisindedir. Her değerden sınırsız sayıda kullanarak toplam `amount` elde etmenin kaç farklı kombinasyonu olduğunu bulun. Aynı paraları farklı sırada vermek yeni bir kombinasyon sayılmaz.

## Örnekler

- `countCoinWays([1, 2, 5], 5)` → `4`
- `countCoinWays([2], 3)` → `0`

## Kısıtlamalar

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 1000`; değerler farklıdır.
- `0 <= amount <= 1000`
- Cevap 32 bit işaretli tam sayı aralığındadır.

## İpucu

Her para değerini işlerken, daha önceki değerleri kullanarak oluşturulabilen toplamları genişletin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int countCoinWays(std::vector<int>& coins, int amount) { return 0; }
};
```

```java
class Solution {
  public int countCoinWays(int[] coins, int amount) { return 0; }
}
```

```python
class Solution:
    def countCoinWays(self, coins, amount):
        return 0
```

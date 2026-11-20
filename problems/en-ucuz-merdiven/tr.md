---
slug: en-ucuz-merdiven
title: En Ucuz Merdiven
difficulty: orta
topics: [Dinamik Programlama 1D, Diziler]
points: 30
---

## Problem

Bir merdivenin her basamağına çıkış ücreti `cost[i]` ile verilmiştir. En alttan başlayıp her adımda bir veya iki basamak çıkarak tepeye ulaşabilirsiniz; başlangıçta ilk veya ikinci basamağa çıkabilirsiniz. Basılan basamakların ücretini ödeyerek tepeye ulaşmanın en düşük toplam maliyetini `minimumClimbCost` ile bulun.

## Örnekler

- `minimumClimbCost([10, 15, 20])` → `15`
- `minimumClimbCost([1, 100, 1, 1])` → `2`

## Kısıtlamalar

- `2 <= cost.length <= 100000`
- `0 <= cost[i] <= 1000000000`

## İpucu

Bir basamağa ulaşmanın en düşük maliyeti, önceki iki basamaktan gelen seçeneklerin küçüğüdür.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  long long minimumClimbCost(std::vector<int>& cost) { return 0; }
};
```

```java
class Solution {
  public long minimumClimbCost(int[] cost) { return 0; }
}
```

```python
class Solution:
    def minimumClimbCost(self, cost):
        return 0
```

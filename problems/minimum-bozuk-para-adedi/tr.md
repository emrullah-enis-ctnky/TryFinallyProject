---
slug: minimum-bozuk-para-adedi
title: Minimum Bozuk Para Adedi
difficulty: orta
topics: [Dinamik Programlama 1D]
points: 30
---

## Problem

Her bozuk para türünden sınırsız sayıda kullanabilirsiniz. Verilen toplamı oluşturmak için gereken en az para adedini bulun; mümkün değilse -1 döndürün.

## Örnekler

- `minimumCoins([1, 2, 5], 11)` → `3`
- `minimumCoins([2], 3)` → `-1`

## Kısıtlamalar

- 1 <= coins.length <= 100; 1 <= coins[i] <= 10000; 0 <= amount <= 10000.

## İpucu

Her toplam için son kullanılan madeni parayı deneyin ve daha küçük önceki sonucu seçin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int minimumCoins(std::vector<int>& coins, int amount) { return 0; }
};
```

```java
class Solution {
  public int minimumCoins(int[] coins, int amount) { return 0; }
}
```

```python
class Solution:
    def minimumCoins(self, coins, amount):
        return 0
```

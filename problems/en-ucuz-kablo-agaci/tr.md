---
slug: en-ucuz-kablo-agaci
title: En Ucuz Kablo Ağı
difficulty: zor
topics: [Graflar, Açgözlü, Sıralama]
points: 45
---

## Problem

`n` istasyonu birbirine bağlayan kablolar `[u, v, cost]` biçiminde verilir. İstasyonlar arasında doğrudan bağlantı yönsüzdür. Tüm istasyonları birbirine ulaştıran en düşük toplam maliyeti `minimumNetworkCost` ile bulun. Tüm istasyonlar bağlanamıyorsa `-1` döndürün.

## Örnekler

- `minimumNetworkCost(4, [[0, 1, 3], [1, 2, 2], [2, 3, 4], [0, 3, 10]])` → `9`
- `minimumNetworkCost(3, [[0, 1, 5]])` → `-1`

## Kısıtlamalar

- `1 <= n <= 1000`
- `0 <= edges.length <= 10000`
- Her bağlantı `[u, v, cost]` biçimindedir; `0 <= u, v < n` ve `-1000000 <= cost <= 1000000`.

## İpucu

Kenarları ucuzdan pahalıya inceleyip yalnızca henüz bağlı olmayan bileşenleri birleştirenleri seçin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  long long minimumNetworkCost(int n, std::vector<std::vector<int>>& edges) { return -1; }
};
```

```java
class Solution {
  public long minimumNetworkCost(int n, int[][] edges) { return -1; }
}
```

```python
class Solution:
    def minimumNetworkCost(self, n, edges):
        return -1
```

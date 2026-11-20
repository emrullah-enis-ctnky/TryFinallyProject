---
slug: en-kisa-istasyon-mesafeleri
title: En Kısa İstasyon Mesafeleri
difficulty: zor
topics: [Graflar, Öncelik Kuyruğu]
points: 45
---

## Problem

`n` istasyon arasındaki çift yönlü yollar `[a, b, time]` biçiminde verilir. `source` istasyonundan diğer tüm istasyonlara en kısa seyahat sürelerini `shortestStationDistances` ile döndürün. Ulaşılamayan istasyonlar için `-1` kullanın.

## Örnekler

- `shortestStationDistances(4, [[0, 1, 4], [0, 2, 1], [2, 1, 2], [1, 3, 1]], 0)` → `[0, 3, 1, 4]`
- `shortestStationDistances(3, [[0, 1, 5]], 0)` → `[0, 5, -1]`

## Kısıtlamalar

- `1 <= n <= 500`
- `0 <= edges.length <= 10000`
- Her yol `[a, b, time]` biçimindedir; `0 <= a, b < n` ve `0 <= time <= 1000000`.
- En kısa mesafeler 32 bit işaretli tam sayı aralığındadır.

## İpucu

Şu ana kadar bilinen en düşük süreli istasyonu seçip komşularının tahminlerini güncelleyin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> shortestStationDistances(int n, std::vector<std::vector<int>>& edges, int source) { return {}; }
};
```

```java
class Solution {
  public int[] shortestStationDistances(int n, int[][] edges, int source) { return new int[0]; }
}
```

```python
class Solution:
    def shortestStationDistances(self, n, edges, source):
        return []
```

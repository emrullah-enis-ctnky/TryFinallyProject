---
slug: istasyon-turu
title: İstasyon Turu
difficulty: orta
topics: [Açgözlü]
points: 30
---

## Problem

Dairesel bir rotada her istasyonda alınabilecek yakıt ve sonraki istasyona gitme maliyeti verilir. Turu tamamlayabilecek en küçük başlangıç indisini döndürün; böyle bir istasyon yoksa -1 döndürün.

## Örnekler

- `startStation([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])` → `3`
- `startStation([2, 3, 4], [3, 4, 3])` → `-1`

## Kısıtlamalar

- 1 <= fuel.length == cost.length <= 100000; 0 <= fuel[i], cost[i] <= 100000.

## İpucu

Toplam yakıt maliyetleri karşılıyorsa, başarısız olan aday başlangıçların arasındaki istasyonlardan başlayamazsınız.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int startStation(std::vector<int>& fuel, std::vector<int>& cost) { return 0; }
};
```

```java
class Solution {
  public int startStation(int[] fuel, int[] cost) { return 0; }
}
```

```python
class Solution:
    def startStation(self, fuel, cost):
        return 0
```

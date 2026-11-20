---
slug: daha-sicak-gun-bekle
title: Daha Sıcak Gün Bekle
difficulty: orta
topics: [Yığın, Diziler]
points: 30
---

## Problem

Her günün sıcaklığı `temperatures` dizisindedir. Her gün için, daha sıcak bir günün gelmesine kadar kaç gün bekleneceğini döndürün. Gelecekte daha sıcak gün yoksa o gün için `0` döndürün.

## Örnekler

- `daysUntilWarmer([73, 74, 75, 71, 69, 72, 76, 73])` → `[1, 1, 4, 2, 1, 1, 0, 0]`
- `daysUntilWarmer([30, 40, 50])` → `[1, 1, 0]`

## Kısıtlamalar

- `1 <= temperatures.length <= 100000`
- `-50000 <= temperatures[i] <= 50000`

## İpucu

Daha sıcak gün bulunmamış günleri, sıcaklıkları azalmayacak biçimde yığında tutun.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> daysUntilWarmer(std::vector<int>& temperatures) { return {}; }
};
```

```java
class Solution {
  public int[] daysUntilWarmer(int[] temperatures) { return new int[0]; }
}
```

```python
class Solution:
    def daysUntilWarmer(self, temperatures):
        return []
```

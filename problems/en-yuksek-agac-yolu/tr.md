---
slug: en-yuksek-agac-yolu
title: En Yüksek Ağaç Yolu
difficulty: zor
topics: [Ağaçlar]
points: 45
---

## Problem

Bir ikili ağaç, kökten başlayan `nodes` dizisiyle kodlanır; `2*i+1` ve `2*i+2` çocuk indisleridir. `-2147483648` boş düğümü gösterir. Ağaçta herhangi iki düğüm arasındaki bir yolun toplam değerini en büyükleyen `maximumTreePathSum` metodunu yazın. Boş ağaç için `0` döndürün.

## Örnekler

- `maximumTreePathSum([-10, 9, 20, -2147483648, -2147483648, 15, 7])` → `42`
- `maximumTreePathSum([-5])` → `-5`

## Kısıtlamalar

- `0 <= nodes.length <= 100000`
- Dizi geçerli bir ikili ağacı kodlar; boş düğümlerin altında değer bulunmaz.
- Düğüm değerleri `-10000` ile `10000` arasındadır.

## İpucu

Bir düğümün üst düğüme taşıyabileceği katkı tek bir alt dala gider; en iyi yol ise iki dalı birleştirebilir.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int maximumTreePathSum(std::vector<int>& nodes) { return 0; }
};
```

```java
class Solution {
  public int maximumTreePathSum(int[] nodes) { return 0; }
}
```

```python
class Solution:
    def maximumTreePathSum(self, nodes):
        return 0
```

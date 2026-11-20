---
slug: balonlari-patlat
title: Balonları Patlat
difficulty: orta
topics: [Aralıklar, Açgözlü, Sıralama]
points: 30
---

## Problem

Her balon, yatay eksende kapladığı kapalı `[start, end]` aralığıyla verilir. Bir ok `x` konumunda atıldığında `start <= x <= end` koşulunu sağlayan balonları patlatır. Tüm balonları patlatmak için gereken en az ok sayısını `minimumArrows` ile bulun.

## Örnekler

- `minimumArrows([[10, 16], [2, 8], [1, 6], [7, 12]])` → `2`
- `minimumArrows([[1, 2], [2, 3], [3, 4]])` → `2`

## Kısıtlamalar

- `0 <= balloons.length <= 100000`
- `-1000000000 <= balloons[i][0] <= balloons[i][1] <= 1000000000`

## İpucu

Bir ok atacağınızda, kapsadığı aralıkların bitiş noktalarının en küçüğünü seçin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int minimumArrows(std::vector<std::vector<int>>& balloons) { return 0; }
};
```

```java
class Solution {
  public int minimumArrows(int[][] balloons) { return 0; }
}
```

```python
class Solution:
    def minimumArrows(self, balloons):
        return 0
```

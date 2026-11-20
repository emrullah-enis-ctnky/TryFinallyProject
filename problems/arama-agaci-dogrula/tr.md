---
slug: arama-agaci-dogrula
title: Arama Ağacını Doğrula
difficulty: orta
topics: [İkili Arama Ağaçları]
points: 30
---

## Problem

Bir ikili arama ağacı, kökü `0` indisinde olacak şekilde diziyle kodlanır. `i` indisindeki düğümün çocukları `2 * i + 1` ve `2 * i + 2` indislerindedir; `-1` eksik düğümü gösterir. Her var olan düğümün ebeveyni vardır ve değerler benzersizdir. Ağacın ikili arama ağacı kurallarına uyup uymadığını döndüren `isValidBst` metodunu yazın.

## Örnekler

- `isValidBst([8, 3, 10, 1, 6, -1, 14])` → `true`
- `isValidBst([8, 10, 5])` → `false`

## Kısıtlamalar

- `0 <= nodes.length <= 10000`
- Düğüm değerleri `-1` (eksik) veya `0` ile `100000` arasındadır.
- Düğüm değerleri benzersizdir.
- Kök yoksa ağaç boştur ve geçerlidir.

## İpucu

Her düğüm için geçerli olabileceği alt ve üst sınırı da birlikte izleyin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  bool isValidBst(std::vector<int>& nodes) { return false; }
};
```

```java
class Solution {
  public boolean isValidBst(int[] nodes) { return false; }
}
```

```python
class Solution:
    def isValidBst(self, nodes):
        return False
```

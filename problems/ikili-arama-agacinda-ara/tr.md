---
slug: ikili-arama-agacinda-ara
title: İkili Arama Ağacında Ara
difficulty: kolay
topics: [İkili Arama Ağaçları, İkili Arama]
points: 20
---

## Problem

Geçerli bir ikili arama ağacı, seviye sırasındaki `nodes` dizisiyle kodlanır; `-1` boş düğümü gösterir. `target` değerinin ağaçta bulunup bulunmadığını `searchEncodedBst` ile belirleyin.

## Örnekler

- `searchEncodedBst([8, 3, 10, 1, 6, -1, 14], 6)` → `true`
- `searchEncodedBst([8, 3, 10], 7)` → `false`

## Kısıtlamalar

- `0 <= nodes.length <= 100000`
- Dizi geçerli bir ikili arama ağacını kökten başlayarak seviye sırasında kodlar.
- Düğüm değerleri `-100000 <= value <= 100000`; `-1` yalnızca boş düğümü gösterir.

## İpucu

Her düğümde, hedef değerle karşılaştırıp yalnızca uygun alt ağaca ilerleyin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  bool searchEncodedBst(std::vector<int>& nodes, int target) { return false; }
};
```

```java
class Solution {
  public boolean searchEncodedBst(int[] nodes, int target) { return false; }
}
```

```python
class Solution:
    def searchEncodedBst(self, nodes, target):
        return False
```

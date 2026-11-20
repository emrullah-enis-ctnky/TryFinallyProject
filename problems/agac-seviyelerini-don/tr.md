---
slug: agac-seviyelerini-don
title: Ağaç Seviyelerini Döndür
difficulty: orta
topics: [Ağaçlar, Kuyruk & Deque]
points: 30
---

## Problem

Bir ikili ağaç, kökten başlayarak seviye sırasındaki `nodes` dizisiyle kodlanır; `-1` boş düğümü gösterir. Her seviyedeki değerleri soldan sağa gruplayıp `levelValues` ile döndürün. Boş ağaç için boş liste döndürün.

## Örnekler

- `levelValues([8, 3, 10, 1, 6])` → `[[8], [3, 10], [1, 6]]`
- `levelValues([])` → `[]`

## Kısıtlamalar

- `0 <= nodes.length <= 100000`
- Dizi, kök indis `0` olacak biçimde `2*i+1` ve `2*i+2` çocuk indisleri kullanılarak geçerli bir ağacı kodlar; boş düğümlerin altında değer bulunmaz.
- `-100000 <= nodes[i] <= 100000`; `-1` boş düğümü belirtir.

## İpucu

Bir seviyedeki düğümleri işlerken bir sonraki seviyenin çocuklarını sıraya ekleyin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> levelValues(std::vector<int>& nodes) { return {}; }
};
```

```java
class Solution {
  public int[][] levelValues(int[] nodes) { return new int[0][0]; }
}
```

```python
class Solution:
    def levelValues(self, nodes):
        return []
```

---
slug: ag-baglantilarini-duzenle
title: Ağ Bağlantılarını Düzenle
difficulty: orta
topics: [Graflar, Açgözlü]
points: 30
---

## Problem

`n` bilgisayar ve `[a, b]` biçimindeki yönsüz kablolar verilir. Bir kabloyu söküp iki ayrı bileşeni bağlayacak şekilde yeniden takabilirsiniz. Tüm bilgisayarları bağlamak için gereken en az yeniden takma sayısını `minimumCableMoves` ile bulun. Yeterli kablo yoksa `-1` döndürün.

## Örnekler

- `minimumCableMoves(4, [[0, 1], [0, 2], [1, 2]])` → `1`
- `minimumCableMoves(6, [[0, 1], [0, 2], [0, 3], [1, 2]])` → `-1`

## Kısıtlamalar

- `1 <= n <= 1000`
- `0 <= edges.length <= 10000`
- Her kablo `[a, b]` biçimindedir; `0 <= a, b < n`.

## İpucu

Önce ayrı bağlı bileşenleri sayın; her yeni bağlantı iki bileşeni birleştirir.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int minimumCableMoves(int n, std::vector<std::vector<int>>& edges) { return 0; }
};
```

```java
class Solution {
  public int minimumCableMoves(int n, int[][] edges) { return 0; }
}
```

```python
class Solution:
    def minimumCableMoves(self, n, edges):
        return 0
```

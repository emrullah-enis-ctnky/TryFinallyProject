---
slug: graf-yolu-var-mi
title: Grafta Yol Var mı
difficulty: orta
topics: [Graflar]
points: 25
---

## Problem

`0` ile `n-1` arasındaki düğümlerden oluşan yönsüz bir ağda, iki düğüm arasında bir yol bulunup bulunmadığını belirleyin. Her kenar `[u, v]` biçimindedir.

## Örnekler

- `hasPath(6, [[0,1],[1,2],[3,4]], 0, 2)` → `true`
- `hasPath(4, [[0,1],[2,3]], 0, 3)` → `false`

## Kısıtlamalar

- 1 <= n <= 100000; kenarlar geçerlidir; source ve destination geçerli düğümlerdir.

## İpucu

Bir düğümden başlayıp komşularını sırayla ziyaret edin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool hasPath(int n, std::vector<std::vector<int>>& edges, int source, int destination) { return false; }
};
```

```java
class Solution {
  public boolean hasPath(int n, int[][] edges, int source, int destination) { return false; }
}
```

```python
class Solution:
    def hasPath(self, n, edges, source, destination):
        return false
```

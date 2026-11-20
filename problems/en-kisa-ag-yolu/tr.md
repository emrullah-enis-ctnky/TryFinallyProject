---
slug: en-kisa-ag-yolu
title: En Kısa Ağ Yolu
difficulty: orta
topics: [Graflar, Kuyruk & Deque]
points: 30
---

## Problem

Tek yönlü kablolarla bağlanan `n` istasyon ve `[from, to]` biçimindeki bağlantılar verilir. `shortestRouteLength`, `start` istasyonundan `destination` istasyonuna ulaşmak için gereken en az kablo sayısını döndürmelidir. Ulaşılamıyorsa `-1` döndürün.

## Örnekler

- `shortestRouteLength(5, [[0, 1], [1, 3], [0, 2], [2, 3]], 0, 3)` → `2`
- `shortestRouteLength(3, [[0, 1]], 0, 2)` → `-1`

## Kısıtlamalar

- `1 <= n <= 500`
- `0 <= edges.length <= 10000`
- Her bağlantı `[from, to]` biçimindedir ve indisler `0` ile `n - 1` arasındadır.

## İpucu

İstasyondan istasyona katman katman ilerlemek, ilk varışta en kısa yolu bulur.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int shortestRouteLength(int n, std::vector<std::vector<int>>& edges, int start, int destination) { return -1; }
};
```

```java
class Solution {
  public int shortestRouteLength(int n, int[][] edges, int start, int destination) { return -1; }
}
```

```python
class Solution:
    def shortestRouteLength(self, n, edges, start, destination):
        return -1
```

---
slug: aralik-sorgulari-toplami
title: Aralık Sorguları Toplamı
difficulty: orta
topics: [Önek Toplamı, Diziler]
points: 30
---

## Problem

Günlük satışları `sales` dizisinde tutan bir mağaza, birçok gün aralığının toplamını sorar. Her sorgu `[left, right]` biçiminde ve iki uç da dahildir. Tüm sorgu cevaplarını sırayla döndüren `rangeQuerySums` metodunu yazın.

## Örnekler

- `rangeQuerySums([3, -1, 4, 2], [[0, 2], [1, 3]])` → `[6, 5]`
- `rangeQuerySums([7], [[0, 0]])` → `[7]`

## Kısıtlamalar

- `1 <= sales.length <= 100000`
- `1 <= queries.length <= 100000`
- `0 <= queries[i][0] <= queries[i][1] < sales.length`
- `-1000 <= sales[i] <= 1000`

## İpucu

Her aralığı baştan toplamak yerine, başına kadar olan toplamları saklayın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> rangeQuerySums(std::vector<int>& sales, std::vector<std::vector<int>>& queries) { return {}; }
};
```

```java
class Solution {
  public int[] rangeQuerySums(int[] sales, int[][] queries) { return new int[0]; }
}
```

```python
class Solution:
    def rangeQuerySums(self, sales, queries):
        return []
```

---
slug: aralik-kesisimleri
title: Aralık Kesişimleri
difficulty: orta
topics: [Aralıklar]
points: 25
---

## Problem

Başlangıç sırasına göre sıralı ve kendi içinde çakışmayan iki zaman çizelgesinin ortak aralıklarını bulun. Uç noktaları dahil ederek her kesişimi döndürün.

## Örnekler

- `intervalIntersections([[0, 2], [5, 10]], [[1, 5], [8, 12]])` → `[[1,2],[5,5],[8,10]]`
- `intervalIntersections([[1, 3]], [[4, 6]])` → `[]`

## Kısıtlamalar

- 0 <= first.length, second.length <= 1000; aralıklar başlangıca göre sıralıdır; start <= end.

## İpucu

İki aralığın kesişimini hesaplayın ve bitişi daha erken olan aralığı ilerletin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> intervalIntersections(std::vector<std::vector<int>>& first, std::vector<std::vector<int>>& second) { return {}; }
};
```

```java
class Solution {
  public int[][] intervalIntersections(int[][] first, int[][] second) { return {}; }
}
```

```python
class Solution:
    def intervalIntersections(self, first, second):
        return {}
```

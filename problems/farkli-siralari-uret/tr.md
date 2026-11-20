---
slug: farkli-siralari-uret
title: Farklı Sıraları Üret
difficulty: orta
topics: [Geri İzleme, Diziler]
points: 30
---

## Problem

Bir planlama görevi için birbirinden farklı `tasks` numaraları verilir. Bu görevleri tamamlamanın tüm olası sıralamalarını, sayısal olarak sözlük sırasına göre döndüren `allTaskOrders` metodunu yazın.

## Örnekler

- `allTaskOrders([1, 2, 3])` → `[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]`
- `allTaskOrders([4])` → `[[4]]`

## Kısıtlamalar

- `1 <= tasks.length <= 8`
- `tasks` içindeki sayılar birbirinden farklıdır.

## İpucu

Her adımda henüz seçilmemiş bir görevi sıraya ekleyip tamamlanan sıralamaları sonuçlara aktarın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> allTaskOrders(std::vector<int>& tasks) { return {}; }
};
```

```java
class Solution {
  public int[][] allTaskOrders(int[] tasks) { return new int[0][0]; }
}
```

```python
class Solution:
    def allTaskOrders(self, tasks):
        return []
```

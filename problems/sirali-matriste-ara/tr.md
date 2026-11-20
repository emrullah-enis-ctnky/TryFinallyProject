---
slug: sirali-matriste-ara
title: Sıralı Matriste Ara
difficulty: orta
topics: [İkili Arama, Diziler]
points: 25
---

## Problem

Depo rafları `matrix` ikili dizisinde gösterilir. Her satır artan sıradadır ve her satırın ilk değeri önceki satırın son değerinden büyüktür. `target` değeri varsa `true`, yoksa `false` döndüren `searchSortedMatrix` metodunu yazın.

## Örnekler

- `searchSortedMatrix([[1, 3, 5], [8, 10, 12]], 10)` → `true`
- `searchSortedMatrix([[1, 3, 5], [8, 10, 12]], 7)` → `false`

## Kısıtlamalar

- `1 <= matrix.length, matrix[i].length <= 1000`
- Matris dikdörtgendir ve tüm değerler satır satır artan sıradadır.
- `-1000000000 <= matrix[i][j], target <= 1000000000`

## İpucu

Satır ve sütun indislerini, tüm hücreler tek sıralı diziymiş gibi hesaplayın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  bool searchSortedMatrix(std::vector<std::vector<int>>& matrix, int target) { return false; }
};
```

```java
class Solution {
  public boolean searchSortedMatrix(int[][] matrix, int target) { return false; }
}
```

```python
class Solution:
    def searchSortedMatrix(self, matrix, target):
        return False
```

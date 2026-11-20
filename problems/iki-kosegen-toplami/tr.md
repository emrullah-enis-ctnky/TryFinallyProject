---
slug: iki-kosegen-toplami
title: İki Köşegenin Toplamı
difficulty: kolay
topics: [Diziler]
points: 15
---

## Problem

Kare bir panodaki ana ve karşı köşegen değerlerini toplayın. Tek boyutlu panoda ortadaki hücreyi iki kez saymayın.

## Örnekler

- `diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` → `25`
- `diagonalSum([[5]])` → `5`

## Kısıtlamalar

- 1 <= n <= 1000; matrix n x n boyutundadır; -10000 <= hücre <= 10000.

## İpucu

Her satır için sol ve sağ köşegen sütunlarını hesaplayın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int diagonalSum(std::vector<std::vector<int>>& matrix) { return 0; }
};
```

```java
class Solution {
  public int diagonalSum(int[][] matrix) { return 0; }
}
```

```python
class Solution:
    def diagonalSum(self, matrix):
        return 0
```

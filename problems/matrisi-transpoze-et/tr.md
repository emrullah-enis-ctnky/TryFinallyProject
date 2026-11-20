---
slug: matrisi-transpoze-et
title: Matrisi Transpoze Et
difficulty: orta
topics: [Diziler]
points: 25
---

## Problem

Bir tabloyu satır ve sütunları yer değiştirerek transpoze edin. `transpose`, yeni matrisi döndürür. Girdi boş olabilir.

## Örnekler

- `transpose([[1, 2, 3], [4, 5, 6]])` → `[[1,4],[2,5],[3,6]]`
- `transpose([[7]])` → `[[7]]`

## Kısıtlamalar

- 0 <= rows, columns <= 100; tüm satırlar aynı uzunluktadır; -1000 <= hücre <= 1000.

## İpucu

Girdi hücresi `[r][c]`, sonuçta `[c][r]` konumuna gider.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> transpose(std::vector<std::vector<int>>& matrix) { return {}; }
};
```

```java
class Solution {
  public int[][] transpose(int[][] matrix) { return {}; }
}
```

```python
class Solution:
    def transpose(self, matrix):
        return {}
```

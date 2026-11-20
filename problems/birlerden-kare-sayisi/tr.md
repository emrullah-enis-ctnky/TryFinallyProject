---
slug: birlerden-kare-sayisi
title: Birlerden Kare Sayısı
difficulty: orta
topics: [Dinamik Programlama 2D]
points: 30
---

## Problem

Sıfır ve birlerden oluşan bir haritadaki tüm kare bölgeleri sayın. Her hücre 1 olan her boyuttaki kare ayrı sayılır.

## Örnekler

- `countOneSquares([[1, 0, 1], [1, 1, 1], [1, 1, 1]])` → `10`
- `countOneSquares([[0, 0], [0, 0]])` → `0`

## Kısıtlamalar

- 0 <= rows, columns <= 100; tüm satırlar aynı uzunluktadır; hücreler 0 veya 1 değeridir.

## İpucu

Bir hücrede biten karelerin sayısı, o hücrenin oluşturabildiği en büyük karenin kenar uzunluğudur.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int countOneSquares(std::vector<std::vector<int>>& grid) { return 0; }
};
```

```java
class Solution {
  public int countOneSquares(int[][] grid) { return 0; }
}
```

```python
class Solution:
    def countOneSquares(self, grid):
        return 0
```

---
slug: iki-matrisin-toplami
title: Matrisleri Topla
difficulty: kolay
topics: [Diziler]
points: 15
---

## Problem

Aynı boyuttaki iki sensör tablosunu hücre hücre toplayın. `addMatrices` sonuç matrisini döndürür.

## Örnekler

- `addMatrices([[1, 2], [3, 4]], [[5, 1], [0, 2]])` → `[[6,3],[3,6]]`
- `addMatrices([[], []], [[], []])` → `[[],[]]`

## Kısıtlamalar

- Matrislerin satır ve sütun sayıları eşittir; en fazla 100 satır ve sütun vardır; -1000 <= hücre <= 1000.

## İpucu

Her hücre için aynı konumdaki iki değeri toplayın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> addMatrices(std::vector<std::vector<int>>& a, std::vector<std::vector<int>>& b) { return {}; }
};
```

```java
class Solution {
  public int[][] addMatrices(int[][] a, int[][] b) { return {}; }
}
```

```python
class Solution:
    def addMatrices(self, a, b):
        return {}
```

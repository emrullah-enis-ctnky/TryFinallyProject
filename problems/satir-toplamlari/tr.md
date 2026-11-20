---
slug: satir-toplamlari
title: Satır Toplamları
difficulty: kolay
topics: [Diziler]
points: 15
---

## Problem

Bir depo tablosunun her satırındaki miktarları toplayın. `rowSums`, her satır için bir toplamı aynı sırada döndürür.

## Örnekler

- `rowSums([[2, 3], [4, 1, 5]])` → `[5,10]`
- `rowSums([[], [7]])` → `[0,7]`

## Kısıtlamalar

- 0 <= matrix.length <= 10000; her satırın uzunluğu <= 10000; her değer 0 ile 1000 arasındadır.

## İpucu

Her satırı ayrı ayrı dolaşın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> rowSums(std::vector<std::vector<int>>& matrix) { return {}; }
};
```

```java
class Solution {
  public int[] rowSums(int[][] matrix) { return {}; }
}
```

```python
class Solution:
    def rowSums(self, matrix):
        return {}
```

---
slug: araliga-ekleme
title: Aralığa Ekle
difficulty: orta
topics: [Aralıklar]
points: 25
---

## Problem

Başlangıca göre sıralı ve çakışmayan aralıklar listesine yeni bir aralık ekleyin. Yeni aralıkla kesişenleri birleştirin ve sıralı sonucu döndürün.

## Örnekler

- `insertInterval([[1, 3], [6, 9]], [2, 5])` → `[[1,5],[6,9]]`
- `insertInterval([[1, 2], [3, 5], [6, 7]], [4, 6])` → `[[1,2],[3,7]]`

## Kısıtlamalar

- 0 <= intervals.length <= 10000; aralıklar başlangıca göre sıralı ve çakışmasız; start <= end.

## İpucu

Yeni aralıktan önce kalanları, birleşen aralığı ve sonrasındakileri sırayla ekleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> insertInterval(std::vector<std::vector<int>>& intervals, std::vector<int>& added) { return {}; }
};
```

```java
class Solution {
  public int[][] insertInterval(int[][] intervals, int[] added) { return {}; }
}
```

```python
class Solution:
    def insertInterval(self, intervals, added):
        return {}
```

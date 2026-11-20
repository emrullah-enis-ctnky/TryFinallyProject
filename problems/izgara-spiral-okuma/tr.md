---
slug: izgara-spiral-okuma
title: Izgarayı Spiral Oku
difficulty: orta
topics: [Diziler]
points: 25
---

## Problem

Bir envanter ızgarasındaki hücreleri dış sınırdan başlayıp saat yönünde içeri doğru okuyun. `spiralOrder` değerleri tek bir dizide döndürür.

## Örnekler

- `spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` → `[1,2,3,6,9,8,7,4,5]`
- `spiralOrder([[1, 2, 3, 4]])` → `[1,2,3,4]`

## Kısıtlamalar

- 0 <= rows, columns <= 100; tüm satırlar aynı uzunluktadır.

## İpucu

Dört sınırı izleyin; her sınırı okuduktan sonra içeri taşıyın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> spiralOrder(std::vector<std::vector<int>>& matrix) { return {}; }
};
```

```java
class Solution {
  public int[] spiralOrder(int[][] matrix) { return {}; }
}
```

```python
class Solution:
    def spiralOrder(self, matrix):
        return {}
```

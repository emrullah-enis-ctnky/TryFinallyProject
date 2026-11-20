---
slug: pascal-satiri
title: Pascal Satırı
difficulty: kolay
topics: [Dinamik Programlama 1D]
points: 15
---

## Problem

Pascal üçgeninin 0 tabanlı `rowIndex` satırını döndürün. Her iç değer, üst satırdaki iki komşu değerin toplamıdır.

## Örnekler

- `pascalRow(3)` → `[1,3,3,1]`
- `pascalRow(0)` → `[1]`

## Kısıtlamalar

- 0 <= rowIndex <= 30.

## İpucu

Tek bir dizi üzerinde sağdan sola güncelleyerek önceki değerleri koruyun.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> pascalRow(int rowIndex) { return {}; }
};
```

```java
class Solution {
  public int[] pascalRow(int rowIndex) { return {}; }
}
```

```python
class Solution:
    def pascalRow(self, rowIndex):
        return {}
```

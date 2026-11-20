---
slug: ortak-urun-kodlari
title: Ortak Ürün Kodları
difficulty: kolay
topics: [Hashleme, Diziler]
points: 20
---

## Problem

İki şubenin stok kodları `first` ve `second` dizilerinde bulunur. Her iki şubede de yer alan farklı kodları artan sırada döndüren `sharedProductCodes` metodunu yazın. Bir kod aynı şubede birden fazla kez geçse bile sonuçta yalnızca bir kez yer almalıdır.

## Örnekler

- `sharedProductCodes([7, 2, 7, 4], [4, 7, 9])` → `[4, 7]`
- `sharedProductCodes([1, 3], [2, 4])` → `[]`

## Kısıtlamalar

- `0 <= first.length, second.length <= 100000`
- `-1000000000 <= first[i], second[i] <= 1000000000`

## İpucu

Bir dizinin elemanlarını hızlıca aranabilecek bir kümeye ekleyin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> sharedProductCodes(std::vector<int>& first, std::vector<int>& second) { return {}; }
};
```

```java
class Solution {
  public int[] sharedProductCodes(int[] first, int[] second) { return new int[0]; }
}
```

```python
class Solution:
    def sharedProductCodes(self, first, second):
        return []
```

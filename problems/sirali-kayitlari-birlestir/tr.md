---
slug: sirali-kayitlari-birlestir
title: Sıralı Kayıtları Birleştir
difficulty: orta
topics: [Diziler, İki İşaretçi, Sıralama]
points: 30
---

## Problem

İki depodaki ürün kodları ayrı ayrı artan sırada tutulur. Tek bir artan dizi elde etmek için elemanları yeniden sıralamadan birleştiren `mergeSortedRecords` metodunu yazın. Eşit kodlar iki listede de bulunuyorsa ikisi de sonuçta yer almalıdır.

## Örnekler

- `mergeSortedRecords([1, 4, 8], [2, 4, 9])` → `[1, 2, 4, 4, 8, 9]`
- `mergeSortedRecords([], [-3, 0])` → `[-3, 0]`

## Kısıtlamalar

- Her iki dizi de artan sıradadır.
- `0 <= a.length, b.length <= 100000`
- `-1000000000 <= a[i], b[i] <= 1000000000`

## İpucu

Her dizideki sıradaki elemanlardan küçük olanı sonuca ekleyin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> mergeSortedRecords(std::vector<int>& a, std::vector<int>& b) { return {}; }
};
```

```java
class Solution {
  public int[] mergeSortedRecords(int[] a, int[] b) { return new int[0]; }
}
```

```python
class Solution:
    def mergeSortedRecords(self, a, b):
        return []
```

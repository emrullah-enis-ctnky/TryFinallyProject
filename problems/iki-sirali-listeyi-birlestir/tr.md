---
slug: iki-sirali-listeyi-birlestir
title: İki Sıralı Listeyi Birleştir
difficulty: orta
topics: [Bağlı Listeler, İki İşaretçi]
points: 30
---

## Problem

İki artan bağlı liste, ayrı `values` ve `next` dizileri ile başlangıç indisleri kullanılarak kodlanır. Düğümleri artan sırada birleştirip değerlerini döndüren `mergeEncodedLists` metodunu yazın. Boş liste başı `-1` ile gösterilir.

## Örnekler

- `mergeEncodedLists([1, 4], [1, -1], 0, [2, 3], [1, -1], 0)` → `[1, 2, 3, 4]`
- `mergeEncodedLists([], [], -1, [5], [-1], 0)` → `[5]`

## Kısıtlamalar

- Her listenin `values` ve `next` dizileri aynı uzunluktadır; toplam düğüm sayısı en fazla `100000`'dir.
- Her iki liste de döngüsüz ve artan sıradadır.
- Başlar `-1` veya ilgili dizide geçerli bir indistedir.

## İpucu

İki listedeki sıradaki düğümleri karşılaştırıp küçük olanın değerini sonuca ekleyin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> mergeEncodedLists(std::vector<int>& values1, std::vector<int>& next1, int head1, std::vector<int>& values2, std::vector<int>& next2, int head2) { return {}; }
};
```

```java
class Solution {
  public int[] mergeEncodedLists(int[] values1, int[] next1, int head1, int[] values2, int[] next2, int head2) { return new int[0]; }
}
```

```python
class Solution:
    def mergeEncodedLists(self, values1, next1, head1, values2, next2, head2):
        return []
```

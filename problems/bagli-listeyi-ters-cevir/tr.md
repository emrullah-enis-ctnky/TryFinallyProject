---
slug: bagli-listeyi-ters-cevir
title: Bağlı Listeyi Ters Çevir
difficulty: orta
topics: [Bağlı Listeler]
points: 30
---

## Problem

Tek yönlü bir liste `values` ve `next` dizileriyle kodlanır: düğüm `i` değerini `values[i]`'de tutar, sonraki düğümün indisi `next[i]`'dir; `-1` listenin sonudur. `head` indisinden başlayan listenin değerlerini ters sırada döndüren `reverseListValues` metodunu yazın.

## Örnekler

- `reverseListValues([4, 1, 7], [1, 2, -1], 0)` → `[7, 1, 4]`
- `reverseListValues([9], [-1], 0)` → `[9]`

## Kısıtlamalar

- `values.length == next.length`
- `0 <= values.length <= 100000`
- `head == -1` veya `0 <= head < values.length`
- Liste döngü içermez; ulaşılan her `next[i]` `-1` ya da geçerli bir indistir.

## İpucu

Baştan sona gezinirken görülen değerleri biriktirip sırayı tersine çevirin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> reverseListValues(std::vector<int>& values, std::vector<int>& next, int head) { return {}; }
};
```

```java
class Solution {
  public int[] reverseListValues(int[] values, int[] next, int head) { return new int[0]; }
}
```

```python
class Solution:
    def reverseListValues(self, values, next, head):
        return []
```

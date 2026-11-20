---
slug: bagli-listenin-ortasi
title: Bağlı Listenin Ortası
difficulty: kolay
topics: [Bağlı Listeler]
points: 20
---

## Problem

Bir tek yönlü liste `values` ve `next` dizileriyle kodlanır; `head` başlangıç indisi, `-1` ise listenin sonudur. Listenin orta düğümünün indisini `middleListIndex` ile döndürün. Düğüm sayısı çiftse iki orta düğümden ikincisini seçin.

## Örnekler

- `middleListIndex([4, 8, 2, 9], [1, 2, 3, -1], 0)` → `2`
- `middleListIndex([7, 5, 1], [1, 2, -1], 0)` → `1`

## Kısıtlamalar

- `values.length == next.length` ve `0 <= values.length <= 100000`
- `head == -1` veya `0 <= head < values.length`
- Liste döngüsüzdür ve ulaşılan tüm indisler geçerlidir.

## İpucu

Bir göstergeyi her adımda, diğerini iki adımda ilerletin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int middleListIndex(std::vector<int>& values, std::vector<int>& next, int head) { return -1; }
};
```

```java
class Solution {
  public int middleListIndex(int[] values, int[] next, int head) { return -1; }
}
```

```python
class Solution:
    def middleListIndex(self, values, next, head):
        return -1
```

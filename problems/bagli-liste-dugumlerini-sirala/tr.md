---
slug: bagli-liste-dugumlerini-sirala
title: Bağlı Listeyi Sırala
difficulty: zor
topics: [Bağlı Listeler, Sıralama]
points: 45
---

## Problem

Bir liste `values` ve `next` dizileri ile, `head` başlangıç indisi kullanılarak kodlanır. Listeyi değerlerine göre artan sırada gösterecek düğüm indislerini `sortedListOrder` ile döndürün. Eşit değerli düğümlerde listedeki ilk görünen önce gelmelidir; giriş dizilerini değiştirmeyin.

## Örnekler

- `sortedListOrder([4, 1, 3], [1, 2, -1], 0)` → `[1, 2, 0]`
- `sortedListOrder([2, 2], [1, -1], 0)` → `[0, 1]`

## Kısıtlamalar

- `values.length == next.length` ve `0 <= values.length <= 100000`
- `head == -1` veya geçerli bir düğüm indisidir.
- Liste döngüsüzdür; `-100000 <= values[i] <= 100000`.

## İpucu

Önce listedeki düğüm sırasını çıkarın, sonra bu indisleri değerlerine göre kararlı biçimde birleştirerek sıralayın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> sortedListOrder(std::vector<int>& values, std::vector<int>& next, int head) { return {}; }
};
```

```java
class Solution {
  public int[] sortedListOrder(int[] values, int[] next, int head) { return new int[0]; }
}
```

```python
class Solution:
    def sortedListOrder(self, values, next, head):
        return []
```

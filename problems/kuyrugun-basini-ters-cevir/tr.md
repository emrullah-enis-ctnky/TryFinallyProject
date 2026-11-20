---
slug: kuyrugun-basini-ters-cevir
title: Kuyruğun Başını Ters Çevir
difficulty: kolay
topics: [Kuyruk & Deque, Yığın]
points: 20
---

## Problem

Bir paket kuyruğu `items` dizisiyle, ilk eleman kuyruğun önü olacak şekilde verilir. Ön taraftaki ilk `k` paketin sırasını ters çevirip kalanların sırasını koruyan yeni kuyruğu `reverseQueuePrefix` ile döndürün.

## Örnekler

- `reverseQueuePrefix([1, 2, 3, 4, 5], 3)` → `[3, 2, 1, 4, 5]`
- `reverseQueuePrefix([7, 8], 0)` → `[7, 8]`

## Kısıtlamalar

- `0 <= items.length <= 100000`
- `0 <= k <= items.length`
- `-100000 <= items[i] <= 100000`

## İpucu

İlk `k` elemanı geçici olarak yığına koyup sonra geri alabilirsiniz.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> reverseQueuePrefix(std::vector<int>& items, int k) { return {}; }
};
```

```java
class Solution {
  public int[] reverseQueuePrefix(int[] items, int k) { return new int[0]; }
}
```

```python
class Solution:
    def reverseQueuePrefix(self, items, k):
        return []
```

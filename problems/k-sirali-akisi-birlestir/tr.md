---
slug: k-sirali-akisi-birlestir
title: K Sıralı Akışı Birleştir
difficulty: zor
topics: [Öncelik Kuyruğu, Sıralama]
points: 45
---

## Problem

Birden çok sunucudan gelen sıralı kayıt akışları `streams` dizisinde verilir. Her akış artan sıradadır. Tüm kayıtları artan sırada birleştiren `mergeSortedStreams` metodunu yazın.

## Örnekler

- `mergeSortedStreams([[1, 4, 7], [2, 5], [3, 6]])` → `[1, 2, 3, 4, 5, 6, 7]`
- `mergeSortedStreams([[], [-2, 0]])` → `[-2, 0]`

## Kısıtlamalar

- `0 <= streams.length <= 1000`
- Her akış artan sıradadır.
- Tüm akışlardaki toplam kayıt sayısı `100000` değerini aşmaz.
- `-1000000000 <= streams[i][j] <= 1000000000`

## İpucu

Her akışın sıradaki değerini tutup, bu değerlerin en küçüğünü tekrar tekrar seçin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> mergeSortedStreams(std::vector<std::vector<int>>& streams) { return {}; }
};
```

```java
class Solution {
  public int[] mergeSortedStreams(int[][] streams) { return new int[0]; }
}
```

```python
class Solution:
    def mergeSortedStreams(self, streams):
        return []
```

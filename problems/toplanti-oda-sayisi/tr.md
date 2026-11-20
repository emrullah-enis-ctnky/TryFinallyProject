---
slug: toplanti-oda-sayisi
title: Toplantı Oda Sayısı
difficulty: orta
topics: [Aralıklar, Sıralama, Açgözlü]
points: 30
---

## Problem

Toplantıların `[start, end]` biçimindeki saat aralıkları verilir. Başka bir toplantı, önceki toplantının bitiş saatinde başlayabilir. Tüm toplantılara ev sahipliği yapmak için aynı anda gereken en az oda sayısını `minimumMeetingRooms` ile bulun.

## Örnekler

- `minimumMeetingRooms([[0, 30], [5, 10], [15, 20]])` → `2`
- `minimumMeetingRooms([[1, 2], [2, 3]])` → `1`

## Kısıtlamalar

- `0 <= meetings.length <= 100000`
- `0 <= meetings[i][0] < meetings[i][1] <= 1000000000`

## İpucu

Başlangıç ve bitiş saatlerini ayrı ayrı sıralayıp hangi olayın önce geldiğini izleyin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int minimumMeetingRooms(std::vector<std::vector<int>>& meetings) { return 0; }
};
```

```java
class Solution {
  public int minimumMeetingRooms(int[][] meetings) { return 0; }
}
```

```python
class Solution:
    def minimumMeetingRooms(self, meetings):
        return 0
```

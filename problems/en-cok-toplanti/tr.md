---
slug: en-cok-toplanti
title: En Çok Toplantı
difficulty: orta
topics: [Açgözlü, Aralıklar]
points: 25
---

## Problem

Her satırı `[başlangıç, bitiş]` olan toplantı aralıkları verilir. Bir toplantının bitiş zamanı, diğerinin başlangıç zamanına eşitse bu iki toplantıya katılabilirsiniz. Çakışmayan en fazla kaç toplantıya katılabileceğinizi döndüren `maxMeetings` metodunu yazın.

## Örnekler

- `maxMeetings([[1, 3], [2, 4], [3, 5]])` → `2`
- `maxMeetings([[0, 1], [1, 2], [2, 3]])` → `3`

İlk örnekte `[1, 3]` ve `[3, 5]` toplantıları birlikte seçilebilir.

## Kısıtlamalar

- `0 <= meetings.length <= 100000`
- Her toplantı için `-100000 <= start < end <= 100000`

## İpucu

Katılabildiğiniz toplantı sayısını artırmak için her adımda en erken biteni seçin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int maxMeetings(std::vector<std::vector<int>>& meetings) { return 0; }
};
```

```java
class Solution {
  public int maxMeetings(int[][] meetings) { return 0; }
}
```

```python
class Solution:
    def maxMeetings(self, meetings):
        return 0
```

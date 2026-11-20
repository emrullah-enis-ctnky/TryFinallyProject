---
slug: toplanti-oda-sayisi
title: Anzahl Benötigter Sitzungsräume
difficulty: orta
topics: [Intervalle, Sortieren, Greedy-Algorithmus]
points: 30
---

## Problem

Die Zeitbereiche der Besprechungen sind als `[start, end]` gegeben. Eine Besprechung darf genau dann beginnen, wenn eine andere endet. Ermittle mit `minimumMeetingRooms` die kleinste Anzahl benötigter Räume.

## Beispiele

- `minimumMeetingRooms([[0, 30], [5, 10], [15, 20]])` → `2`
- `minimumMeetingRooms([[1, 2], [2, 3]])` → `1`

## Einschränkungen

- `0 <= meetings.length <= 100000`
- `0 <= meetings[i][0] < meetings[i][1] <= 1000000000`

## Hinweis

Sortiere Start- und Endzeiten getrennt und verfolge, welches Ereignis als Nächstes eintritt.

## Startcode

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

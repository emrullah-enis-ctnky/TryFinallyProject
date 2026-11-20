---
slug: en-cok-toplanti
title: Möglichst viele Treffen besuchen
difficulty: orta
topics: [Greedy-Algorithmus, Intervalle]
points: 25
---

## Problem

Gegeben sind Meetingintervalle, deren Zeilen jeweils `[start, end]` sind. Ein Meeting darf direkt beginnen, wenn ein anderes zur gleichen Zeit endet. Schreibe `maxMeetings`, sodass die größtmögliche Anzahl nicht überlappender Meetings zurückgegeben wird.

## Beispiele

- `maxMeetings([[1, 3], [2, 4], [3, 5]])` → `2`
- `maxMeetings([[0, 1], [1, 2], [2, 3]])` → `3`

Im ersten Beispiel können die Meetings `[1, 3]` und `[3, 5]` gemeinsam ausgewählt werden.

## Einschränkungen

- `0 <= meetings.length <= 100000`
- Für jedes Meeting gilt `-100000 <= start < end <= 100000`.

## Hinweis

Wähle jeweils das Meeting, das am frühesten endet, um möglichst viele unterzubringen.

## Startcode

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

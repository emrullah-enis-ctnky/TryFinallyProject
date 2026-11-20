---
slug: istasyon-turu
title: Rundfahrt Der Stationen
difficulty: orta
topics: [Greedy-Algorithmus]
points: 30
---

## Problem

Eine Rundstrecke gibt den Kraftstoff an jeder Station und die Kosten zur nächsten an. Gib den kleinsten Startindex zurück, der die Rundfahrt ermöglicht, oder -1, falls es keinen gibt.

## Beispiele

- `startStation([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])` → `3`
- `startStation([2, 3, 4], [3, 4, 3])` → `-1`

## Einschränkungen

- 1 <= fuel.length == cost.length <= 100000; 0 <= fuel[i], cost[i] <= 100000.

## Hinweis

Wenn der Gesamtkraftstoff die Gesamtkosten deckt, kann keine Station zwischen einem gescheiterten Start und dessen Scheitern ein gültiger Start sein.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int startStation(std::vector<int>& fuel, std::vector<int>& cost) { return 0; }
};
```

```java
class Solution {
  public int startStation(int[] fuel, int[] cost) { return 0; }
}
```

```python
class Solution:
    def startStation(self, fuel, cost):
        return 0
```

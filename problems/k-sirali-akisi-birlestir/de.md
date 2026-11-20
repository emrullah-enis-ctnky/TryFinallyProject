---
slug: k-sirali-akisi-birlestir
title: K Sortierte Datenströme
difficulty: zor
topics: [Prioritätswarteschlange, Sortieren]
points: 45
---

## Problem

Sortierte Datenströme mehrerer Server stehen in `streams`. Jeder Strom ist aufsteigend sortiert. Schreibe `mergeSortedStreams`, das alle Einträge aufsteigend zusammenführt.

## Beispiele

- `mergeSortedStreams([[1, 4, 7], [2, 5], [3, 6]])` → `[1, 2, 3, 4, 5, 6, 7]`
- `mergeSortedStreams([[], [-2, 0]])` → `[-2, 0]`

## Einschränkungen

- `0 <= streams.length <= 1000`
- Jeder Strom ist aufsteigend sortiert.
- Insgesamt gibt es höchstens `100000` Einträge in allen Strömen.
- `-1000000000 <= streams[i][j] <= 1000000000`

## Hinweis

Halte den nächsten Wert jedes Stroms bereit und wähle wiederholt den kleinsten.

## Startcode

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

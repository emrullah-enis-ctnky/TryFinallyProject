---
slug: kuyrugun-basini-ters-cevir
title: Warteschlangenanfang Umkehren
difficulty: kolay
topics: [Warteschlange & Deque, Stapel]
points: 20
---

## Problem

Eine Paketwarteschlange ist als `items` gegeben; der erste Wert steht vorne. Gib mit `reverseQueuePrefix` eine neue Warteschlange zurück, in der die ersten `k` Pakete umgekehrt und die übrigen in ihrer Reihenfolge erhalten sind.

## Beispiele

- `reverseQueuePrefix([1, 2, 3, 4, 5], 3)` → `[3, 2, 1, 4, 5]`
- `reverseQueuePrefix([7, 8], 0)` → `[7, 8]`

## Einschränkungen

- `0 <= items.length <= 100000`
- `0 <= k <= items.length`
- `-100000 <= items[i] <= 100000`

## Hinweis

Lege die ersten `k` Werte vorübergehend auf einen Stapel und nimm sie anschließend zurück.

## Startcode

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

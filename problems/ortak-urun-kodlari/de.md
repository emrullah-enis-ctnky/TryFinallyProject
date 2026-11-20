---
slug: ortak-urun-kodlari
title: Gemeinsame Produktcodes
difficulty: kolay
topics: [Hashing, Arrays]
points: 20
---

## Problem

Zwei Filialen speichern ihre Lagercodes in den Arrays `first` und `second`. Schreibe `sharedProductCodes`, das die verschiedenen Codes, die in beiden Filialen vorkommen, aufsteigend sortiert zurückgibt. Ein Code, der in einer Filiale mehrfach vorkommt, darf im Ergebnis nur einmal stehen.

## Beispiele

- `sharedProductCodes([7, 2, 7, 4], [4, 7, 9])` → `[4, 7]`
- `sharedProductCodes([1, 3], [2, 4])` → `[]`

## Einschränkungen

- `0 <= first.length, second.length <= 100000`
- `-1000000000 <= first[i], second[i] <= 1000000000`

## Hinweis

Speichere die Werte eines Arrays in einer Menge, um sie schnell nachschlagen zu können.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> sharedProductCodes(std::vector<int>& first, std::vector<int>& second) { return {}; }
};
```

```java
class Solution {
  public int[] sharedProductCodes(int[] first, int[] second) { return new int[0]; }
}
```

```python
class Solution:
    def sharedProductCodes(self, first, second):
        return []
```

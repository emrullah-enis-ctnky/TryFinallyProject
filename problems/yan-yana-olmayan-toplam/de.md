---
slug: yan-yana-olmayan-toplam
title: Größte Summe ohne Nachbarn
difficulty: orta
topics: [Dynamische Programmierung 1D, Arrays]
points: 25
---

## Problem

Gegeben ist ein nichtnegatives Array, dessen Werte den Geldbetrag je Haus angeben. Benachbarte Häuser dürfen nicht gemeinsam ausgewählt werden. Schreibe `maxNonAdjacentSum`, sodass der größtmögliche Betrag zurückgegeben wird. Es ist erlaubt, kein Haus auszuwählen.

## Beispiele

- `maxNonAdjacentSum([2, 7, 9, 3, 1])` → `12`
- `maxNonAdjacentSum([2, 1, 1, 2])` → `4`

Im ersten Beispiel können das zweite und dritte Haus nicht gemeinsam gewählt werden; die beste Wahl ist `2 + 9 + 1 = 12`.

## Einschränkungen

- `0 <= values.length <= 100000`
- `0 <= values[i] <= 10000`

## Hinweis

Vergleiche an jeder Position die Summe mit diesem Haus mit der besten Summe davor.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int maxNonAdjacentSum(std::vector<int>& values) { return 0; }
};
```

```java
class Solution {
  public int maxNonAdjacentSum(int[] values) { return 0; }
}
```

```python
class Solution:
    def maxNonAdjacentSum(self, values):
        return 0
```

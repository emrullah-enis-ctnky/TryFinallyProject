---
slug: eksik-bilet-numarasi
title: Fehlende Ticketnummer
difficulty: kolay
topics: [Arrays, Bitmanipulation]
points: 15
---

## Problem

Bei einer Veranstaltung sind die Tickets von `0` bis `n` nummeriert. Das Array `nums` enthält jede dieser Nummern höchstens einmal; genau eine Nummer fehlt. Finde sie mit `findMissingTicket`.

## Beispiele

- `findMissingTicket([3, 0, 1])` → `2`
- `findMissingTicket([0, 1])` → `2`

## Einschränkungen

- `0 <= nums.length <= 100000`
- Die Werte sind verschieden und liegen zwischen `0` und `nums.length`.

## Hinweis

XOR mit derselben Zahl hebt die Zahl auf.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int findMissingTicket(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int findMissingTicket(int[] nums) { return 0; }
}
```

```python
class Solution:
    def findMissingTicket(self, nums):
        return 0
```

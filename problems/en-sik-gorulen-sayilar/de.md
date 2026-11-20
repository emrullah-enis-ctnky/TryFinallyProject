---
slug: en-sik-gorulen-sayilar
title: Häufigste Messwerte
difficulty: orta
topics: [Hashing, Prioritätswarteschlange, Sortieren]
points: 30
---

## Problem

Ein Messprotokoll steht im Array `values`. Gib die `k` verschiedenen Werte mit den höchsten Häufigkeiten in absteigender Häufigkeit zurück. Bei gleicher Häufigkeit steht die kleinere Zahl zuerst.

## Beispiele

- `topFrequentValues([1, 1, 1, 2, 2, 3], 2)` → `[1, 2]`
- `topFrequentValues([4, 4, 5, 5], 2)` → `[4, 5]`

## Einschränkungen

- `1 <= values.length <= 100000`
- `1 <= k <=` Anzahl verschiedener Werte im Array
- `-100000 <= values[i] <= 100000`

## Hinweis

Zähle zuerst, wie oft jeder Wert vorkommt, und ordne dann nach Häufigkeit.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> topFrequentValues(std::vector<int>& values, int k) { return {}; }
};
```

```java
class Solution {
  public int[] topFrequentValues(int[] values, int k) { return new int[0]; }
}
```

```python
class Solution:
    def topFrequentValues(self, values, k):
        return []
```

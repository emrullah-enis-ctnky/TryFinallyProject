---
slug: bit-fark-sayisi
title: Bitunterschied Zählen
difficulty: kolay
topics: [Bitmanipulation]
points: 15
---

## Problem

Zähle die Bitpositionen, die sich in den Binärdarstellungen zweier Gerätekennungen unterscheiden. Eingaben sind nichtnegative 32-Bit-Ganzzahlen.

## Beispiele

- `bitDifferenceCount(1, 4)` → `2`
- `bitDifferenceCount(7, 7)` → `0`

## Einschränkungen

- 0 <= a, b <= 2147483647.

## Hinweis

Das XOR der Zahlen hat an jeder unterschiedlichen Position eine 1; zähle diese Bits.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int bitDifferenceCount(int a, int b) { return 0; }
};
```

```java
class Solution {
  public int bitDifferenceCount(int a, int b) { return 0; }
}
```

```python
class Solution:
    def bitDifferenceCount(self, a, b):
        return 0
```

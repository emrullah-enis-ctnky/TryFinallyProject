---
slug: alternatif-ikili-metin
title: Alternierender Binärtext
difficulty: kolay
topics: [Greedy-Algorithmus]
points: 15
---

## Problem

Finde die minimale Anzahl an Bitänderungen, damit sich Nullen und Einsen abwechseln.

## Beispiele

- `minimumAlternatingFlips("0100")` → `1`
- `minimumAlternatingFlips("1111")` → `2`

## Einschränkungen

- 1 <= bits.length <= 100000; bits enthält nur 0 und 1.

## Hinweis

Vergleiche den Text mit beiden Mustern, 0101… und 1010….

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int minimumAlternatingFlips(std::string bits) { return 0; }
};
```

```java
class Solution {
  public int minimumAlternatingFlips(String bits) { return 0; }
}
```

```python
class Solution:
    def minimumAlternatingFlips(self, bits):
        return 0
```

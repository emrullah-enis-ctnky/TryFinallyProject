---
slug: sayilari-coz
title: Zahlencodes Entschlüsseln
difficulty: orta
topics: [Dynamische Programmierung 1D]
points: 30
---

## Problem

Die Codes 1–26 entsprechen den Buchstaben A–Z. Führende Nullen sind ungültig. `decodeWays` gibt die Anzahl gültiger Decodierungen der Ziffernfolge zurück.

## Beispiele

- `decodeWays("12")` → `2`
- `decodeWays("06")` → `0`

## Einschränkungen

- 1 <= code.length <= 45; code enthält nur Ziffern.

## Hinweis

Kombiniere an jeder Stelle die Möglichkeiten eines gültigen einstelligen und eines gültigen zweistelligen Codes.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int decodeWays(std::string code) { return 0; }
};
```

```java
class Solution {
  public int decodeWays(String code) { return 0; }
}
```

```python
class Solution:
    def decodeWays(self, code):
        return 0
```

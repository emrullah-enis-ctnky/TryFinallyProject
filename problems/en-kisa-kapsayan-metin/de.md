---
slug: en-kisa-kapsayan-metin
title: Kürzestes Enthaltendes Fenster
difficulty: zor
topics: [Gleitendes Fenster]
points: 40
---

## Problem

Finde die kürzeste Teilzeichenfolge von `text`, die alle Zeichen aus `required` in der nötigen Häufigkeit enthält. Bei Gleichstand gib die früheste zurück. Gibt es keine, gib eine leere Zeichenfolge zurück.

## Beispiele

- `minimumCover("ADOBECODEBANC", "ABC")` → `"BANC"`
- `minimumCover("a", "aa")` → `""`

## Einschränkungen

- 0 <= text.length <= 100000; 0 <= required.length <= 1000; ASCII-Zeichen werden verwendet.

## Hinweis

Erweitere den rechten Rand, um benötigte Zeichen zu sammeln, und verkleinere den linken, solange das Fenster gültig bleibt.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string minimumCover(std::string text, std::string required) { return ""; }
};
```

```java
class Solution {
  public String minimumCover(String text, String required) { return ""; }
}
```

```python
class Solution:
    def minimumCover(self, text, required):
        return ""
```

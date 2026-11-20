---
slug: harf-sayilari-ayni-mi
title: Buchstabenhäufigkeiten vergleichen
difficulty: kolay
topics: [Hashing, Zeichenfolgen]
points: 15
---

## Problem

Gegeben sind zwei Zeichenfolgen aus englischen Kleinbuchstaben. Schreibe `areAnagrams`, sodass `true` zurückgegeben wird, wenn jeder Buchstabe in beiden Zeichenfolgen gleich oft vorkommt, andernfalls `false`. Die Reihenfolge der Buchstaben ist unwichtig.

## Beispiele

- `areAnagrams("listen", "silent")` → `true`
- `areAnagrams("stone", "notesx")` → `false`

## Einschränkungen

- `0 <= first.length, second.length <= 100000`
- Beide Zeichenfolgen enthalten nur die Buchstaben `a`–`z`.

## Hinweis

Zähle die Buchstaben der ersten Zeichenfolge und vergleiche diese Häufigkeiten mit der zweiten.

## Startcode

```cpp
#include <string>
class Solution {
public:
  bool areAnagrams(std::string first, std::string second) { return false; }
};
```

```java
class Solution {
  public boolean areAnagrams(String first, String second) { return false; }
}
```

```python
class Solution:
    def areAnagrams(self, first, second):
        return False
```

---
slug: en-uzun-palindrom
title: Längstes Palindrom
difficulty: orta
topics: [Zeichenfolgen, Zwei Zeiger]
points: 30
---

## Problem

Finde den längsten zusammenhängenden Abschnitt im Archivtext `text`, der vorwärts und rückwärts gleich lautet. Haben mehrere Abschnitte die maximale Länge, gib mit `longestPalindrome` den Abschnitt mit dem kleinsten Startindex zurück.

## Beispiele

- `longestPalindrome("babad")` → `"bab"`
- `longestPalindrome("cbbd")` → `"bb"`

## Einschränkungen

- `0 <= text.length <= 2000`
- `text` enthält nur englische Buchstaben und Ziffern.

## Hinweis

Probiere jede Position als Mitte eines Palindroms mit ungerader und gerader Länge.

## Startcode

```cpp
#include <string>
class Solution {
public:
  std::string longestPalindrome(std::string text) { return ""; }
};
```

```java
class Solution {
  public String longestPalindrome(String text) { return ""; }
}
```

```python
class Solution:
    def longestPalindrome(self, text):
        return ""
```

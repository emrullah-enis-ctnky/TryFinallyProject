---
slug: en-uzun-tekrarsiz-parca
title: Längste Zeichenfolge Ohne Wiederholung
difficulty: orta
topics: [Gleitendes Fenster, Zeichenfolgen]
points: 25
---

## Problem

Gegeben ist eine Zeichenfolge aus englischen Kleinbuchstaben. Schreibe `longestUniqueLength`, sodass die Länge des längsten zusammenhängenden Teilstücks ohne wiederholte Buchstaben zurückgegeben wird.

## Beispiele

- `longestUniqueLength("abcabcbb")` → `3`
- `longestUniqueLength("pwwkew")` → `3`

Im ersten Beispiel sind `abc`, `bca` und `cab` längste Teilstücke ohne Wiederholungen; jedes hat die Länge `3`.

## Einschränkungen

- `0 <= text.length <= 200000`
- Die Zeichenfolge enthält nur die Buchstaben `a`–`z`.

## Hinweis

Verschiebe beim Vorrücken des rechten Endes das linke Ende über wiederholte Buchstaben im Fenster hinaus.

## Startcode

```cpp
#include <string>
class Solution {
public:
  int longestUniqueLength(std::string text) { return 0; }
};
```

```java
class Solution {
  public int longestUniqueLength(String text) { return 0; }
}
```

```python
class Solution:
    def longestUniqueLength(self, text):
        return 0
```

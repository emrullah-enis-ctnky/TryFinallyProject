---
slug: k-cesitli-en-uzun-parca
title: Längster K-Buchstabenabschnitt
difficulty: orta
topics: [Zeichenfolgen, Gleitendes Fenster, Hashing]
points: 30
---

## Problem

Schreibe `longestLimitedAlphabetRun`, das die Länge des längsten zusammenhängenden Abschnitts in `text` mit höchstens `k` verschiedenen Buchstaben zurückgibt. Der Text enthält Kleinbuchstaben des englischen Alphabets. Für `k = 0` ist das Ergebnis null.

## Beispiele

- `longestLimitedAlphabetRun("aabac", 2)` → `4`
- `longestLimitedAlphabetRun("abc", 1)` → `1`

## Einschränkungen

- `0 <= text.length <= 100000`
- `text` enthält nur englische Kleinbuchstaben von `a` bis `z`.
- `0 <= k <= 26`

## Hinweis

Überschreitet das Erweitern rechts die Grenze verschiedener Buchstaben, verkleinere das Fenster links.

## Startcode

```cpp
#include <string>
class Solution {
public:
  int longestLimitedAlphabetRun(std::string text, int k) { return 0; }
};
```

```java
class Solution {
  public int longestLimitedAlphabetRun(String text, int k) { return 0; }
}
```

```python
class Solution:
    def longestLimitedAlphabetRun(self, text, k):
        return 0
```

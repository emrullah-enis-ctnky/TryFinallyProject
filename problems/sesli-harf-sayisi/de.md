---
slug: sesli-harf-sayisi
title: Vokale zählen
difficulty: kolay
topics: [Strings]
points: 10
---

## Problem

Gegeben ist ein Text aus englischen Buchstaben. Schreibe eine Methode `countVowels`, die die Anzahl der Vokale (`a`, `e`, `i`, `o`, `u`) im Text zurückgibt. Groß- und Kleinbuchstaben zählen gleich.

## Beispiele

- `countVowels("hello world")` → `3`
- `countVowels("Programming")` → `3`

## Einschränkungen

- Der Text enthält nur englische Buchstaben, Leerzeichen und Satzzeichen.
- Der Text darf leer sein.
- `y` zählt nicht als Vokal.

## Hinweis

Wandle jedes Zeichen in einen Kleinbuchstaben um und prüfe, ob es in `"aeiou"` vorkommt.

## Startcode

```cpp
#include <string>

class Solution {
public:
  int countVowels(std::string text) {
    // Schreibe deine Lösung hier
    return 0;
  }
};
```

```java
class Solution {
  public int countVowels(String text) {
    // Schreibe deine Lösung hier
    return 0;
  }
}
```

```python
class Solution:
    def countVowels(self, text):
        # Schreibe deine Lösung hier
        return 0
```

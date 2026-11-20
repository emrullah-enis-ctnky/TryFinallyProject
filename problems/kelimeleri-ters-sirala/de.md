---
slug: kelimeleri-ters-sirala
title: Wortreihenfolge umkehren
difficulty: kolay
topics: [Zeichenfolgen, Zwei Zeiger]
points: 15
---

## Problem

Gegeben ist ein Satz aus englischen Kleinbuchstaben, dessen Wörter durch ein oder mehrere Leerzeichen getrennt sind. Schreibe `reverseWords`, sodass die Wörter in umgekehrter Reihenfolge mit jeweils einem Leerzeichen zurückgegeben werden. Am Anfang oder Ende dürfen Leerzeichen stehen.

## Beispiele

- `reverseWords("learn to code")` → `"code to learn"`
- `reverseWords("  solve   problems ")` → `"problems solve"`

## Einschränkungen

- `0 <= sentence.length <= 10000`
- Der Satz enthält nur englische Kleinbuchstaben und Leerzeichen.

## Hinweis

Du kannst zuerst die Wörter trennen und sie danach in umgekehrter Reihenfolge verbinden.

## Startcode

```cpp
#include <string>
class Solution {
public:
  std::string reverseWords(std::string sentence) { return ""; }
};
```

```java
class Solution {
  public String reverseWords(String sentence) { return ""; }
}
```

```python
class Solution:
    def reverseWords(self, sentence):
        return ""
```

---
slug: gecerli-parantezler
title: Gültige Klammern
difficulty: orta
topics: [Stack, Strings]
points: 25
---

## Problem

Gegeben ist ein Text, der nur die Zeichen `(`, `)`, `[`, `]`, `{` und `}` enthält. Schreibe eine Methode `isValid`, die `true` zurückgibt, wenn die Klammern korrekt geöffnet und geschlossen werden, sonst `false`.

Damit der Text gültig ist, muss jede öffnende Klammer von einer Klammer desselben Typs geschlossen werden, und die zuletzt geöffnete Klammer muss zuerst geschlossen werden.

## Beispiele

- `isValid("()[]{}")` → `true`
- `isValid("(]")` → `false`
- `isValid("{[]}")` → `true`

## Einschränkungen

- `0 ≤ Länge ≤ 200000`
- Ein leerer Text ist gültig.

## Hinweis

Lege öffnende Klammern auf einen Stapel (Stack). Prüfe bei einer schließenden Klammer, ob sie zum obersten Element passt.

## Startcode

```cpp
#include <string>

class Solution {
public:
  bool isValid(std::string s) {
    // Schreibe deine Lösung hier
    return false;
  }
};
```

```java
class Solution {
  public boolean isValid(String s) {
    // Schreibe deine Lösung hier
    return false;
  }
}
```

```python
class Solution:
    def isValid(self, s):
        # Schreibe deine Lösung hier
        return False
```

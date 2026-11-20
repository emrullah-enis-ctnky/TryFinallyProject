---
slug: parantez-dengesi
title: Ausgeglichene Klammern
difficulty: kolay
topics: [Stapel, Zeichenfolgen]
points: 15
---

## Problem

Gegeben ist eine Zeichenfolge, die nur `()`, `[]` und `{}` enthält. Schreibe `isBalanced`, sodass `true` zurückgegeben wird, wenn jede öffnende Klammer in der richtigen Reihenfolge durch den passenden Typ geschlossen wird, andernfalls `false`. Die leere Zeichenfolge ist ausgeglichen.

## Beispiele

- `isBalanced("{[()]}")` → `true`
- `isBalanced("([)]")` → `false`

Im zweiten Beispiel werden die Klammern nicht in passender Reihenfolge geschlossen.

## Einschränkungen

- `0 <= text.length <= 100000`
- Die Zeichenfolge enthält nur `()[]{}`.

## Hinweis

Lege öffnende Klammern auf einen Stapel und prüfe bei jeder schließenden Klammer das zuletzt geöffnete Zeichen.

## Startcode

```cpp
#include <string>
class Solution {
public:
  bool isBalanced(std::string text) { return false; }
};
```

```java
class Solution {
  public boolean isBalanced(String text) { return false; }
}
```

```python
class Solution:
    def isBalanced(self, text):
        return False
```

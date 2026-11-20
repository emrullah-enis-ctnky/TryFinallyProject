---
slug: son-ekleme-ifadesi
title: Postfix-Ausdruck Auswerten
difficulty: orta
topics: [Stapel, Zeichenfolgen]
points: 30
---

## Problem

Ein Taschenrechnerausdruck enthält Zahlen und die Operatoren `+`, `-` und `*` in Postfix-Notation. Bei `2 3 +` steht der Operator zum Beispiel nach seinen beiden Zahlen. Schreibe `evaluatePostfix`, das einen gültigen Ausdruck berechnet.

## Beispiele

- `evaluatePostfix(["2", "3", "+", "4", "*"])` → `20`
- `evaluatePostfix(["8", "5", "-"])` → `3`

## Einschränkungen

- `1 <= tokens.length <= 1000`
- Zahlen sind vorzeichenbehaftete 32-Bit-Ganzzahlen.
- Der Ausdruck ist gültig und alle Zwischenergebnisse passen in den vorzeichenbehafteten 32-Bit-Bereich.
- Erlaubte Operatoren sind `+`, `-` und `*`.

## Hinweis

Bei einem Operator nimm die letzten beiden Zahlen und lege das Ergebnis wieder ab.

## Startcode

```cpp
#include <string>
#include <vector>
class Solution {
public:
  int evaluatePostfix(std::vector<std::string>& tokens) { return 0; }
};
```

```java
class Solution {
  public int evaluatePostfix(String[] tokens) { return 0; }
}
```

```python
class Solution:
    def evaluatePostfix(self, tokens):
        return 0
```

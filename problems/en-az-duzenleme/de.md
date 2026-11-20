---
slug: en-az-duzenleme
title: Wenigste Wortänderungen
difficulty: zor
topics: [Dynamische Programmierung 2D, Zeichenfolgen]
points: 45
---

## Problem

Eine Rechtschreibprüfung möchte `source` in `target` umwandeln. In einem Schritt darf sie einen Buchstaben einfügen, löschen oder ersetzen. Finde mit `minimumEdits` die geringste Zahl erforderlicher Schritte.

## Beispiele

- `minimumEdits("plane", "plans")` → `1`
- `minimumEdits("book", "back")` → `2`

## Einschränkungen

- `0 <= source.length, target.length <= 500`
- Beide Zeichenfolgen enthalten nur englische Kleinbuchstaben.

## Hinweis

Das beste Ergebnis für zwei Präfixe ergibt sich aus früheren Feldern und daraus, ob ihre letzten Buchstaben übereinstimmen.

## Startcode

```cpp
#include <string>
class Solution {
public:
  int minimumEdits(std::string source, std::string target) { return 0; }
};
```

```java
class Solution {
  public int minimumEdits(String source, String target) { return 0; }
}
```

```python
class Solution:
    def minimumEdits(self, source, target):
        return 0
```

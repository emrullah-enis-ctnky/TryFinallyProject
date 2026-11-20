---
slug: kelime-sayisi
title: Wörter Zählen
difficulty: kolay
topics: [Zeichenfolgen]
points: 10
---

## Problem

Zähle die Wörter in einer Notiz. `countWords` gibt die Anzahl der durch Leerzeichen getrennten Wörter zurück; am Anfang und Ende steht kein Leerzeichen. Eine leere Zeichenfolge enthält null Wörter.

## Beispiele

- `countWords("check the north gate")` → `4`
- `countWords("")` → `0`

## Einschränkungen

- `0 <= text.length <= 100000`
- Der Text enthält nur englische Kleinbuchstaben und einzelne Leerzeichen.

## Hinweis

Behandle einen leeren Text gesondert; zähle sonst die trennenden Leerzeichen.

## Startcode

```cpp
#include <vector>
#include <string>
class Solution {
public:
  int countWords(std::string text) { return 0; }
};
```

```java
class Solution {
  public int countWords(String text) { return 0; }
}
```

```python
class Solution:
    def countWords(self, text):
        return 0
```

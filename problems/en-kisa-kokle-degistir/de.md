---
slug: en-kisa-kokle-degistir
title: Wörter Durch Wurzeln Ersetzen
difficulty: orta
topics: [Präfixbaum, Zeichenfolgen]
points: 30
---

## Problem

Ein Wörterbuch mit Wurzeln steht in `roots`; ein Satz enthält durch Leerzeichen getrennte Wörter. Ersetze jedes Wort durch die kürzeste Wurzel, deren Präfix es ist. Gibt es keine passende Wurzel, bleibt das Wort unverändert. Gib das Ergebnis mit `replaceWithShortestRoots` zurück.

## Beispiele

- `replaceWithShortestRoots(["cat", "bat", "rat"], "the cattle was rattled by the battery")` → `"the cat was rat by the bat"`
- `replaceWithShortestRoots(["a"], "a aa")` → `"a a"`

## Einschränkungen

- `0 <= roots.length <= 1000`
- Jede Wurzel und jedes Wort enthält nur englische Kleinbuchstaben.
- Wörter sind durch einzelne Leerzeichen getrennt; der Satz darf leer sein und ist höchstens `100000` Zeichen lang.

## Hinweis

Folge den Buchstaben eines Worts von links nach rechts und halte am ersten vollständigen Wurzelknoten an.

## Startcode

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::string replaceWithShortestRoots(std::vector<std::string>& roots, std::string sentence) { return ""; }
};
```

```java
class Solution {
  public String replaceWithShortestRoots(String[] roots, String sentence) { return ""; }
}
```

```python
class Solution:
    def replaceWithShortestRoots(self, roots, sentence):
        return ""
```

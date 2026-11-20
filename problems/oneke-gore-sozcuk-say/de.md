---
slug: oneke-gore-sozcuk-say
title: Wörter nach Präfix zählen
difficulty: orta
topics: [Präfixbaum]
points: 30
---

## Problem

Gegeben sind eine Wortliste und eine Präfixliste aus englischen Kleinbuchstaben. Schreibe `prefixWordCounts`, sodass für jedes Präfix in der ursprünglichen Reihenfolge zurückgegeben wird, wie viele Listeneinträge damit beginnen. Doppelte Wörter zählen einzeln; das leere Präfix passt zu jedem Wort.

## Beispiele

- `prefixWordCounts(["app", "apple", "ape", "bat"], ["ap", "app", "bat", "cat", ""])` → `[3, 2, 1, 0, 4]`
- `prefixWordCounts(["go", "go", "gone"], ["g", "gone"])` → `[3, 1]`

## Einschränkungen

- `0 <= words.length, prefixes.length <= 10000`
- Die Gesamtlänge aller Zeichenfolgen in beiden Listen beträgt höchstens `20000`.
- Zeichenfolgen enthalten nur die Buchstaben `a`–`z`.

## Hinweis

Füge jedes Wort in einen Präfixbaum ein und erhöhe an jedem durchlaufenen Knoten den Wortzähler.

## Startcode

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> prefixWordCounts(std::vector<std::string>& words, std::vector<std::string>& prefixes) { return {}; }
};
```

```java
class Solution {
  public int[] prefixWordCounts(String[] words, String[] prefixes) { return new int[]{}; }
}
```

```python
class Solution:
    def prefixWordCounts(self, words, prefixes):
        return []
```

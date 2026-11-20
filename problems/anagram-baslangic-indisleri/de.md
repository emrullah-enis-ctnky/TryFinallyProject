---
slug: anagram-baslangic-indisleri
title: Anagramm Startpositionen Finden
difficulty: orta
topics: [Zeichenfolgen, Gleitendes Fenster, Hashing]
points: 30
---

## Problem

Gib in `text`, das englische Kleinbuchstaben enthält, die Startindizes aller zusammenhängenden Abschnitte aufsteigend zurück, deren Buchstabenhäufigkeiten denen von `pattern` entsprechen.

## Beispiele

- `anagramStartIndices("cbaebabacd", "abc")` → `[0, 6]`
- `anagramStartIndices("abab", "ab")` → `[0, 1, 2]`

## Einschränkungen

- `0 <= text.length <= 100000`
- `1 <= pattern.length <= 1000`
- Beide Zeichenfolgen enthalten nur englische Kleinbuchstaben von `a` bis `z`.

## Hinweis

Aktualisiere beim Verschieben des Fensters die Häufigkeiten des herausgehenden und hineinkommenden Buchstabens.

## Startcode

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> anagramStartIndices(std::string text, std::string pattern) { return {}; }
};
```

```java
class Solution {
  public int[] anagramStartIndices(String text, String pattern) { return new int[0]; }
}
```

```python
class Solution:
    def anagramStartIndices(self, text, pattern):
        return []
```

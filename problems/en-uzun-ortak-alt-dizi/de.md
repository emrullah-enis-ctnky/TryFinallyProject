---
slug: en-uzun-ortak-alt-dizi
title: Längste Gemeinsame Teilfolge
difficulty: orta
topics: [Dynamische Programmierung 2D]
points: 30
---

## Problem

Finde die Länge der längsten Zeichenfolge, die in zwei Geräteprotokollen in gleicher Reihenfolge vorkommt. Die Zeichen müssen nicht benachbart sein.

## Beispiele

- `longestCommonSubsequence("abcde", "ace")` → `3`
- `longestCommonSubsequence("abc", "def")` → `0`

## Einschränkungen

- 0 <= first.length, second.length <= 1000; nur englische Kleinbuchstaben.

## Hinweis

Sind die letzten Zeichen gleich, addiere eins zur Antwort der Präfixe; andernfalls nimm das größere von zwei Ergebnissen.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int longestCommonSubsequence(std::string first, std::string second) { return 0; }
};
```

```java
class Solution {
  public int longestCommonSubsequence(String first, String second) { return 0; }
}
```

```python
class Solution:
    def longestCommonSubsequence(self, first, second):
        return 0
```

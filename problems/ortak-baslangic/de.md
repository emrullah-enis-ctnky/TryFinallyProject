---
slug: ortak-baslangic
title: Gemeinsamer Präfix
difficulty: kolay
topics: [Zeichenfolgen]
points: 15
---

## Problem

Finde den gemeinsamen Anfang von Dateinamen in einem Archiv. Gibt es keinen gemeinsamen Präfix, gib eine leere Zeichenfolge zurück.

## Beispiele

- `longestCommonPrefix(["planet", "plant", "plan"])` → `"plan"`
- `longestCommonPrefix(["red", "blue"])` → `""`

## Einschränkungen

- 1 <= words.length <= 1000; 0 <= words[i].length <= 1000; nur englische Kleinbuchstaben.

## Hinweis

Kürze den ersten Namen, solange er zu allen anderen passt.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string longestCommonPrefix(std::vector<std::string>& words) { return ""; }
};
```

```java
class Solution {
  public String longestCommonPrefix(String[] words) { return ""; }
}
```

```python
class Solution:
    def longestCommonPrefix(self, words):
        return ""
```

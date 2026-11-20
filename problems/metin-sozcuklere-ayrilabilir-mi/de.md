---
slug: metin-sozcuklere-ayrilabilir-mi
title: Lässt Sich Text Zerlegen
difficulty: orta
topics: [Dynamische Programmierung 1D]
points: 30
---

## Problem

Bestimme, ob ein Etikett durch Aneinanderfügen der gegebenen Produktnamen gebildet werden kann. Ein Wort darf mehrfach verwendet werden.

## Beispiele

- `canSegment("blueberry", ["blue", "berry", "blueb"])` → `true`
- `canSegment("catsandog", ["cats", "dog", "sand", "and", "cat"])` → `false`

## Einschränkungen

- 0 <= text.length <= 200; 1 <= words.length <= 100; Wörter sind nicht leer; nur englische Kleinbuchstaben.

## Hinweis

Verfolge, welche Präfixe des Textes gebildet werden können.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool canSegment(std::string text, std::vector<std::string>& words) { return False; }
};
```

```java
class Solution {
  public boolean canSegment(String text, String[] words) { return False; }
}
```

```python
class Solution:
    def canSegment(self, text, words):
        return False
```

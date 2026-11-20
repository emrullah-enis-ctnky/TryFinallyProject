---
slug: yanyana-tekrarlari-sil
title: Benachbarte Duplikate Entfernen
difficulty: orta
topics: [Stapel]
points: 25
---

## Problem

Entferne benachbarte gleiche Zeichenpaare. Entstehen durch das Entfernen neue gleiche Nachbarn, entferne auch diese Paare.

## Beispiele

- `removeAdjacentDuplicates("abbaca")` → `"ca"`
- `removeAdjacentDuplicates("azxxzy")` → `"ay"`

## Einschränkungen

- 0 <= text.length <= 100000; der Text enthält englische Kleinbuchstaben.

## Hinweis

Wenn das letzte verarbeitete Zeichen dem nächsten gleicht, entferne beide.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string removeAdjacentDuplicates(std::string text) { return ""; }
};
```

```java
class Solution {
  public String removeAdjacentDuplicates(String text) { return ""; }
}
```

```python
class Solution:
    def removeAdjacentDuplicates(self, text):
        return ""
```

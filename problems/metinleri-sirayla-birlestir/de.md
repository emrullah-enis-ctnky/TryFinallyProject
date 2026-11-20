---
slug: metinleri-sirayla-birlestir
title: Texte Abwechselnd Verbinden
difficulty: kolay
topics: [Zwei Zeiger]
points: 15
---

## Problem

Verbinde zwei kurze Protokolltexte zeichenweise abwechselnd. Endet ein Text zuerst, füge den Rest des anderen an.

## Beispiele

- `mergeAlternately("ab", "XYZ")` → `"aXbYZ"`
- `mergeAlternately("cat", "go")` → `"cgaot"`

## Einschränkungen

- 0 <= first.length, second.length <= 1000; Texte enthalten ASCII-Buchstaben.

## Hinweis

Verfolge getrennte Indizes, damit keine übrigen Zeichen verloren gehen.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string mergeAlternately(std::string first, std::string second) { return ""; }
};
```

```java
class Solution {
  public String mergeAlternately(String first, String second) { return ""; }
}
```

```python
class Solution:
    def mergeAlternately(self, first, second):
        return ""
```

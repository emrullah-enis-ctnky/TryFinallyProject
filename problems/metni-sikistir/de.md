---
slug: metni-sikistir
title: Text Komprimieren
difficulty: orta
topics: [Zeichenfolgen]
points: 25
---

## Problem

Kodiere aufeinanderfolgende gleiche Zeichen in einem Protokoll als Zeichen mit Wiederholungszahl. Bei einmaligem Vorkommen entfällt die Zahl. Beispiel: `aaabbc` wird zu `a3b2c`.

## Beispiele

- `compressRuns("aaabbc")` → `"a3b2c"`
- `compressRuns("xyz")` → `"xyz"`

## Einschränkungen

- 0 <= text.length <= 100000; der Text enthält englische Kleinbuchstaben.

## Hinweis

Füge beim Ende einer Gruppe ihr Zeichen und bei Bedarf die Anzahl hinzu.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string compressRuns(std::string text) { return ""; }
};
```

```java
class Solution {
  public String compressRuns(String text) { return ""; }
}
```

```python
class Solution:
    def compressRuns(self, text):
        return ""
```

---
slug: en-uzun-gecerli-parantez
title: Längste Gültige Klammer
difficulty: orta
topics: [Stapel]
points: 30
---

## Problem

Finde die Länge der längsten zusammenhängenden ausgeglichenen Teilzeichenfolge aus öffnenden und schließenden Klammern.

## Beispiele

- `longestValidParentheses("(()")` → `2`
- `longestValidParentheses(")()())")` → `4`

## Einschränkungen

- 0 <= text.length <= 100000; text enthält nur `(` und `)`.

## Hinweis

Verfolge gültige Startindizes in einem Stapel.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int longestValidParentheses(std::string text) { return 0; }
};
```

```java
class Solution {
  public int longestValidParentheses(String text) { return 0; }
}
```

```python
class Solution:
    def longestValidParentheses(self, text):
        return 0
```

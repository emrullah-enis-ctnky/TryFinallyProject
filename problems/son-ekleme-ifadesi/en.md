---
slug: son-ekleme-ifadesi
title: Evaluate Postfix Expression
difficulty: orta
topics: [Stack, Strings]
points: 30
---

## Problem

A calculator expression lists numbers and the operators `+`, `-`, and `*` in postfix order. For example, `2 3 +` places the operator after its two numbers. Write `evaluatePostfix` to compute a valid expression.

## Examples

- `evaluatePostfix(["2", "3", "+", "4", "*"])` → `20`
- `evaluatePostfix(["8", "5", "-"])` → `3`

## Constraints

- `1 <= tokens.length <= 1000`
- Numbers are signed 32-bit integers.
- The expression is valid, and every intermediate result fits a signed 32-bit integer.
- Operators are only `+`, `-`, and `*`.

## Hint

When an operator appears, take the last two numbers and push their result back.

## Starter Code

```cpp
#include <string>
#include <vector>
class Solution {
public:
  int evaluatePostfix(std::vector<std::string>& tokens) { return 0; }
};
```

```java
class Solution {
  public int evaluatePostfix(String[] tokens) { return 0; }
}
```

```python
class Solution:
    def evaluatePostfix(self, tokens):
        return 0
```

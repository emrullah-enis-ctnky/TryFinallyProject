---
slug: parantez-dengesi
title: Balanced Brackets
difficulty: kolay
topics: [Stack, Strings]
points: 15
---

## Problem

You are given a string containing only `()`, `[]`, and `{}`. Write `isBalanced` to return `true` if every opening bracket is closed by the matching type in the correct order, and `false` otherwise. The empty string is balanced.

## Examples

- `isBalanced("{[()]}")` → `true`
- `isBalanced("([)]")` → `false`

In the second example, the brackets do not close in matching order.

## Constraints

- `0 <= text.length <= 100000`
- The string contains only `()[]{}`.

## Hint

Keep opening brackets on a stack and check the most recent one at each closing bracket.

## Starter Code

```cpp
#include <string>
class Solution {
public:
  bool isBalanced(std::string text) { return false; }
};
```

```java
class Solution {
  public boolean isBalanced(String text) { return false; }
}
```

```python
class Solution:
    def isBalanced(self, text):
        return False
```

---
slug: gecerli-parantezler
title: Valid Parentheses
difficulty: orta
topics: [Stack, Strings]
points: 25
---

## Problem

Given a string containing only the characters `(`, `)`, `[`, `]`, `{` and `}`, write an `isValid` method that returns `true` if the brackets are opened and closed correctly, otherwise `false`.

To be valid, every opening bracket must be closed by a bracket of the same type, and the most recently opened bracket must be closed first.

## Examples

- `isValid("()[]{}")` → `true`
- `isValid("(]")` → `false`
- `isValid("{[]}")` → `true`

## Constraints

- `0 ≤ length ≤ 200000`
- An empty string is valid.

## Hint

Push opening brackets onto a stack. When a closing bracket appears, check whether it matches the top of the stack.

## Starter Code

```cpp
#include <string>

class Solution {
public:
  bool isValid(std::string s) {
    // Write your solution here
    return false;
  }
};
```

```java
class Solution {
  public boolean isValid(String s) {
    // Write your solution here
    return false;
  }
}
```

```python
class Solution:
    def isValid(self, s):
        # Write your solution here
        return False
```

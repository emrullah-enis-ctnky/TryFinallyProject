---
slug: en-uzun-gecerli-parantez
title: Longest Valid Parentheses
difficulty: orta
topics: [Stack]
points: 30
---

## Problem

Find the length of the longest contiguous balanced substring containing only opening and closing parentheses.

## Examples

- `longestValidParentheses("(()")` → `2`
- `longestValidParentheses(")()())")` → `4`

## Constraints

- 0 <= text.length <= 100000; text contains only `(` and `)`.

## Hint

Track valid starting indices on a stack.

## Starter Code

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

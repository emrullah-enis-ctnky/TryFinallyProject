---
slug: palindrom-mu
title: Is The Text Palindromic
difficulty: kolay
topics: [Two Pointers]
points: 15
---

## Problem

Determine whether an access code reads the same in both directions. `isPalindrome` is case-sensitive.

## Examples

- `isPalindrome("level")` → `true`
- `isPalindrome("Level")` → `false`

## Constraints

- 0 <= text.length <= 100000; text contains English letters in either case.

## Hint

Compare characters from both ends while moving toward the center.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isPalindrome(std::string text) { return false; }
};
```

```java
class Solution {
  public boolean isPalindrome(String text) { return false; }
}
```

```python
class Solution:
    def isPalindrome(self, text):
        return false
```

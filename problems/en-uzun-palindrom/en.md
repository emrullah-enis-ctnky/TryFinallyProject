---
slug: en-uzun-palindrom
title: Longest Palindromic Segment
difficulty: orta
topics: [Strings, Two Pointers]
points: 30
---

## Problem

Find the longest contiguous segment in an archive record `text` that reads the same forward and backward. If several segments have the same maximum length, return the one with the smallest starting index using `longestPalindrome`.

## Examples

- `longestPalindrome("babad")` → `"bab"`
- `longestPalindrome("cbbd")` → `"bb"`

## Constraints

- `0 <= text.length <= 2000`
- `text` contains only English letters and digits.

## Hint

Try each position as the center of both an odd-length and an even-length palindrome.

## Starter Code

```cpp
#include <string>
class Solution {
public:
  std::string longestPalindrome(std::string text) { return ""; }
};
```

```java
class Solution {
  public String longestPalindrome(String text) { return ""; }
}
```

```python
class Solution:
    def longestPalindrome(self, text):
        return ""
```

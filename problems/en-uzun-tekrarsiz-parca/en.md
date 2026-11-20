---
slug: en-uzun-tekrarsiz-parca
title: Longest Unique Substring
difficulty: orta
topics: [Sliding Window, Strings]
points: 25
---

## Problem

You are given a string of lowercase English letters. Write `longestUniqueLength` to return the length of the longest contiguous substring in which no letter appears twice.

## Examples

- `longestUniqueLength("abcabcbb")` → `3`
- `longestUniqueLength("pwwkew")` → `3`

In the first example, `abc`, `bca`, and `cab` are longest unique substrings, each of length `3`.

## Constraints

- `0 <= text.length <= 200000`
- The string contains only letters `a`–`z`.

## Hint

As the right end moves forward, move the left end past any repeated letter inside the window.

## Starter Code

```cpp
#include <string>
class Solution {
public:
  int longestUniqueLength(std::string text) { return 0; }
};
```

```java
class Solution {
  public int longestUniqueLength(String text) { return 0; }
}
```

```python
class Solution:
    def longestUniqueLength(self, text):
        return 0
```

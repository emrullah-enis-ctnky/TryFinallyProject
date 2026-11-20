---
slug: en-uzun-ortak-alt-dizi
title: Longest Common Subsequence
difficulty: orta
topics: [Dynamic Programming - 2D]
points: 30
---

## Problem

Find the length of the longest sequence of characters shared by two device logs without changing their order. The characters need not be adjacent.

## Examples

- `longestCommonSubsequence("abcde", "ace")` → `3`
- `longestCommonSubsequence("abc", "def")` → `0`

## Constraints

- 0 <= first.length, second.length <= 1000; lowercase English letters only.

## Hint

When the last characters match, add one to the prefixes’ answer; otherwise take the larger of two options.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int longestCommonSubsequence(std::string first, std::string second) { return 0; }
};
```

```java
class Solution {
  public int longestCommonSubsequence(String first, String second) { return 0; }
}
```

```python
class Solution:
    def longestCommonSubsequence(self, first, second):
        return 0
```

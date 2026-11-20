---
slug: ortak-baslangic
title: Longest Common Prefix
difficulty: kolay
topics: [Strings]
points: 15
---

## Problem

Find the shared starting part of file names in an archive. Return an empty string when there is no common prefix.

## Examples

- `longestCommonPrefix(["planet", "plant", "plan"])` → `"plan"`
- `longestCommonPrefix(["red", "blue"])` → `""`

## Constraints

- 1 <= words.length <= 1000; 0 <= words[i].length <= 1000; lowercase English letters only.

## Hint

Shorten the first name while keeping it matched with every other name.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string longestCommonPrefix(std::vector<std::string>& words) { return ""; }
};
```

```java
class Solution {
  public String longestCommonPrefix(String[] words) { return ""; }
}
```

```python
class Solution:
    def longestCommonPrefix(self, words):
        return ""
```

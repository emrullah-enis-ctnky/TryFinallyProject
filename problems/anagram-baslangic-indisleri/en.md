---
slug: anagram-baslangic-indisleri
title: Find Anagram Start Indices
difficulty: orta
topics: [Strings, Sliding Window, Hashing]
points: 30
---

## Problem

In `text`, which contains lowercase English letters, return the starting indices in ascending order of every contiguous segment with the same letter counts as `pattern`.

## Examples

- `anagramStartIndices("cbaebabacd", "abc")` → `[0, 6]`
- `anagramStartIndices("abab", "ab")` → `[0, 1, 2]`

## Constraints

- `0 <= text.length <= 100000`
- `1 <= pattern.length <= 1000`
- Both strings contain only lowercase English letters from `a` to `z`.

## Hint

As a fixed-length window moves, update the counts for the letter leaving and entering it.

## Starter Code

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> anagramStartIndices(std::string text, std::string pattern) { return {}; }
};
```

```java
class Solution {
  public int[] anagramStartIndices(String text, String pattern) { return new int[0]; }
}
```

```python
class Solution:
    def anagramStartIndices(self, text, pattern):
        return []
```

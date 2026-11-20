---
slug: k-cesitli-en-uzun-parca
title: Longest K-Letter Segment
difficulty: orta
topics: [Strings, Sliding Window, Hashing]
points: 30
---

## Problem

Write `longestLimitedAlphabetRun` to return the length of the longest contiguous segment in `text` containing at most `k` distinct letters. The text contains lowercase English letters. If `k` is zero, the answer is zero.

## Examples

- `longestLimitedAlphabetRun("aabac", 2)` → `4`
- `longestLimitedAlphabetRun("abc", 1)` → `1`

## Constraints

- `0 <= text.length <= 100000`
- `text` contains only lowercase English letters from `a` to `z`.
- `0 <= k <= 26`

## Hint

If extending the right end exceeds the distinct-letter limit, shrink from the left.

## Starter Code

```cpp
#include <string>
class Solution {
public:
  int longestLimitedAlphabetRun(std::string text, int k) { return 0; }
};
```

```java
class Solution {
  public int longestLimitedAlphabetRun(String text, int k) { return 0; }
}
```

```python
class Solution:
    def longestLimitedAlphabetRun(self, text, k):
        return 0
```

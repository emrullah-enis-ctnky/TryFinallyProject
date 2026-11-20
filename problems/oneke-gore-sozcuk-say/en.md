---
slug: oneke-gore-sozcuk-say
title: Count Words by Prefix
difficulty: orta
topics: [Trie]
points: 30
---

## Problem

You are given a list of words and a list of prefixes, all containing lowercase English letters. Write `prefixWordCounts` to return, in prefix order, how many entries in the word list start with each prefix. Duplicate word entries are counted separately; the empty prefix matches every word.

## Examples

- `prefixWordCounts(["app", "apple", "ape", "bat"], ["ap", "app", "bat", "cat", ""])` → `[3, 2, 1, 0, 4]`
- `prefixWordCounts(["go", "go", "gone"], ["g", "gone"])` → `[3, 1]`

## Constraints

- `0 <= words.length, prefixes.length <= 10000`
- The total length of all strings in both lists is at most `20000`.
- Strings contain only letters `a`–`z`.

## Hint

Insert each word into a trie and increment the word count at every node it passes through.

## Starter Code

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> prefixWordCounts(std::vector<std::string>& words, std::vector<std::string>& prefixes) { return {}; }
};
```

```java
class Solution {
  public int[] prefixWordCounts(String[] words, String[] prefixes) { return new int[]{}; }
}
```

```python
class Solution:
    def prefixWordCounts(self, words, prefixes):
        return []
```

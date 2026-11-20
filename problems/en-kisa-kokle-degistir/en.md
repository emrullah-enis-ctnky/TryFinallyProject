---
slug: en-kisa-kokle-degistir
title: Replace Words With Roots
difficulty: orta
topics: [Trie, Strings]
points: 30
---

## Problem

A dictionary of roots is given in `roots`, along with a sentence whose words are separated by spaces. Replace each word with the shortest root that is its prefix; keep the word if no root matches. Return the result using `replaceWithShortestRoots`.

## Examples

- `replaceWithShortestRoots(["cat", "bat", "rat"], "the cattle was rattled by the battery")` → `"the cat was rat by the bat"`
- `replaceWithShortestRoots(["a"], "a aa")` → `"a a"`

## Constraints

- `0 <= roots.length <= 1000`
- Each root and word contains only lowercase English letters.
- Words are separated by single spaces; the sentence may be empty and has length at most `100000`.

## Hint

Follow a word from left to right and stop at its first terminal root node.

## Starter Code

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::string replaceWithShortestRoots(std::vector<std::string>& roots, std::string sentence) { return ""; }
};
```

```java
class Solution {
  public String replaceWithShortestRoots(String[] roots, String sentence) { return ""; }
}
```

```python
class Solution:
    def replaceWithShortestRoots(self, roots, sentence):
        return ""
```

---
slug: harf-sayilari-ayni-mi
title: Compare Letter Counts
difficulty: kolay
topics: [Hashing, Strings]
points: 15
---

## Problem

You are given two strings containing only lowercase English letters. Write `areAnagrams` to return `true` if both strings contain each letter the same number of times, and `false` otherwise. Letter order does not matter.

## Examples

- `areAnagrams("listen", "silent")` → `true`
- `areAnagrams("stone", "notesx")` → `false`

## Constraints

- `0 <= first.length, second.length <= 100000`
- Both strings contain only letters `a`–`z`.

## Hint

Count the letters in the first string and compare those counts with the second.

## Starter Code

```cpp
#include <string>
class Solution {
public:
  bool areAnagrams(std::string first, std::string second) { return false; }
};
```

```java
class Solution {
  public boolean areAnagrams(String first, String second) { return false; }
}
```

```python
class Solution:
    def areAnagrams(self, first, second):
        return False
```

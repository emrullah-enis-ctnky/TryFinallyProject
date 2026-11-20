---
slug: metin-sozcuklere-ayrilabilir-mi
title: Can Text Be Segmented
difficulty: orta
topics: [Dynamic Programming - 1D]
points: 30
---

## Problem

Determine whether a label can be formed by concatenating the given product names. A word may be used more than once.

## Examples

- `canSegment("blueberry", ["blue", "berry", "blueb"])` → `true`
- `canSegment("catsandog", ["cats", "dog", "sand", "and", "cat"])` → `false`

## Constraints

- 0 <= text.length <= 200; 1 <= words.length <= 100; words are nonempty; lowercase English letters only.

## Hint

Track which prefixes of the text can be formed.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool canSegment(std::string text, std::vector<std::string>& words) { return false; }
};
```

```java
class Solution {
  public boolean canSegment(String text, String[] words) { return false; }
}
```

```python
class Solution:
    def canSegment(self, text, words):
        return false
```

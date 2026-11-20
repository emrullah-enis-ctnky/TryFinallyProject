---
slug: en-kisa-kapsayan-metin
title: Minimum Covering Window
difficulty: zor
topics: [Sliding Window]
points: 40
---

## Problem

Find the shortest substring of `text` containing every character of `required` with the required multiplicity. If several shortest substrings exist, return the earliest. Return an empty string if none exists.

## Examples

- `minimumCover("ADOBECODEBANC", "ABC")` → `"BANC"`
- `minimumCover("a", "aa")` → `""`

## Constraints

- 0 <= text.length <= 100000; 0 <= required.length <= 1000; ASCII characters are used.

## Hint

Expand the right edge to collect required characters, then shrink the left edge while the window remains valid.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string minimumCover(std::string text, std::string required) { return ""; }
};
```

```java
class Solution {
  public String minimumCover(String text, String required) { return ""; }
}
```

```python
class Solution:
    def minimumCover(self, text, required):
        return ""
```

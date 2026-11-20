---
slug: en-az-duzenleme
title: Minimum Word Edits
difficulty: zor
topics: [Dynamic Programming - 2D, Strings]
points: 45
---

## Problem

A spell checker wants to change `source` into `target`. In one step, it may insert, delete, or replace one letter. Write `minimumEdits` to find the fewest steps required.

## Examples

- `minimumEdits("plane", "plans")` → `1`
- `minimumEdits("book", "back")` → `2`

## Constraints

- `0 <= source.length, target.length <= 500`
- Both strings contain only lowercase English letters.

## Hint

The best result for two prefixes follows from earlier cells and whether their final letters match.

## Starter Code

```cpp
#include <string>
class Solution {
public:
  int minimumEdits(std::string source, std::string target) { return 0; }
};
```

```java
class Solution {
  public int minimumEdits(String source, String target) { return 0; }
}
```

```python
class Solution:
    def minimumEdits(self, source, target):
        return 0
```

---
slug: yanyana-tekrarlari-sil
title: Remove Adjacent Duplicates
difficulty: orta
topics: [Stack]
points: 25
---

## Problem

Remove adjacent pairs of equal characters from a text. If removal makes new equal characters adjacent, remove those pairs as well.

## Examples

- `removeAdjacentDuplicates("abbaca")` → `"ca"`
- `removeAdjacentDuplicates("azxxzy")` → `"ay"`

## Constraints

- 0 <= text.length <= 100000; text contains lowercase English letters.

## Hint

If the last processed character equals the next one, remove both.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string removeAdjacentDuplicates(std::string text) { return ""; }
};
```

```java
class Solution {
  public String removeAdjacentDuplicates(String text) { return ""; }
}
```

```python
class Solution:
    def removeAdjacentDuplicates(self, text):
        return ""
```

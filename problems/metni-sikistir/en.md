---
slug: metni-sikistir
title: Compress Text
difficulty: orta
topics: [Strings]
points: 25
---

## Problem

Encode consecutive equal characters in a log string as the character followed by its count. Omit the count when it is one. For example, `aaabbc` becomes `a3b2c`.

## Examples

- `compressRuns("aaabbc")` → `"a3b2c"`
- `compressRuns("xyz")` → `"xyz"`

## Constraints

- 0 <= text.length <= 100000; text contains lowercase English letters.

## Hint

When a run ends, append its character and its count if greater than one.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string compressRuns(std::string text) { return ""; }
};
```

```java
class Solution {
  public String compressRuns(String text) { return ""; }
}
```

```python
class Solution:
    def compressRuns(self, text):
        return ""
```

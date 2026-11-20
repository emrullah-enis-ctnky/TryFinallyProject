---
slug: metinleri-sirayla-birlestir
title: Merge Texts Alternately
difficulty: kolay
topics: [Two Pointers]
points: 15
---

## Problem

Merge two short log texts by alternating their characters. If one text ends first, append the remainder of the other.

## Examples

- `mergeAlternately("ab", "XYZ")` → `"aXbYZ"`
- `mergeAlternately("cat", "go")` → `"cgaot"`

## Constraints

- 0 <= first.length, second.length <= 1000; texts contain ASCII letters.

## Hint

Track separate indices so no remaining characters are lost.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string mergeAlternately(std::string first, std::string second) { return ""; }
};
```

```java
class Solution {
  public String mergeAlternately(String first, String second) { return ""; }
}
```

```python
class Solution:
    def mergeAlternately(self, first, second):
        return ""
```

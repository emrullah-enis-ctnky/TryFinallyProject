---
slug: alternatif-ikili-metin
title: Alternating Binary Text
difficulty: kolay
topics: [Greedy]
points: 15
---

## Problem

Find the fewest bit changes needed to make a string of zeros and ones alternate between different neighboring characters.

## Examples

- `minimumAlternatingFlips("0100")` → `1`
- `minimumAlternatingFlips("1111")` → `2`

## Constraints

- 1 <= bits.length <= 100000; bits contains only 0 and 1.

## Hint

Compare the text with both patterns, 0101… and 1010….

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int minimumAlternatingFlips(std::string bits) { return 0; }
};
```

```java
class Solution {
  public int minimumAlternatingFlips(String bits) { return 0; }
}
```

```python
class Solution:
    def minimumAlternatingFlips(self, bits):
        return 0
```

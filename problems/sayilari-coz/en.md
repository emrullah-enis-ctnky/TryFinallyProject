---
slug: sayilari-coz
title: Decode Number Codes
difficulty: orta
topics: [Dynamic Programming - 1D]
points: 30
---

## Problem

Codes 1–26 map to letters A–Z. A leading zero is invalid. `decodeWays` returns the number of valid ways to decode the numeric string.

## Examples

- `decodeWays("12")` → `2`
- `decodeWays("06")` → `0`

## Constraints

- 1 <= code.length <= 45; code contains only digits.

## Hint

Combine the ways formed by a valid one-digit code and a valid two-digit code ending at each position.

## Starter Code

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int decodeWays(std::string code) { return 0; }
};
```

```java
class Solution {
  public int decodeWays(String code) { return 0; }
}
```

```python
class Solution:
    def decodeWays(self, code):
        return 0
```

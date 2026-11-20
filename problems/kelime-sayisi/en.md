---
slug: kelime-sayisi
title: Count Words
difficulty: kolay
topics: [Strings]
points: 10
---

## Problem

Count the words in a note. `countWords` returns the number of words in text separated by spaces, with no leading or trailing spaces. An empty string contains zero words.

## Examples

- `countWords("check the north gate")` → `4`
- `countWords("")` → `0`

## Constraints

- `0 <= text.length <= 100000`
- The text contains only lowercase English letters and single spaces.

## Hint

Handle empty text separately; otherwise count the spaces that separate words.

## Starter Code

```cpp
#include <vector>
#include <string>
class Solution {
public:
  int countWords(std::string text) { return 0; }
};
```

```java
class Solution {
  public int countWords(String text) { return 0; }
}
```

```python
class Solution:
    def countWords(self, text):
        return 0
```

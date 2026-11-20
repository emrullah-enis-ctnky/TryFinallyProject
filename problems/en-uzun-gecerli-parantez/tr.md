---
slug: en-uzun-gecerli-parantez
title: En Uzun Geçerli Parantez
difficulty: orta
topics: [Yığın]
points: 30
---

## Problem

Yalnızca açma ve kapama parantezleri içeren bir metindeki en uzun dengeli bitişik parçanın uzunluğunu bulun.

## Örnekler

- `longestValidParentheses("(()")` → `2`
- `longestValidParentheses(")()())")` → `4`

## Kısıtlamalar

- 0 <= text.length <= 100000; text yalnızca `(` ve `)` içerir.

## İpucu

Geçerli başlangıç indislerini bir yığında izleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int longestValidParentheses(std::string text) { return 0; }
};
```

```java
class Solution {
  public int longestValidParentheses(String text) { return 0; }
}
```

```python
class Solution:
    def longestValidParentheses(self, text):
        return 0
```

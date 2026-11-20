---
slug: palindrom-mu
title: Metin Palindrom mu
difficulty: kolay
topics: [İki İşaretçi]
points: 15
---

## Problem

Bir erişim kodunun iki yönde de aynı okunup okunmadığını belirleyin. `isPalindrome` harflerin büyük-küçük biçimini ayırt eder.

## Örnekler

- `isPalindrome("level")` → `true`
- `isPalindrome("Level")` → `false`

## Kısıtlamalar

- 0 <= text.length <= 100000; metin küçük ve büyük İngilizce harflerden oluşur.

## İpucu

Karakterleri iki uçtan karşılaştırarak merkeze ilerleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isPalindrome(std::string text) { return false; }
};
```

```java
class Solution {
  public boolean isPalindrome(String text) { return false; }
}
```

```python
class Solution:
    def isPalindrome(self, text):
        return false
```

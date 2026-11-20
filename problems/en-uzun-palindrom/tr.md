---
slug: en-uzun-palindrom
title: En Uzun Palindrom
difficulty: orta
topics: [Metin, İki İşaretçi]
points: 30
---

## Problem

Bir arşiv kaydındaki `text` içinde en uzun, tersten okunduğunda da aynı kalan kesintisiz parçayı bulun. Birden fazla en uzun parça varsa başlangıç indisi küçük olanı döndüren `longestPalindrome` metodunu yazın.

## Örnekler

- `longestPalindrome("babad")` → `"bab"`
- `longestPalindrome("cbbd")` → `"bb"`

## Kısıtlamalar

- `0 <= text.length <= 2000`
- `text` yalnızca İngilizce harfler ve rakamlardan oluşur.

## İpucu

Her konumu tek harfli ve iki harfli bir palindromun merkezi olarak deneyin.

## Başlangıç Kodu

```cpp
#include <string>
class Solution {
public:
  std::string longestPalindrome(std::string text) { return ""; }
};
```

```java
class Solution {
  public String longestPalindrome(String text) { return ""; }
}
```

```python
class Solution:
    def longestPalindrome(self, text):
        return ""
```

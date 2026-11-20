---
slug: kelime-sayisi
title: Kelime Sayısı
difficulty: kolay
topics: [Metin]
points: 10
---

## Problem

Bir nottaki kelimeleri sayın. `countWords`, boşluklarla ayrılmış ve başında ya da sonunda boşluk bulunmayan metindeki kelime sayısını döndürür. Boş metin sıfır kelime içerir.

## Örnekler

- `countWords("check the north gate")` → `4`
- `countWords("")` → `0`

## Kısıtlamalar

- `0 <= text.length <= 100000`
- Metin yalnızca küçük İngilizce harfler ve tek boşluk içerir.

## İpucu

Boş metni ayrı ele alın; diğer durumda kelimeleri ayıran boşlukları sayın.

## Başlangıç Kodu

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

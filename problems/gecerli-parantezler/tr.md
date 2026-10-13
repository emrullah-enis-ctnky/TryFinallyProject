---
slug: gecerli-parantezler
title: Geçerli Parantezler
difficulty: orta
topics: [Yığın (Stack), Metin]
points: 25
---

## Problem

Sadece `(`, `)`, `[`, `]`, `{`, `}` karakterlerinden oluşan bir metin verilir. Parantezler doğru açılıp doğru sırayla kapanıyorsa `true`, değilse `false` döndüren `isValid` metodunu yazın.

Geçerli olması için her açılan parantez aynı türden bir parantezle kapanmalı ve en son açılan parantez ilk kapanmalıdır.

## Örnekler

- `isValid("()[]{}")` → `true`
- `isValid("(]")` → `false`
- `isValid("{[]}")` → `true`

## Kısıtlamalar

- `0 ≤ metin uzunluğu ≤ 200000`
- Boş metin geçerlidir.

## İpucu

Açılan parantezleri bir yığına (stack) koyun. Kapanan bir parantez gelince yığının en üstündekiyle eşleşiyor mu bakın.

## Başlangıç Kodu

```cpp
#include <string>

class Solution {
public:
  bool isValid(std::string s) {
    // Çözümünüzü buraya yazın
    return false;
  }
};
```

```java
class Solution {
  public boolean isValid(String s) {
    // Çözümünüzü buraya yazın
    return false;
  }
}
```

```python
class Solution:
    def isValid(self, s):
        # Çözümünüzü buraya yazın
        return False
```

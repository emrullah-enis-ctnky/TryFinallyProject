---
slug: sayilari-coz
title: Sayı Kodlarını Çöz
difficulty: orta
topics: [Dinamik Programlama 1D]
points: 30
---

## Problem

1–26 arası kodlar sırasıyla A–Z harflerine karşılık gelir. Baştaki sıfırlar geçersizdir. `decodeWays`, sayısal kodun kaç farklı geçerli biçimde çözülebileceğini döndürür.

## Örnekler

- `decodeWays("12")` → `2`
- `decodeWays("06")` → `0`

## Kısıtlamalar

- 1 <= code.length <= 45; code yalnızca rakamlardan oluşur.

## İpucu

Tek basamaklı ve geçerli iki basamaklı kodların son konumda oluşturduğu durumları birleştirin.

## Başlangıç Kodu

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

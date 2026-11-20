---
slug: metin-sozcuklere-ayrilabilir-mi
title: Metin Sözcüklere Ayrılabilir mi
difficulty: orta
topics: [Dinamik Programlama 1D]
points: 30
---

## Problem

Bir etiket metninin, verilen ürün adlarını art arda kullanarak oluşturulup oluşturulamayacağını belirleyin. Bir sözcük birden fazla kez kullanılabilir.

## Örnekler

- `canSegment("blueberry", ["blue", "berry", "blueb"])` → `true`
- `canSegment("catsandog", ["cats", "dog", "sand", "and", "cat"])` → `false`

## Kısıtlamalar

- 0 <= text.length <= 200; 1 <= words.length <= 100; sözcükler boş değildir; yalnızca küçük İngilizce harfler.

## İpucu

Her metin konumuna kadar oluşturulabilen önekleri izleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool canSegment(std::string text, std::vector<std::string>& words) { return false; }
};
```

```java
class Solution {
  public boolean canSegment(String text, String[] words) { return false; }
}
```

```python
class Solution:
    def canSegment(self, text, words):
        return false
```

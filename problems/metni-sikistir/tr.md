---
slug: metni-sikistir
title: Metni Sıkıştır
difficulty: orta
topics: [Metin]
points: 25
---

## Problem

Bir kayıt metnindeki art arda aynı karakterleri tek karakter ve tekrar sayısıyla gösterin. Bir karakter yalnızca bir kez geçiyorsa sayısını eklemeyin. Örneğin `aaabbc` → `a3b2c`.

## Örnekler

- `compressRuns("aaabbc")` → `"a3b2c"`
- `compressRuns("xyz")` → `"xyz"`

## Kısıtlamalar

- 0 <= text.length <= 100000; metin küçük İngilizce harflerden oluşur.

## İpucu

Bir grubu bitirince karakteri ve gerekirse sayısını sonuca ekleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::string compressRuns(std::string text) { return ""; }
};
```

```java
class Solution {
  public String compressRuns(String text) { return ""; }
}
```

```python
class Solution:
    def compressRuns(self, text):
        return ""
```

---
slug: parantez-dengesi
title: Dengeli Parantezler
difficulty: kolay
topics: [Yığın, Metin]
points: 15
---

## Problem

Yalnızca `()`, `[]` ve `{}` karakterlerinden oluşan bir dize verilir. Her açılış parantezinin doğru türde ve doğru sırada kapandığı durumda `true`, aksi durumda `false` döndüren `isBalanced` metodunu yazın. Boş dize dengelidir.

## Örnekler

- `isBalanced("{[()]}")` → `true`
- `isBalanced("([)]")` → `false`

İkinci örnekte parantezler kapanış sırasıyla eşleşmediği için dize dengeli değildir.

## Kısıtlamalar

- `0 <= text.length <= 100000`
- Dize yalnızca `()[]{}` karakterlerinden oluşur.

## İpucu

Açılan parantezleri bir yığında tutup her kapanışta en son açılanı kontrol edin.

## Başlangıç Kodu

```cpp
#include <string>
class Solution {
public:
  bool isBalanced(std::string text) { return false; }
};
```

```java
class Solution {
  public boolean isBalanced(String text) { return false; }
}
```

```python
class Solution:
    def isBalanced(self, text):
        return False
```

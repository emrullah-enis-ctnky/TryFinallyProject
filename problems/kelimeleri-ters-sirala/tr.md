---
slug: kelimeleri-ters-sirala
title: Kelimeleri Ters Sırala
difficulty: kolay
topics: [Metin, İki İşaretçi]
points: 15
---

## Problem

Küçük İngilizce harflerden oluşan ve kelimeleri bir veya daha fazla boşlukla ayrılan bir cümle verilir. Kelimelerin sırasını ters çevirip aralarında tek boşluk bırakarak döndüren `reverseWords` metodunu yazın. Başta veya sonda boşluk bulunabilir.

## Örnekler

- `reverseWords("learn to code")` → `"code to learn"`
- `reverseWords("  solve   problems ")` → `"problems solve"`

## Kısıtlamalar

- `0 <= sentence.length <= 10000`
- Cümle yalnızca küçük İngilizce harfler ve boşluk içerir.

## İpucu

Önce kelimeleri ayırıp sonra ters sırada birleştirebilirsiniz.

## Başlangıç Kodu

```cpp
#include <string>
class Solution {
public:
  std::string reverseWords(std::string sentence) { return ""; }
};
```

```java
class Solution {
  public String reverseWords(String sentence) { return ""; }
}
```

```python
class Solution:
    def reverseWords(self, sentence):
        return ""
```

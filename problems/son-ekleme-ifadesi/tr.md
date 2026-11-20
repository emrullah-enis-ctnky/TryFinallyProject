---
slug: son-ekleme-ifadesi
title: Son Ekleme İfadesi
difficulty: orta
topics: [Yığın, Metin]
points: 30
---

## Problem

Bir hesap makinesi işlemi, sayıları ve `+`, `-`, `*` işleçlerini son-ekleme biçiminde verir. Örneğin `2 3 +` önce iki sayıyı, sonra işleci yazar. Geçerli bir ifadeyi hesaplayıp sonucu döndüren `evaluatePostfix` metodunu yazın.

## Örnekler

- `evaluatePostfix(["2", "3", "+", "4", "*"])` → `20`
- `evaluatePostfix(["8", "5", "-"])` → `3`

## Kısıtlamalar

- `1 <= tokens.length <= 1000`
- Sayılar 32 bit işaretli tam sayı aralığındadır.
- İfade geçerlidir ve tüm ara sonuçlar 32 bit işaretli aralıktadır.
- İşleçler yalnızca `+`, `-` ve `*` olabilir.

## İpucu

İşleç geldiğinde son iki sayıyı alın ve sonucu tekrar yapıya ekleyin.

## Başlangıç Kodu

```cpp
#include <string>
#include <vector>
class Solution {
public:
  int evaluatePostfix(std::vector<std::string>& tokens) { return 0; }
};
```

```java
class Solution {
  public int evaluatePostfix(String[] tokens) { return 0; }
}
```

```python
class Solution:
    def evaluatePostfix(self, tokens):
        return 0
```

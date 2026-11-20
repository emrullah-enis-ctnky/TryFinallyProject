---
slug: bir-sayisindaki-bitler
title: Bir Sayıdaki Bitler
difficulty: kolay
topics: [Bit İşlemleri]
points: 15
---

## Problem

Negatif olmayan bir tam sayı `number` verilir. İkili gösteriminde `1` olan bitlerin sayısını döndüren `countSetBits` metodunu yazın.

## Örnekler

- `countSetBits(13)` → `3` çünkü `13` ikili olarak `1101`'dir.
- `countSetBits(8)` → `1`

## Kısıtlamalar

- `0 <= number <= 2147483647`

## İpucu

En düşük `1` bitini her adımda temizlemek için `number & (number - 1)` işlemini kullanabilirsiniz.

## Başlangıç Kodu

```cpp
class Solution {
public:
  int countSetBits(int number) { return 0; }
};
```

```java
class Solution {
  public int countSetBits(int number) { return 0; }
}
```

```python
class Solution:
    def countSetBits(self, number):
        return 0
```

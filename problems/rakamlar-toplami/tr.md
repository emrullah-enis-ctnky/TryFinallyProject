---
slug: rakamlar-toplami
title: Rakamların Toplamı
difficulty: kolay
topics: [Özyineleme]
points: 10
---

## Problem

Negatif olmayan bir tam sayı verilir. Ondalık gösterimindeki rakamlarının toplamını döndüren `sumDigits` metodunu yazın. Metodu daha küçük bir sayı üzerinde kendisini çağırarak çözün. `0` sayısının rakamları toplamı `0`'dır.

## Örnekler

- `sumDigits(472)` → `13`
- `sumDigits(0)` → `0`

## Kısıtlamalar

- `0 <= number <= 2147483647`

## İpucu

Son basamağı `number % 10` ile ayırın ve kalan basamaklar için metodu yineleyin.

## Başlangıç Kodu

```cpp
class Solution {
public:
  int sumDigits(int number) { return 0; }
};
```

```java
class Solution {
  public int sumDigits(int number) { return 0; }
}
```

```python
class Solution:
    def sumDigits(self, number):
        return 0
```

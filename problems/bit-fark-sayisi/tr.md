---
slug: bit-fark-sayisi
title: Bit Farkı Sayısı
difficulty: kolay
topics: [Bit İşlemleri]
points: 15
---

## Problem

İki cihaz kimliğinin ikili gösterimlerinde farklı olan bit konumlarının sayısını bulun. Girdiler negatif olmayan 32 bitlik tam sayılardır.

## Örnekler

- `bitDifferenceCount(1, 4)` → `2`
- `bitDifferenceCount(7, 7)` → `0`

## Kısıtlamalar

- 0 <= a, b <= 2147483647.

## İpucu

İki sayının XOR sonucu yalnızca farklı bitlerde 1 olur; bu 1 bitleri sayın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int bitDifferenceCount(int a, int b) { return 0; }
};
```

```java
class Solution {
  public int bitDifferenceCount(int a, int b) { return 0; }
}
```

```python
class Solution:
    def bitDifferenceCount(self, a, b):
        return 0
```

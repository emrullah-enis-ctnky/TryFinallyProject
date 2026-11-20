---
slug: eksik-bilet-numarasi
title: Eksik Bilet Numarası
difficulty: kolay
topics: [Diziler, Bit İşlemleri]
points: 15
---

## Problem

Bir etkinlikte bilet numaraları `0` ile `n` arasındadır. `nums` dizisi bu numaralardan her birini en fazla bir kez içerir ve tam olarak bir numara eksiktir. Eksik numarayı `findMissingTicket` ile bulun.

## Örnekler

- `findMissingTicket([3, 0, 1])` → `2`
- `findMissingTicket([0, 1])` → `2`

## Kısıtlamalar

- `0 <= nums.length <= 100000`
- Değerler `0` ile `nums.length` arasındadır ve tekrarlanmaz.

## İpucu

Bir sayıyı kendisiyle XOR yapmak onu sıfırlar.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int findMissingTicket(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int findMissingTicket(int[] nums) { return 0; }
}
```

```python
class Solution:
    def findMissingTicket(self, nums):
        return 0
```

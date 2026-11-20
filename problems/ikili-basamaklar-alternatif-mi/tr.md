---
slug: ikili-basamaklar-alternatif-mi
title: İkili Basamaklar Alternatif mi
difficulty: kolay
topics: [Bit İşlemleri]
points: 15
---

## Problem

Pozitif bir sayının ikili gösterimindeki komşu bitlerin farklı olup olmadığını belirleyin.

## Örnekler

- `hasAlternatingBits(5)` → `true`
- `hasAlternatingBits(7)` → `false`

## Kısıtlamalar

- 1 <= n <= 2147483647.

## İpucu

Sayıyı bir bit sağa kaydırıp özgün haliyle XOR edin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool hasAlternatingBits(int n) { return false; }
};
```

```java
class Solution {
  public boolean hasAlternatingBits(int n) { return false; }
}
```

```python
class Solution:
    def hasAlternatingBits(self, n):
        return false
```

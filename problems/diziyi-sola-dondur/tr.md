---
slug: diziyi-sola-dondur
title: Diziyi Sola Döndür
difficulty: kolay
topics: [Diziler, İki İşaretçi]
points: 15
---

## Problem

Bir müzik çalma listesi başından başlayarak döngüsel biçimde yeniden düzenleniyor. `rotateLeft`, diziyi `k` konum sola döndürüp yeni diziyi döndürmelidir. `k`, dizi uzunluğundan büyük olabilir.

## Örnekler

- `rotateLeft([1, 2, 3, 4, 5], 2)` → `[3, 4, 5, 1, 2]`
- `rotateLeft([7, 8], 4)` → `[7, 8]`

## Kısıtlamalar

- `0 <= nums.length <= 100000`
- `0 <= k <= 1000000000`

## İpucu

Gerçek döndürme miktarını bulmak için dizinin uzunluğundan yararlanın.

## Başlangıç Kodu

```cpp
#include <vector>
#include <string>
class Solution {
public:
  std::vector<int> rotateLeft(std::vector<int>& nums, int k) { return {}; }
};
```

```java
class Solution {
  public int[] rotateLeft(int[] nums, int k) { return new int[0]; }
}
```

```python
class Solution:
    def rotateLeft(self, nums, k):
        return []
```

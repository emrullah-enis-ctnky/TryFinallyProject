---
slug: k-sifirli-pencere
title: K Sıfırlı Pencere
difficulty: orta
topics: [Kayan Pencere]
points: 25
---

## Problem

En fazla `k` sıfırı bire çevirerek elde edilebilecek en uzun ardışık birler aralığının uzunluğunu bulun.

## Örnekler

- `longestOnesAfterFlips([1, 1, 0, 0, 1, 1, 1], 1)` → `4`
- `longestOnesAfterFlips([0, 0, 0], 2)` → `2`

## Kısıtlamalar

- 0 <= bits.length <= 100000; bits[i] 0 veya 1; 0 <= k <= bits.length.

## İpucu

Pencere içindeki sıfır sayısı `k` değerini aşmayacak şekilde sol sınırı ilerletin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int longestOnesAfterFlips(std::vector<int>& bits, int k) { return 0; }
};
```

```java
class Solution {
  public int longestOnesAfterFlips(int[] bits, int k) { return 0; }
}
```

```python
class Solution:
    def longestOnesAfterFlips(self, bits, k):
        return 0
```

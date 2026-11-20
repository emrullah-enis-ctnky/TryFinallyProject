---
slug: bst-kth-kucuk-deger
title: BST'de K. Küçük Değer
difficulty: orta
topics: [İkili Arama Ağaçları, Ağaçlar, Yığın]
points: 30
---

## Problem

Geçerli bir ikili arama ağacı `nodes` dizisiyle kökten itibaren seviye sırasında kodlanır; `-1` boş düğümdür. Değerleri sıralandığında `k` konumunda bulunan değeri `kthSmallestBst` ile döndürün.

## Örnekler

- `kthSmallestBst([5, 3, 7, 2, 4, 6, 8], 3)` → `4`
- `kthSmallestBst([2, 1, 3], 1)` → `1`

## Kısıtlamalar

- `1 <=` ağaçtaki düğüm sayısı `<= 100000`
- `1 <= k <=` düğüm sayısı
- Düğüm değerleri birbirinden farklıdır ve `-1` boş düğüm işaretçisidir.

## İpucu

İkili arama ağacının sıralı gezinimi değerleri artan sırada ziyaret eder.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int kthSmallestBst(std::vector<int>& nodes, int k) { return 0; }
};
```

```java
class Solution {
  public int kthSmallestBst(int[] nodes, int k) { return 0; }
}
```

```python
class Solution:
    def kthSmallestBst(self, nodes, k):
        return 0
```

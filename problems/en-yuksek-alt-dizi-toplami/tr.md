---
slug: en-yuksek-alt-dizi-toplami
title: Maksimum Alt Dizi Toplamı
difficulty: orta
topics: [Diziler, Dinamik Programlama 1D]
points: 30
---

## Problem

Günlük kâr değişimleri `changes` dizisindedir. Art arda gelen en az bir günün toplam değişimini en büyükleyen kesintisiz aralığın toplamını `maximumSubarraySum` ile bulun.

## Örnekler

- `maximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])` → `6`
- `maximumSubarraySum([-8, -3, -5])` → `-3`

## Kısıtlamalar

- `1 <= changes.length <= 100000`
- `-10000 <= changes[i] <= 10000`

## İpucu

Her konumda, önceki aralığı sürdürmekle yeni bir aralık başlatmayı karşılaştırın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int maximumSubarraySum(std::vector<int>& changes) { return 0; }
};
```

```java
class Solution {
  public int maximumSubarraySum(int[] changes) { return 0; }
}
```

```python
class Solution:
    def maximumSubarraySum(self, changes):
        return 0
```

---
slug: sonraki-permutasyon
title: Sonraki Permütasyon
difficulty: orta
topics: [Açgözlü]
points: 30
---

## Problem

Bir sıralama anahtarını sözlük sırasındaki bir sonraki düzene geçirin. Daha büyük düzen yoksa en küçük düzene dönün. Yeni diziyi döndürün.

## Örnekler

- `nextPermutation([1, 2, 3])` → `[1,3,2]`
- `nextPermutation([3, 2, 1])` → `[1,2,3]`

## Kısıtlamalar

- 1 <= nums.length <= 100000; 0 <= nums[i] <= 100000; tekrarlar olabilir.

## İpucu

Sağdan ilk artan çifti bulun, ardından sağındaki uygun en küçük değeri onunla değiştirip kuyruğu ters çevirin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> nextPermutation(std::vector<int>& nums) { return {}; }
};
```

```java
class Solution {
  public int[] nextPermutation(int[] nums) { return {}; }
}
```

```python
class Solution:
    def nextPermutation(self, nums):
        return {}
```

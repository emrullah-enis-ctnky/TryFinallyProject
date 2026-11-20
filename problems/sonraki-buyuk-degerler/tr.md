---
slug: sonraki-buyuk-degerler
title: Sonraki Büyük Değerler
difficulty: orta
topics: [Yığın]
points: 25
---

## Problem

Bir sensör dizisindeki her değer için sağında bulunan ilk daha büyük değeri bulun. Böyle bir değer yoksa sonuçta -1 kullanın.

## Örnekler

- `nextGreaterValues([2, 1, 3, 2])` → `[3,3,-1,-1]`
- `nextGreaterValues([5, 4])` → `[-1,-1]`

## Kısıtlamalar

- 0 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## İpucu

Sonuçlanmamış indisleri bir yığında tutun.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> nextGreaterValues(std::vector<int>& nums) { return {}; }
};
```

```java
class Solution {
  public int[] nextGreaterValues(int[] nums) { return {}; }
}
```

```python
class Solution:
    def nextGreaterValues(self, nums):
        return {}
```

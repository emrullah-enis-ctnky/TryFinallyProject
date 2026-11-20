---
slug: sirali-tekrarlari-tekille
title: Sıralı Tekrarları Tekille
difficulty: kolay
topics: [İki İşaretçi]
points: 15
---

## Problem

Artan sıradaki bir parça kataloğundaki tekrarları kaldırın. `uniqueSorted`, her değerin bir kez bulunduğu ve sırası korunan yeni bir dizi döndürmelidir.

## Örnekler

- `uniqueSorted([1, 1, 2, 4, 4])` → `[1,2,4]`
- `uniqueSorted([3, 3])` → `[3]`

## Kısıtlamalar

- 0 <= nums.length <= 100000; nums azalmayan sıradadır; -100000 <= nums[i] <= 100000.

## İpucu

Sıralı dizide her yeni değer, son eklenen değerden farklı olduğunda sonuca eklenir.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> uniqueSorted(std::vector<int>& nums) { return {}; }
};
```

```java
class Solution {
  public int[] uniqueSorted(int[] nums) { return {}; }
}
```

```python
class Solution:
    def uniqueSorted(self, nums):
        return {}
```

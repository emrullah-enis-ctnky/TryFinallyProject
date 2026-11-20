---
slug: ekleme-yerini-bul
title: Ekleme Yerini Bul
difficulty: orta
topics: [İkili Arama]
points: 25
---

## Problem

Artan sıradaki benzersiz ürün kodlarında `target` değerinin bulunacağı indisi döndürün. Değer yoksa, sıralı düzeni koruyacak ekleme indisini döndürün.

## Örnekler

- `searchInsert([1, 4, 8, 12], 8)` → `2`
- `searchInsert([2, 5, 9], 6)` → `2`

## Kısıtlamalar

- 0 <= nums.length <= 100000; nums kesin artan sıradadır; -100000 <= target, nums[i] <= 100000.

## İpucu

Arama aralığını her adımda yarıya indirin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int searchInsert(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int searchInsert(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def searchInsert(self, nums, target):
        return 0
```

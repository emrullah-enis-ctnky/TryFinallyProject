---
slug: artan-mi
title: Dizi Artan mı
difficulty: kolay
topics: [Diziler]
points: 10
---

## Problem

Bir teslimat rotasının ölçüm değerlerinin kesin artan sırada olup olmadığını belirleyin. `isStrictlyIncreasing` sonucu boolean olarak döndürür; eşit komşu değerler artan sayılmaz.

## Örnekler

- `isStrictlyIncreasing([1, 3, 8])` → `true`
- `isStrictlyIncreasing([2, 2, 5])` → `false`

## Kısıtlamalar

- 0 <= nums.length <= 100000; -100000 <= nums[i] <= 100000

## İpucu

Her komşu çifti bir kez karşılaştırın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isStrictlyIncreasing(std::vector<int>& nums) { return false; }
};
```

```java
class Solution {
  public boolean isStrictlyIncreasing(int[] nums) { return false; }
}
```

```python
class Solution:
    def isStrictlyIncreasing(self, nums):
        return false
```

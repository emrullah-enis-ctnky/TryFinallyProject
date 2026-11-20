---
slug: frekans-eslesmesi
title: Frekans Eşleşmesi
difficulty: kolay
topics: [Diziler, Hashleme]
points: 15
---

## Problem

Bir sensör günlüğünde belirli bir ölçümün kaç kez kaydedildiğini bulun. `countOccurrences` metodu, `target` değerinin dizideki sayısını döndürmelidir.

## Örnekler

- `countOccurrences([3, 1, 3, 2, 3], 3)` → `3`
- `countOccurrences([], 8)` → `0`

## Kısıtlamalar

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i], target <= 100000`

## İpucu

Diziyi bir kez tararken eşleşmeleri sayın.

## Başlangıç Kodu

```cpp
#include <vector>
#include <string>
class Solution {
public:
  int countOccurrences(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int countOccurrences(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def countOccurrences(self, nums, target):
        return 0
```

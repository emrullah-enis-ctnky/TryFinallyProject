---
slug: hedef-degeri-cikar
title: Hedef Değeri Çıkar
difficulty: kolay
topics: [İki İşaretçi]
points: 15
---

## Problem

Bir ölçüm listesinden geçersiz `target` kayıtlarını çıkarın. `withoutTarget` diğer değerleri özgün sıralarında içeren yeni bir liste döndürür.

## Örnekler

- `withoutTarget([2, 5, 2, 7], 2)` → `[5,7]`
- `withoutTarget([1, 3], 9)` → `[1,3]`

## Kısıtlamalar

- 0 <= nums.length <= 100000; -100000 <= nums[i], target <= 100000.

## İpucu

Sonuca yalnızca hedef dışındaki değerleri ekleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> withoutTarget(std::vector<int>& nums, int target) { return {}; }
};
```

```java
class Solution {
  public int[] withoutTarget(int[] nums, int target) { return {}; }
}
```

```python
class Solution:
    def withoutTarget(self, nums, target):
        return {}
```

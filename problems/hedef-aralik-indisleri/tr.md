---
slug: hedef-aralik-indisleri
title: Hedef Aralığı İndisleri
difficulty: orta
topics: [İkili Arama]
points: 25
---

## Problem

Artan sıradaki bir olay günlüğünde hedef değerinin ilk ve son indisini bulun. Değer yoksa `[-1, -1]` döndürün.

## Örnekler

- `targetRange([1, 2, 2, 2, 5], 2)` → `[1,3]`
- `targetRange([1, 3, 5], 4)` → `[-1,-1]`

## Kısıtlamalar

- 0 <= nums.length <= 100000; nums azalmayan sıradadır; -100000 <= target, nums[i] <= 100000.

## İpucu

İlk konum için alt sınır, son konum için üst sınır araması yapın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> targetRange(std::vector<int>& nums, int target) { return {}; }
};
```

```java
class Solution {
  public int[] targetRange(int[] nums, int target) { return {}; }
}
```

```python
class Solution:
    def targetRange(self, nums, target):
        return {}
```

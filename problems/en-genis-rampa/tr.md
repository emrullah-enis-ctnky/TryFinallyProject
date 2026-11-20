---
slug: en-genis-rampa
title: En Geniş Rampa
difficulty: orta
topics: [Yığın]
points: 30
---

## Problem

İndisleri `i < j` ve değerleri `nums[i] <= nums[j]` koşulunu sağlayan bir çift seçin. En büyük `j-i` farkını döndürün.

## Örnekler

- `maximumWidthRamp([6, 0, 8, 2, 1, 5])` → `4`
- `maximumWidthRamp([9, 8, 1, 0, 1, 9])` → `5`

## Kısıtlamalar

- 2 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## İpucu

Olası başlangıç adaylarını azalan değerlerle bir yığında saklayın ve sağdan tarayarak eşleştirin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int maximumWidthRamp(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int maximumWidthRamp(int[] nums) { return 0; }
}
```

```python
class Solution:
    def maximumWidthRamp(self, nums):
        return 0
```

---
slug: ilk-tekrar-eden
title: İlk Tekrar Eden
difficulty: orta
topics: [Hashleme]
points: 25
---

## Problem

Bir olay akışında daha önce görülmüş ilk değeri bulun. `firstRepeated`, tarama sırasında ilk kez tekrar karşılaşılan değeri döndürür; tekrar yoksa -1 döndürür.

## Örnekler

- `firstRepeated([4, 8, 3, 8, 4])` → `8`
- `firstRepeated([1, 2, 3])` → `-1`

## Kısıtlamalar

- 0 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## İpucu

Şimdiye kadar görülen değerleri bir kümede tutun.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int firstRepeated(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int firstRepeated(int[] nums) { return 0; }
}
```

```python
class Solution:
    def firstRepeated(self, nums):
        return 0
```

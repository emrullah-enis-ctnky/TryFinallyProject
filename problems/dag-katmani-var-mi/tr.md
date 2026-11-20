---
slug: dag-katmani-var-mi
title: Dağ Şekli Var mı
difficulty: kolay
topics: [Diziler]
points: 15
---

## Problem

Bir yürüyüş rotasının önce kesin artıp sonra kesin azalan yüksekliklere sahip olup olmadığını belirleyin. Tepe ilk veya son konumda olamaz.

## Örnekler

- `isMountain([1, 3, 5, 4, 2])` → `true`
- `isMountain([1, 2, 2, 1])` → `false`

## Kısıtlamalar

- 3 <= nums.length <= 100000; -100000 <= nums[i] <= 100000.

## İpucu

Tepeye kadar ilerleyin, sonra dizinin sonuna kadar kesin azalmayı doğrulayın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isMountain(std::vector<int>& nums) { return false; }
};
```

```java
class Solution {
  public boolean isMountain(int[] nums) { return false; }
}
```

```python
class Solution:
    def isMountain(self, nums):
        return false
```

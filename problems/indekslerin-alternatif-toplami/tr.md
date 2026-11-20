---
slug: indekslerin-alternatif-toplami
title: Indekslerin Alternatif Toplamı
difficulty: kolay
topics: [Diziler]
points: 10
---

## Problem

Bir rapordaki sayılar sırayla `nums` dizisinde verilmiştir. Sıfır tabanlı çift indislerdeki değerleri toplayıp tek indislerdeki değerleri çıkaran `alternatingIndexSum` metodunu yazın.

## Örnekler

- `alternatingIndexSum([8, 3, 5, 2])` → `8`
- `alternatingIndexSum([4, 7, 1])` → `-2`

## Kısıtlamalar

- `1 <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`

## İpucu

Her elemanın işareti indisinin çift veya tek olmasına bağlıdır.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int alternatingIndexSum(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int alternatingIndexSum(int[] nums) { return 0; }
}
```

```python
class Solution:
    def alternatingIndexSum(self, nums):
        return 0
```

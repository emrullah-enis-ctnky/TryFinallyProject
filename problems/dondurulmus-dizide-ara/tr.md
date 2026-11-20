---
slug: dondurulmus-dizide-ara
title: Döndürülmüş Dizide Ara
difficulty: orta
topics: [İkili Arama, Diziler]
points: 25
---

## Problem

Tekrarsız değerlerden oluşan artan sıralı bir dizi, bilinmeyen bir noktadan döndürülmüştür. Döndürülmüş dizi ve `target` verildiğinde hedefin indisini, yoksa `-1` döndüren `searchRotated` metodunu yazın.

## Örnekler

- `searchRotated([4, 5, 6, 7, 0, 1, 2], 0)` → `4`
- `searchRotated([4, 5, 6, 7, 0, 1, 2], 3)` → `-1`

## Kısıtlamalar

- `0 <= nums.length <= 100000`
- Dizi tekrar içermez.
- `-100000 <= nums[i], target <= 100000`

## İpucu

Her adımda iki yarıdan en az birinin sıralı olduğunu belirleyin ve hedefi içerebilecek yarıda aramayı sürdürün.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int searchRotated(std::vector<int>& nums, int target) { return -1; }
};
```

```java
class Solution {
  public int searchRotated(int[] nums, int target) { return -1; }
}
```

```python
class Solution:
    def searchRotated(self, nums, target):
        return -1
```

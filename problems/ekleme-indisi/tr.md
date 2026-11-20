---
slug: ekleme-indisi
title: Sıralı Ekleme İndisi
difficulty: kolay
topics: [İkili Arama, Diziler]
points: 15
---

## Problem

Tekrarsız değerlerden oluşan, artan sırada sıralı bir dizi ve `target` verilir. Hedef dizide varsa indisini, yoksa sıralı düzeni koruyarak ekleneceği indisi döndüren `insertionIndex` metodunu yazın.

## Örnekler

- `insertionIndex([1, 3, 5, 8], 5)` → `2`
- `insertionIndex([1, 3, 5, 8], 4)` → `2`

## Kısıtlamalar

- `0 <= nums.length <= 100000`
- Dizi artan sıradadır ve tekrar içermez.
- `-100000 <= nums[i], target <= 100000`

## İpucu

Hedefe eşit veya ondan büyük ilk değerin konumunu arayın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int insertionIndex(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int insertionIndex(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def insertionIndex(self, nums, target):
        return 0
```

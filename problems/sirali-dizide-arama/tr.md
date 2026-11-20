---
slug: sirali-dizide-arama
title: Sıralı Dizide Arama
difficulty: kolay
topics: [İkili Arama, Diziler]
points: 15
---

## Problem

Artan sırada sıralanmış bir tam sayı dizisi ve hedef değer verilir. Hedefin dizideki ilk indisini, bulunamazsa `-1` döndüren `searchFirst` metodunu yazın.

## Örnekler

- `searchFirst([-4, 1, 1, 3, 9], 1)` → `1`
- `searchFirst([2, 5, 8], 7)` → `-1`

## Kısıtlamalar

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i], target <= 100000`
- Dizi artan sıradadır.

## İpucu

Arama aralığını her adımda yarıya indirin; eşleşme bulduğunuzda daha solda başka bir eşleşme olup olmadığını kontrol edin.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int searchFirst(std::vector<int>& nums, int target) { return -1; }
};
```

```java
class Solution {
  public int searchFirst(int[] nums, int target) { return -1; }
}
```

```python
class Solution:
    def searchFirst(self, nums, target):
        return -1
```

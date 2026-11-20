---
slug: diziyi-saga-kaydir
title: Diziyi Sağa Kaydır
difficulty: kolay
topics: [Diziler, İki İşaretçi]
points: 15
---

## Problem

Bir tam sayı dizisi ve negatif olmayan `k` sayısı verilir. Diziyi sağa `k` konum döndürüp yeni diziyi döndüren `rotateRight` metodunu yazın. Bir eleman son konumdan taşarsa dizinin başından devam eder.

## Örnekler

- `rotateRight([1, 2, 3, 4, 5], 2)` → `[4, 5, 1, 2, 3]`
- `rotateRight([-1, 7], 3)` → `[7, -1]`

İkinci örnekte dizi uzunluğu `2` olduğundan üç kaydırma, bir kaydırmaya eşdeğerdir.

## Kısıtlamalar

- `1 <= nums.length <= 100000`
- `0 <= k <= 1000000000`
- `-100000 <= nums[i] <= 100000`

## İpucu

Kaydırma sayısını dizi uzunluğuna göre sadeleştirin; ters çevirme işlemi yardımcı olabilir.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> rotateRight(std::vector<int>& nums, int k) { return {}; }
};
```

```java
class Solution {
  public int[] rotateRight(int[] nums, int k) { return new int[]{}; }
}
```

```python
class Solution:
    def rotateRight(self, nums, k):
        return []
```

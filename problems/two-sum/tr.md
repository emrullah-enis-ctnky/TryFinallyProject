---
slug: two-sum
title: İki Sayının İndisleri (Two Sum)
difficulty: kolay
topics: [Diziler, Hash Map]
points: 20
---

## Problem

Bir tam sayı dizisi ve bir hedef değer verilir. Toplamları hedefe eşit olan iki farklı elemanın **indislerini** döndüren `twoSum` metodunu yazın. Her girdi için tam olarak bir çözüm olduğu ve aynı elemanın iki kez kullanılamayacağı garanti edilir. Küçük indisi önce döndürün.

## Örnekler

- `twoSum([2, 7, 11, 15], 9)` → `[0, 1]`
- `twoSum([3, 2, 4], 6)` → `[1, 2]`

## Kısıtlamalar

- Dizi uzunluğu en az 2'dir.
- Dizi elemanları ve hedef değer tam sayıdır.
- Cevap, değerleri değil indisleri içermelidir.
- Döndürülen iki indisi küçükten büyüğe sıralayın.

## İpucu

Her sayı için hedefe ulaşmak üzere gereken tamamlayıcı sayıyı hesaplayın. Daha önce gördüğünüz değerlerin indislerini bir hash map içinde tutabilirsiniz.

## Başlangıç Kodu

```cpp
#include <vector>

class Solution {
public:
  std::vector<int> twoSum(std::vector<int>& nums, int target) {
    // Çözümünüzü buraya yazın
    return {};
  }
};
```

```java
class Solution {
  public int[] twoSum(int[] nums, int target) {
    // Çözümünüzü buraya yazın
    return new int[]{};
  }
}
```

```python
class Solution:
    def twoSum(self, nums, target):
        # Çözümünüzü buraya yazın
        return []
```

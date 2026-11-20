---
slug: iki-sirali-dizinin-mediani
title: İki Dizi Medyanı
difficulty: zor
topics: [İkili Arama, Arama]
points: 40
---

## Problem

Artan sıradaki iki ölçüm dizisinin birlikte sıralanmış halindeki medyanı bulun. Girdilerin ikisi birden boş değildir.

## Örnekler

- `medianOfSortedArrays([1, 3], [2])` → `2.0`
- `medianOfSortedArrays([1, 2], [3, 4])` → `2.5`

## Kısıtlamalar

- 0 <= first.length, second.length <= 100000; toplam uzunluk en az 1; diziler artan sıradadır.

## İpucu

Daha kısa dizide olası bölme noktasını ikili aramayla bulun.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  double medianOfSortedArrays(std::vector<int>& first, std::vector<int>& second) { return 0.0; }
};
```

```java
class Solution {
  public double medianOfSortedArrays(int[] first, int[] second) { return 0.0; }
}
```

```python
class Solution:
    def medianOfSortedArrays(self, first, second):
        return 0.0
```

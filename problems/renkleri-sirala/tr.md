---
slug: renkleri-sirala
title: Renkleri Sırala
difficulty: orta
topics: [Sıralama, İki İşaretçi]
points: 25
---

## Problem

Bir üretim bandındaki parçalar `0`, `1` veya `2` ile etiketlenir. `sortPartColors` metoduyla yeni bir diziyi bu etiketlere göre artan sırada döndürün. Karşılaştırma tabanlı genel bir sıralama kullanmadan tek geçişte çözmeye çalışın.

## Örnekler

- `sortPartColors([2, 0, 2, 1, 1, 0])` → `[0, 0, 1, 1, 2, 2]`
- `sortPartColors([1, 0])` → `[0, 1]`

## Kısıtlamalar

- `0 <= colors.length <= 100000`
- `colors[i]` yalnızca `0`, `1` veya `2`'dir.

## İpucu

Üç bölgenin sınırlarını izleyerek küçük ve büyük değerleri dizinin uçlarına taşıyın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> sortPartColors(std::vector<int>& colors) { return {}; }
};
```

```java
class Solution {
  public int[] sortPartColors(int[] colors) { return new int[0]; }
}
```

```python
class Solution:
    def sortPartColors(self, colors):
        return []
```

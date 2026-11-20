---
slug: halka-devresinde-en-yuksek-toplam
title: Dairesel Işık Toplamı
difficulty: orta
topics: [Dinamik Programlama 1D, Diziler]
points: 30
---

## Problem

Bir binanın güvenlik ışıkları dairesel bir sırada `values` dizisiyle gösterilir. Yan yana olan iki ışığı birlikte açamazsınız; dizinin ilk ve son ışığı da yan yanadır. Açılacak ışıkların değer toplamını en büyükleyen `maximumCircularLightValue` metodunu yazın.

## Örnekler

- `maximumCircularLightValue([2, 3, 2])` → `3`
- `maximumCircularLightValue([1, 2, 3, 1])` → `4`

## Kısıtlamalar

- `1 <= values.length <= 100000`
- `0 <= values[i] <= 1000000000`

## İpucu

İlk ışığı seçtiğiniz ve seçmediğiniz durumları ayrı ayrı düşünün.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  long long maximumCircularLightValue(std::vector<int>& values) { return 0; }
};
```

```java
class Solution {
  public long maximumCircularLightValue(int[] values) { return 0; }
}
```

```python
class Solution:
    def maximumCircularLightValue(self, values):
        return 0
```

---
slug: maksimum-alt-dizi-toplami
title: En Büyük Alt Dizi Toplamı
difficulty: orta
topics: [Diziler, Dinamik Programlama]
points: 30
---

## Problem

Bir tam sayı dizisi verilir. Dizinin **ardışık** elemanlarından oluşan, boş olmayan alt dizilerin toplamları arasından en büyüğünü döndüren `maxSubArray` metodunu yazın.

## Örnekler

- `maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])` → `6`
- `maxSubArray([1])` → `1`
- `maxSubArray([5, 4, -1, 7, 8])` → `23`

## Kısıtlamalar

- `1 ≤ dizi uzunluğu ≤ 100000`
- `-10000 ≤ nums[i] ≤ 10000`
- Tüm elemanlar negatif olabilir.

## İpucu

Her eleman için iki seçenek var: önceki alt diziye eklenmek ya da yeni bir alt dizi başlatmak. Diziyi tek seferde gezerek çözebilirsiniz (Kadane algoritması). İç içe iki döngü büyük testlerde süreyi aşar.

## Başlangıç Kodu

```cpp
#include <vector>

class Solution {
public:
  int maxSubArray(std::vector<int>& nums) {
    // Çözümünüzü buraya yazın
    return 0;
  }
};
```

```java
class Solution {
  public int maxSubArray(int[] nums) {
    // Çözümünüzü buraya yazın
    return 0;
  }
}
```

```python
class Solution:
    def maxSubArray(self, nums):
        # Çözümünüzü buraya yazın
        return 0
```

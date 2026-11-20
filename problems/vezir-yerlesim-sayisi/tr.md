---
slug: vezir-yerlesim-sayisi
title: Vezir Yerleşim Sayısı
difficulty: zor
topics: [Geri İzleme, Bit İşlemleri]
points: 50
---

## Problem

`n x n` bir satranç tahtasına `n` vezir yerleştirilecektir. Hiçbir iki vezir aynı satırı, sütunu veya çapraz hattı paylaşamaz. Tüm geçerli yerleşimlerin sayısını `countQueenArrangements` ile bulun.

## Örnekler

- `countQueenArrangements(4)` → `2`
- `countQueenArrangements(1)` → `1`

## Kısıtlamalar

- `1 <= n <= 14`

## İpucu

Her satırda güvenli sütunları deneyin; bir seçim sonraki satırların kullanılabilir çaprazlarını değiştirir.

## Başlangıç Kodu

```cpp
class Solution {
public:
  int countQueenArrangements(int n) { return 0; }
};
```

```java
class Solution {
  public int countQueenArrangements(int n) { return 0; }
}
```

```python
class Solution:
    def countQueenArrangements(self, n):
        return 0
```

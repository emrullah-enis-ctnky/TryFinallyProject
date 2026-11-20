---
slug: izgarada-sozcuk-kumesi
title: Izgarada Sözcük Kümesi
difficulty: zor
topics: [Önek Ağacı, Geri İzleme, Graflar]
points: 50
---

## Problem

Büyük harfli bir `grid` ve farklı sözcüklerden oluşan `words` listesi verilir. Her sözcük, yatay veya dikey komşu hücreleri kullanarak ve aynı hücreyi en fazla bir kez ziyaret ederek oluşturulabilir. Izgarada bulunan sözcükleri alfabetik sırada döndüren `findGridWords` metodunu yazın.

## Örnekler

- `findGridWords(["OATH", "PEAS", "RAIN"], ["OATH", "PEA", "EAT", "RAIN"])` → `["EAT", "OATH", "PEA", "RAIN"]`
- `findGridWords(["AB", "CD"], ["AB", "ACDB", "AAAA"])` → `["AB", "ACDB"]`

## Kısıtlamalar

- `1 <= grid.length, grid[i].length <= 6`
- Izgara ve sözcükler yalnızca `A` ile `Z` arasındaki harfleri içerir.
- `0 <= words.length <= 1000`; sözcükler farklı ve uzunlukları `1` ile `8` arasındadır.

## İpucu

Sözlükteki ortak önekleri bir önek ağacında paylaşın ve bir dalda ilerleme kalmadığında aramayı geri alın.

## Başlangıç Kodu

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::string> findGridWords(std::vector<std::string>& grid, std::vector<std::string>& words) { return {}; }
};
```

```java
class Solution {
  public String[] findGridWords(String[] grid, String[] words) { return new String[0]; }
}
```

```python
class Solution:
    def findGridWords(self, grid, words):
        return []
```

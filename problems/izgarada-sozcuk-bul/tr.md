---
slug: izgarada-sozcuk-bul
title: Izgarada Sözcük Bul
difficulty: zor
topics: [Geri İzleme, Graflar, Metin]
points: 45
---

## Problem

Büyük harflerden oluşan bir ızgara `grid` ve bir `word` verilir. Sözcük, yatay veya dikey komşu hücrelerden ilerleyerek oluşturulmalıdır; aynı hücre bir sözcükte en fazla bir kez kullanılabilir. Oluşturmak mümkünse `true`, değilse `false` döndürün.

## Örnekler

- `existsInGrid(["ABCE", "SFCS", "ADEE"], "ABCCED")` → `true`
- `existsInGrid(["ABCE", "SFCS", "ADEE"], "ABCB")` → `false`

## Kısıtlamalar

- `1 <= grid.length, grid[i].length <= 6`
- Izgara dikdörtgendir ve yalnızca `A` ile `Z` arasındaki harfleri içerir.
- `1 <= word.length <= 15`; sözcük yalnızca `A` ile `Z` arasındaki harflerden oluşur.

## İpucu

Bir hücreyi seçtikten sonra komşularda devam etmeyi deneyin; başarısız dalı geri alın.

## Başlangıç Kodu

```cpp
#include <string>
#include <vector>
class Solution {
public:
  bool existsInGrid(std::vector<std::string>& grid, std::string word) { return false; }
};
```

```java
class Solution {
  public boolean existsInGrid(String[] grid, String word) { return false; }
}
```

```python
class Solution:
    def existsInGrid(self, grid, word):
        return False
```

---
slug: en-uzun-ardisik-seri
title: En Uzun Ardışık Seri
difficulty: orta
topics: [Hashleme, Diziler]
points: 30
---

## Problem

Bir envanterdeki etiket numaraları sırasız `codes` dizisindedir. Değerleri ardışık olan en uzun sayı grubunun uzunluğunu, dizide yan yana olma koşulu aramadan, `longestConsecutiveRun` ile bulun.

## Örnekler

- `longestConsecutiveRun([100, 4, 200, 1, 3, 2])` → `4`
- `longestConsecutiveRun([9, 1, 5])` → `1`

## Kısıtlamalar

- `0 <= codes.length <= 100000`
- `-1000000000 <= codes[i] <= 1000000000`

## İpucu

Bir diziyi yalnızca önceki sayısı kümede yoksa başlatın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int longestConsecutiveRun(std::vector<int>& codes) { return 0; }
};
```

```java
class Solution {
  public int longestConsecutiveRun(int[] codes) { return 0; }
}
```

```python
class Solution:
    def longestConsecutiveRun(self, codes):
        return 0
```

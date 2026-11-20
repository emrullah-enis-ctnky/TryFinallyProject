---
slug: aralik-sorgu-toplamlari
title: Aralık Sorgu Toplamları
difficulty: orta
topics: [Önek Toplamı]
points: 25
---

## Problem

Bir günlükteki çok sayıda aralık sorgusunun toplamını bulun. Her sorgu `[left, right]` biçimindedir ve iki uç da dahildir. `rangeQuerySums`, cevapları sorgu sırasıyla döndürür.

## Örnekler

- `rangeQuerySums([3, 1, 4, 2], [[0, 2], [1, 3]])` → `[8,7]`
- `rangeQuerySums([5], [[0, 0]])` → `[5]`

## Kısıtlamalar

- 1 <= nums.length <= 100000; 0 <= queries.length <= 100000; sorgular geçerlidir; -1000 <= nums[i] <= 1000.

## İpucu

Önce birikimli toplamlar hesaplayın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> rangeQuerySums(std::vector<int>& nums, std::vector<std::vector<int>>& queries) { return {}; }
};
```

```java
class Solution {
  public int[] rangeQuerySums(int[] nums, int[][] queries) { return {}; }
}
```

```python
class Solution:
    def rangeQuerySums(self, nums, queries):
        return {}
```

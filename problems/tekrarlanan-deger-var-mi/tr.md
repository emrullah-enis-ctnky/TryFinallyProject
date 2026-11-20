---
slug: tekrarlanan-deger-var-mi
title: Tekrarlanan Değer Var mı
difficulty: kolay
topics: [Hashleme, Diziler]
points: 15
---

## Problem

Bir tam sayı dizisi verilir. Herhangi bir değer en az iki kez geçiyorsa `true`, bütün değerler farklıysa `false` döndüren `containsDuplicate` metodunu yazın.

## Örnekler

- `containsDuplicate([4, 1, 4])` → `true`
- `containsDuplicate([2, 5, 8])` → `false`

## Kısıtlamalar

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## İpucu

Daha önce görülen değerleri hızlıca sorgulayabileceğiniz bir kümede tutun.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  bool containsDuplicate(std::vector<int>& nums) { return false; }
};
```

```java
class Solution {
  public boolean containsDuplicate(int[] nums) { return false; }
}
```

```python
class Solution:
    def containsDuplicate(self, nums):
        return False
```

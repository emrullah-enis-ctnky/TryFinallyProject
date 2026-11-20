---
slug: en-sik-gorulen-sayilar
title: En Sık Görülen Sayılar
difficulty: orta
topics: [Hashleme, Öncelik Kuyruğu, Sıralama]
points: 30
---

## Problem

Bir ölçüm günlüğündeki sayılar `values` dizisinde tutulur. En sık görülen `k` farklı sayıyı, görülme sıklığı azalan sırada döndürün. Sıklık eşitse küçük sayı önce gelmelidir.

## Örnekler

- `topFrequentValues([1, 1, 1, 2, 2, 3], 2)` → `[1, 2]`
- `topFrequentValues([4, 4, 5, 5], 2)` → `[4, 5]`

## Kısıtlamalar

- `1 <= values.length <= 100000`
- `1 <= k <=` dizideki farklı sayı adedi
- `-100000 <= values[i] <= 100000`

## İpucu

Önce her sayının kaç kez geçtiğini sayın, sonra sıklığa göre sıralayın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> topFrequentValues(std::vector<int>& values, int k) { return {}; }
};
```

```java
class Solution {
  public int[] topFrequentValues(int[] values, int k) { return new int[0]; }
}
```

```python
class Solution:
    def topFrequentValues(self, values, k):
        return []
```

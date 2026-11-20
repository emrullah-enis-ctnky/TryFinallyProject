---
slug: hedefe-ulasmak-icin-min-adim
title: Hedefe Minimum Adım
difficulty: orta
topics: [Açgözlü]
points: 30
---

## Problem

Her konum, en fazla kaç adım ileri atlanabileceğini belirtir. İlk konumdan son konuma ulaşmak için gereken en az sıçrama sayısını bulun; ulaşılamıyorsa -1 döndürün.

## Örnekler

- `minimumJumps([2, 3, 1, 1, 4])` → `2`
- `minimumJumps([3, 2, 1, 0, 4])` → `-1`

## Kısıtlamalar

- 1 <= jumps.length <= 100000; 0 <= jumps[i] <= 100000.

## İpucu

Ulaşılan en uzak sınırı ve bu sınırı genişletmek için gereken sıçramaları izleyin.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int minimumJumps(std::vector<int>& jumps) { return 0; }
};
```

```java
class Solution {
  public int minimumJumps(int[] jumps) { return 0; }
}
```

```python
class Solution:
    def minimumJumps(self, jumps):
        return 0
```

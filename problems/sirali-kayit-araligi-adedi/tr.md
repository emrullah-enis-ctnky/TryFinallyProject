---
slug: sirali-kayit-araligi-adedi
title: Sıralı Aralık Adedi
difficulty: orta
topics: [İkili Arama, Diziler]
points: 30
---

## Problem

Artan sırada sıralanmış `codes` dizisinde aynı kod birden fazla kez bulunabilir. `target` kodunun kaç kez geçtiğini `countCodeOccurrences` metoduyla bulun. Çözümünüz dizinin tamamını taramamalıdır.

## Örnekler

- `countCodeOccurrences([1, 2, 2, 2, 5], 2)` → `3`
- `countCodeOccurrences([1, 3, 5], 4)` → `0`

## Kısıtlamalar

- `0 <= codes.length <= 1000000`
- `codes` artan sırada sıralıdır.
- `-1000000000 <= codes[i], target <= 1000000000`

## İpucu

Hedefin ilk ve son görünebileceği konumları ikili aramayla bulun.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int countCodeOccurrences(std::vector<int>& codes, int target) { return 0; }
};
```

```java
class Solution {
  public int countCodeOccurrences(int[] codes, int target) { return 0; }
}
```

```python
class Solution:
    def countCodeOccurrences(self, codes, target):
        return 0
```

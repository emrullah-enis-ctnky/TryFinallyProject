---
slug: ortak-elemanlar
title: Ortak Tekil Değerler
difficulty: orta
topics: [Hashleme]
points: 25
---

## Problem

İki envanter listesindeki ortak değerleri bulun. `commonValues` her ortak değeri bir kez ve artan sırada döndürmelidir.

## Örnekler

- `commonValues([4, 2, 4, 1], [2, 4, 4, 7])` → `[2,4]`
- `commonValues([1, 3], [2, 4])` → `[]`

## Kısıtlamalar

- 0 <= first.length, second.length <= 100000; -100000 <= values <= 100000

## İpucu

Bir listedeki değerleri kümeye alın, ortakları bulun ve sonucu sıralayın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> commonValues(std::vector<int>& first, std::vector<int>& second) { return {}; }
};
```

```java
class Solution {
  public int[] commonValues(int[] first, int[] second) { return {}; }
}
```

```python
class Solution:
    def commonValues(self, first, second):
        return {}
```

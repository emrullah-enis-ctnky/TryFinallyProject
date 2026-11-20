---
slug: indekslerin-alternatif-toplami
title: Abwechselnde Indexsumme
difficulty: kolay
topics: [Arrays]
points: 10
---

## Problem

Ein Bericht speichert seine Werte der Reihe nach im Array `nums`. Schreibe `alternatingIndexSum`, das die Werte an nullbasierten geraden Indizes addiert und die Werte an ungeraden Indizes subtrahiert.

## Beispiele

- `alternatingIndexSum([8, 3, 5, 2])` → `8`
- `alternatingIndexSum([4, 7, 1])` → `-2`

## Einschränkungen

- `1 <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`

## Hinweis

Das Vorzeichen eines Werts hängt davon ab, ob sein Index gerade oder ungerade ist.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int alternatingIndexSum(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int alternatingIndexSum(int[] nums) { return 0; }
}
```

```python
class Solution:
    def alternatingIndexSum(self, nums):
        return 0
```

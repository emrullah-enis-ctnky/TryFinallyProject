---
slug: diziyi-saga-kaydir
title: Array nach rechts drehen
difficulty: kolay
topics: [Arrays, Zwei Zeiger]
points: 15
---

## Problem

Gegeben sind ein ganzzahliges Array und eine nichtnegative Zahl `k`. Schreibe `rotateRight`, sodass ein neues Array zurückgegeben wird, das um `k` Positionen nach rechts gedreht wurde. Ein Element hinter der letzten Position wird am Anfang fortgesetzt.

## Beispiele

- `rotateRight([1, 2, 3, 4, 5], 2)` → `[4, 5, 1, 2, 3]`
- `rotateRight([-1, 7], 3)` → `[7, -1]`

Im zweiten Beispiel entsprechen drei Drehungen bei einem Array der Länge zwei einer Drehung.

## Einschränkungen

- `1 <= nums.length <= 100000`
- `0 <= k <= 1000000000`
- `-100000 <= nums[i] <= 100000`

## Hinweis

Reduziere die Anzahl der Drehungen mithilfe der Arraylänge; das Umkehren von Teilbereichen kann helfen.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> rotateRight(std::vector<int>& nums, int k) { return {}; }
};
```

```java
class Solution {
  public int[] rotateRight(int[] nums, int k) { return new int[]{}; }
}
```

```python
class Solution:
    def rotateRight(self, nums, k):
        return []
```

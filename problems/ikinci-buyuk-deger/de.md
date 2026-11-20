---
slug: ikinci-buyuk-deger
title: Zweitgrößter Wert
difficulty: kolay
topics: [Arrays, Sortieren]
points: 15
---

## Problem

Ein ganzzahliges Array enthält garantiert mindestens zwei verschiedene Werte. Schreibe `secondLargest`, sodass der größte verschiedene Wert kleiner als das Maximum zurückgegeben wird. Wiederholte Werte zählen nur einmal.

## Beispiele

- `secondLargest([7, 2, 9, 9, 5])` → `7`
- `secondLargest([-4, -1, -9])` → `-4`

Im ersten Beispiel ist `9` der größte verschiedene Wert und `7` der nächstgrößere.

## Einschränkungen

- `2 <= nums.length <= 100000`
- Das Array enthält mindestens zwei verschiedene Werte.
- `-2147483648 <= nums[i] <= 2147483647`

## Hinweis

Du kannst die beiden größten verschiedenen Werte in einem Durchlauf verfolgen.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int secondLargest(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int secondLargest(int[] nums) { return 0; }
}
```

```python
class Solution:
    def secondLargest(self, nums):
        return 0
```

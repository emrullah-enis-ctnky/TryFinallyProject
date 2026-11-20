---
slug: hedef-toplamli-alt-kumeler
title: Teilmengen mit Zielsumme
difficulty: zor
topics: [Rückverfolgung, Arrays]
points: 40
---

## Problem

Gegeben sind ein Array positiver Ganzzahlen und ein `target`. Schreibe `countTargetSubsets`, sodass die Anzahl verschiedener Teilmengen mit Summe `target` zurückgegeben wird; jeder Index darf höchstens einmal verwendet werden. Verschiedene Indizes mit gleichen Werten ergeben verschiedene Auswahlen. Die leere Teilmenge hat die Summe `0`.

## Beispiele

- `countTargetSubsets([2, 3, 5, 6, 8, 10], 10)` → `3`
- `countTargetSubsets([1, 2, 3], 4)` → `1`

Im ersten Beispiel sind `[10]`, `[2, 8]` und `[2, 3, 5]` gültige Auswahlen.

## Einschränkungen

- `0 <= nums.length <= 20`
- `1 <= nums[i] <= 1000`
- `0 <= target <= 10000`

## Hinweis

Untersuche für jede Zahl sowohl die Auswahl als auch das Überspringen; brich einen Zweig ab, sobald seine Summe das Ziel überschreitet.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int countTargetSubsets(std::vector<int>& nums, int target) { return 0; }
};
```

```java
class Solution {
  public int countTargetSubsets(int[] nums, int target) { return 0; }
}
```

```python
class Solution:
    def countTargetSubsets(self, nums, target):
        return 0
```

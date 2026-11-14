---
slug: maksimum-alt-dizi-toplami
title: Maximale Teilsumme
difficulty: orta
topics: [Arrays, Dynamische Programmierung]
points: 30
---

## Problem

Gegeben ist ein Array aus ganzen Zahlen. Schreibe eine Methode `maxSubArray`, die unter allen nicht leeren Teilarrays aus **aufeinanderfolgenden** Elementen die größte Summe zurückgibt.

## Beispiele

- `maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])` → `6`
- `maxSubArray([1])` → `1`
- `maxSubArray([5, 4, -1, 7, 8])` → `23`

## Einschränkungen

- `1 ≤ Länge ≤ 100000`
- `-10000 ≤ nums[i] ≤ 10000`
- Alle Elemente dürfen negativ sein.

## Hinweis

Für jedes Element kannst du das vorherige Teilarray fortsetzen oder ein neues beginnen. Ein einziger Durchlauf genügt (Kadane-Algorithmus). Zwei verschachtelte Schleifen überschreiten bei großen Tests das Zeitlimit.

## Startcode

```cpp
#include <vector>

class Solution {
public:
  int maxSubArray(std::vector<int>& nums) {
    // Schreibe deine Lösung hier
    return 0;
  }
};
```

```java
class Solution {
  public int maxSubArray(int[] nums) {
    // Schreibe deine Lösung hier
    return 0;
  }
}
```

```python
class Solution:
    def maxSubArray(self, nums):
        # Schreibe deine Lösung hier
        return 0
```

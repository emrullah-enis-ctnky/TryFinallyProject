---
slug: en-kucuk-boleni-bul
title: Kleinsten Teiler Finden
difficulty: orta
topics: [Binäre Suche]
points: 25
---

## Problem

Teile jeden positiven Wert durch einen Teiler `d` und runde auf. Finde das kleinste positive `d`, sodass die Summe der gerundeten Werte höchstens `threshold` beträgt.

## Beispiele

- `smallestDivisor([1, 2, 5, 9], 6)` → `5`
- `smallestDivisor([2, 3, 5], 11)` → `1`

## Einschränkungen

- 1 <= nums.length <= 100000; 1 <= nums[i] <= 1000000; nums.length <= threshold <= 1000000000.

## Hinweis

Berechne die Summe für einen Teilerkandidaten und suche bei Erfolg nach kleineren Kandidaten.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int smallestDivisor(std::vector<int>& nums, int threshold) { return 0; }
};
```

```java
class Solution {
  public int smallestDivisor(int[] nums, int threshold) { return 0; }
}
```

```python
class Solution:
    def smallestDivisor(self, nums, threshold):
        return 0
```

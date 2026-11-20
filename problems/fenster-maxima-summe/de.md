---
slug: fenster-maxima-summe
title: Summe der Fenstermaxima
difficulty: orta
topics: [Gleitendes Fenster, Warteschlange & Deque]
points: 30
---

## Problem

Gegeben sind ein ganzzahliges Array und eine Fensterlänge `k`. Bestimme für jedes zusammenhängende Fenster der Länge `k` den größten Wert. Schreibe `sumWindowMaximums`, sodass die Summe dieser Höchstwerte zurückgegeben wird.

## Beispiele

- `sumWindowMaximums([1, 3, -1, -3, 5, 3, 6, 7], 3)` → `29`
- `sumWindowMaximums([4, 4, 4], 2)` → `8`

Im ersten Beispiel sind die Fenstermaxima `3, 3, 5, 5, 6, 7`; ihre Summe ist `29`.

## Einschränkungen

- `1 <= k <= nums.length <= 100000`
- `-10000 <= nums[i] <= 10000`
- Die Summe passt in eine vorzeichenbehaftete 64-Bit-Ganzzahl.

## Hinweis

Speichere Indizes in einer Doppelschlange und entferne Werte, die später kein Maximum mehr werden können.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  long long sumWindowMaximums(std::vector<int>& nums, int k) { return 0; }
};
```

```java
class Solution {
  public long sumWindowMaximums(int[] nums, int k) { return 0; }
}
```

```python
class Solution:
    def sumWindowMaximums(self, nums, k):
        return 0
```

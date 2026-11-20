---
slug: halka-devresinde-en-yuksek-toplam
title: Höchster Wert Im Kreis
difficulty: orta
topics: [Dynamische Programmierung 1D, Arrays]
points: 30
---

## Problem

Die Sicherheitsleuchten eines Gebäudes liegen kreisförmig und sind in `values` angegeben. Zwei benachbarte Leuchten dürfen nicht gleichzeitig eingeschaltet werden; auch die erste und letzte sind Nachbarn. Maximiere mit `maximumCircularLightValue` den Gesamtwert der eingeschalteten Leuchten.

## Beispiele

- `maximumCircularLightValue([2, 3, 2])` → `3`
- `maximumCircularLightValue([1, 2, 3, 1])` → `4`

## Einschränkungen

- `1 <= values.length <= 100000`
- `0 <= values[i] <= 1000000000`

## Hinweis

Betrachte getrennt die Fälle, in denen die erste Leuchte gewählt wird und in denen sie nicht gewählt wird.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  long long maximumCircularLightValue(std::vector<int>& values) { return 0; }
};
```

```java
class Solution {
  public long maximumCircularLightValue(int[] values) { return 0; }
}
```

```python
class Solution:
    def maximumCircularLightValue(self, values):
        return 0
```

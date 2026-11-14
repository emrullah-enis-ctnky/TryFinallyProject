---
slug: two-sum
title: Zwei Summanden (Two Sum)
difficulty: kolay
topics: [Arrays, Hash-Maps]
points: 20
---

## Problem

Gegeben sind ein Zahlenarray und ein Zielwert. Schreibe eine Methode `twoSum`, die die **Indizes** zweier verschiedener Elemente zurückgibt, deren Summe dem Zielwert entspricht. Für jede Eingabe gibt es genau eine Lösung; dasselbe Element darf nicht zweimal verwendet werden. Gib zuerst den kleineren Index zurück.

## Beispiele

- `twoSum([2, 7, 11, 15], 9)` → `[0, 1]`
- `twoSum([3, 2, 4], 6)` → `[1, 2]`

## Einschränkungen

- Das Array enthält mindestens zwei Elemente.
- Arrayelemente und Zielwert sind ganze Zahlen.
- Gib die Indizes und nicht die Werte zurück.
- Gib die beiden Indizes aufsteigend sortiert zurück.

## Hinweis

Berechne für jede Zahl den Ergänzungswert, der zum Zielwert fehlt. Eine Hash-Map kann die Indizes der bereits gesehenen Zahlen speichern.

## Startcode

```cpp
#include <vector>

class Solution {
public:
  std::vector<int> twoSum(std::vector<int>& nums, int target) {
    // Schreibe deine Lösung hier
    return {};
  }
};
```

```java
class Solution {
  public int[] twoSum(int[] nums, int target) {
    // Schreibe deine Lösung hier
    return new int[]{};
  }
}
```

```python
class Solution:
    def twoSum(self, nums, target):
        # Schreibe deine Lösung hier
        return []
```

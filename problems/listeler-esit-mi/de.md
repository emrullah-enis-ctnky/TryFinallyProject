---
slug: listeler-esit-mi
title: Sind die Listen gleich?
difficulty: kolay
topics: [Arrays]
points: 10
---

## Problem

Gegeben sind zwei Ganzzahllisten. Schreibe eine Methode `areListsEqual`, die `true` zurückgibt, wenn beide Listen gleich lang sind und dieselben Elemente in derselben Reihenfolge enthalten, andernfalls `false`.

## Beispiele

- `areListsEqual([1, 2, 3], [1, 2, 3])` → `true`
- `areListsEqual([1, 2], [2, 1])` → `false`

## Einschränkungen

- Die Listen enthalten Ganzzahlen.
- Die Listen dürfen leer sein.
- Die Reihenfolge der Elemente ist wichtig.

## Hinweis

Vergleiche zuerst die Längen der Listen und anschließend die Elemente an denselben Positionen.

## Startcode

```cpp
#include <vector>

class Solution {
public:
  bool areListsEqual(const std::vector<int>& list1, const std::vector<int>& list2) {
    // Schreibe deine Lösung hier
    return false;
  }
};
```

```java
class Solution {
  public boolean areListsEqual(int[] list1, int[] list2) {
    // Schreibe deine Lösung hier
    return false;
  }
}
```

```python
class Solution:
    def areListsEqual(self, list1, list2):
        # Schreibe deine Lösung hier
        return False
```

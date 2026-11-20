---
slug: renkleri-sirala
title: Teilefarben Sortieren
difficulty: orta
topics: [Sortieren, Zwei Zeiger]
points: 25
---

## Problem

Teile eines Fließbands tragen die Kennzeichnung `0`, `1` oder `2`. Schreibe `sortPartColors`, das ein neues Array mit aufsteigend sortierten Kennzeichnungen zurückgibt. Versuche, die Aufgabe in einem Durchlauf ohne allgemeines vergleichsbasiertes Sortieren zu lösen.

## Beispiele

- `sortPartColors([2, 0, 2, 1, 1, 0])` → `[0, 0, 1, 1, 2, 2]`
- `sortPartColors([1, 0])` → `[0, 1]`

## Einschränkungen

- `0 <= colors.length <= 100000`
- `colors[i]` ist nur `0`, `1` oder `2`.

## Hinweis

Verfolge die Grenzen dreier Bereiche und verschiebe kleine und große Werte an die Enden.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> sortPartColors(std::vector<int>& colors) { return {}; }
};
```

```java
class Solution {
  public int[] sortPartColors(int[] colors) { return new int[0]; }
}
```

```python
class Solution:
    def sortPartColors(self, colors):
        return []
```

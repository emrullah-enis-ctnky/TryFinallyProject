---
slug: dizi-kodlu-agac-derinligi
title: Baumhöhe im Array
difficulty: orta
topics: [Bäume]
points: 30
---

## Problem

Ein Binärbaum wird in einem Array kodiert, dessen Wurzel an Index `0` liegt. Die Kinder des Knotens an Index `i` liegen bei `2 * i + 1` und `2 * i + 2`. Der Wert `-1` kennzeichnet einen fehlenden Knoten; echte Knotenwerte sind nichtnegativ. Schreibe `treeHeight`, sodass die Anzahl der Knoten auf dem längsten Pfad von der Wurzel zu einem Blatt zurückgegeben wird. Der Baum darf leer sein.

## Beispiele

- `treeHeight([5, 3, 8, 1, -1, 7, 9])` → `3`
- `treeHeight([1, 2, -1, 3])` → `3`

Im zweiten Beispiel fehlt das rechte Kind, aber auf der linken Seite liegen bis zum Knoten `3` drei Ebenen.

## Einschränkungen

- `0 <= levelOrder.length <= 10000`
- Jeder Wert ist `-1` oder liegt zwischen `0` und `100000`.
- Jeder vorhandene Knoten hat auch einen vorhandenen Elternknoten.
- Fehlt die Wurzel, ist der Baum leer.

## Hinweis

Speichere beim Besuch der Kinder jeweils den Knotenindex zusammen mit seiner Tiefe.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  int treeHeight(std::vector<int>& levelOrder) { return 0; }
};
```

```java
class Solution {
  public int treeHeight(int[] levelOrder) { return 0; }
}
```

```python
class Solution:
    def treeHeight(self, levelOrder):
        return 0
```

---
slug: ders-sirasi-mumkun-mu
title: Sind Alle Kurse Machbar
difficulty: orta
topics: [Graphen, Warteschlange & Deque]
points: 30
---

## Problem

Ein Studienplan enthält `n` Kurse. Das Paar `[course, prerequisite]` in `prerequisites` bedeutet, dass der Voraussetzungskurs zuerst abgeschlossen werden muss. Bestimme mit `canFinishCourses`, ob alle Kurse abgeschlossen werden können.

## Beispiele

- `canFinishCourses(3, [[1, 0], [2, 1]])` → `true`
- `canFinishCourses(2, [[1, 0], [0, 1]])` → `false`

## Einschränkungen

- `0 <= n <= 1000`
- `0 <= prerequisites.length <= 10000`
- Die Kursnummern jedes Paares liegen zwischen `0` und `n - 1`.

## Hinweis

Schließe zuerst Kurse ohne offene Voraussetzungen ab und gib danach ihre Folgekursen frei.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  bool canFinishCourses(int n, std::vector<std::vector<int>>& prerequisites) { return false; }
};
```

```java
class Solution {
  public boolean canFinishCourses(int n, int[][] prerequisites) { return false; }
}
```

```python
class Solution:
    def canFinishCourses(self, n, prerequisites):
        return False
```

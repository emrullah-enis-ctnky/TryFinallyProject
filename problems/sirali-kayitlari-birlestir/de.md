---
slug: sirali-kayitlari-birlestir
title: Sortierte Listen Zusammenführen
difficulty: orta
topics: [Arrays, Zwei Zeiger, Sortieren]
points: 30
---

## Problem

Produktcodes in zwei Lagern liegen jeweils aufsteigend sortiert vor. Schreibe `mergeSortedRecords`, das sie ohne erneutes Sortieren zu einem aufsteigenden Array zusammenführt. Kommt ein Code in beiden Listen vor, müssen beide Exemplare enthalten sein.

## Beispiele

- `mergeSortedRecords([1, 4, 8], [2, 4, 9])` → `[1, 2, 4, 4, 8, 9]`
- `mergeSortedRecords([], [-3, 0])` → `[-3, 0]`

## Einschränkungen

- Beide Arrays sind aufsteigend sortiert.
- `0 <= a.length, b.length <= 100000`
- `-1000000000 <= a[i], b[i] <= 1000000000`

## Hinweis

Füge jeweils den kleineren der nächsten verfügbaren Werte aus den beiden Arrays hinzu.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  std::vector<int> mergeSortedRecords(std::vector<int>& a, std::vector<int>& b) { return {}; }
};
```

```java
class Solution {
  public int[] mergeSortedRecords(int[] a, int[] b) { return new int[0]; }
}
```

```python
class Solution:
    def mergeSortedRecords(self, a, b):
        return []
```

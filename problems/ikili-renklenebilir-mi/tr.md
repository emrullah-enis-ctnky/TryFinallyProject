---
slug: ikili-renklenebilir-mi
title: İki Renklenebilir mi
difficulty: orta
topics: [Graflar]
points: 30
---

## Problem

Bir yönsüz grafın düğümlerini, komşu düğümler farklı gruplarda kalacak şekilde iki gruba ayırmanın mümkün olup olmadığını belirleyin. `graph[i]`, `i` düğümünün komşularını listeler.

## Örnekler

- `isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]])` → `true`
- `isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]])` → `false`

## Kısıtlamalar

- 1 <= graph.length <= 1000; kenarlar çift yönlü ve kendine döngü içermez.

## İpucu

Her bağlı bileşende bir renkten başlayıp komşulara karşıt renk atayın.

## Başlangıç Kodu

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool isBipartite(std::vector<std::vector<int>>& graph) { return false; }
};
```

```java
class Solution {
  public boolean isBipartite(int[][] graph) { return false; }
}
```

```python
class Solution:
    def isBipartite(self, graph):
        return false
```

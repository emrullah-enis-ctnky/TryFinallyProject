---
slug: ders-sirasi-mumkun-mu
title: Ders Sırası Mümkün mü
difficulty: orta
topics: [Graflar, Kuyruk & Deque]
points: 30
---

## Problem

Bir eğitim planında `n` ders vardır. `prerequisites` içindeki `[course, prerequisite]` çifti, `course` dersinden önce `prerequisite` dersinin bitmesi gerektiğini belirtir. Tüm derslerin tamamlanmasının mümkün olup olmadığını `canFinishCourses` ile belirleyin.

## Örnekler

- `canFinishCourses(3, [[1, 0], [2, 1]])` → `true`
- `canFinishCourses(2, [[1, 0], [0, 1]])` → `false`

## Kısıtlamalar

- `0 <= n <= 1000`
- `0 <= prerequisites.length <= 10000`
- Her çiftteki ders numaraları `0` ile `n - 1` arasındadır.

## İpucu

Ön koşulu kalmayan dersleri sırayla tamamlayıp sonraki dersleri serbest bırakın.

## Başlangıç Kodu

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

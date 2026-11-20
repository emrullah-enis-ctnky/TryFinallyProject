---
slug: dizi-kodlu-agac-derinligi
title: Kodlu Ağaç Derinliği
difficulty: orta
topics: [Ağaçlar]
points: 30
---

## Problem

Bir ikili ağaç, kökü `0` indisinde olacak şekilde diziyle kodlanır. `i` indisindeki düğümün çocukları `2 * i + 1` ve `2 * i + 2` indislerindedir. `-1` değeri olmayan düğümü belirtir; gerçek düğüm değerleri negatif değildir. Boş olmayan bu ağacın kökten en uzak yaprağa kadar olan düğüm sayısını döndüren `treeHeight` metodunu yazın.

## Örnekler

- `treeHeight([5, 3, 8, 1, -1, 7, 9])` → `3`
- `treeHeight([1, 2, -1, 3])` → `3`

İkinci örnekte sağ çocuk eksik olsa da sol taraftaki `3` düğümüne kadar üç seviye bulunur.

## Kısıtlamalar

- `0 <= levelOrder.length <= 10000`
- `levelOrder[i]` değeri `-1` veya `0` ile `100000` arasındadır.
- Var olan her düğümün ebeveyni de vardır.
- Kök yoksa ağaç boştur.

## İpucu

Bir düğümün indisini ve derinliğini birlikte tutarak çocuklarını sırayla gezebilirsiniz.

## Başlangıç Kodu

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

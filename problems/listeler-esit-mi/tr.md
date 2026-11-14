---
slug: listeler-esit-mi
title: Listeler Eşit mi?
difficulty: kolay
topics: [Diziler]
points: 10
---

## Problem

İki tam sayı listesi verilir. İki liste aynı uzunluktaysa ve aynı sırada aynı elemanları içeriyorsa `true`, aksi halde `false` döndüren `areListsEqual` metodunu yazın.

## Örnekler

- `areListsEqual([1, 2, 3], [1, 2, 3])` → `true`
- `areListsEqual([1, 2], [2, 1])` → `false`

## Kısıtlamalar

- Listeler tam sayılardan oluşur.
- Listeler boş olabilir.
- Elemanların sırası önemlidir.

## İpucu

Önce listelerin uzunluklarını, ardından aynı konumdaki elemanları karşılaştırın.

## Başlangıç Kodu

```cpp
#include <vector>

class Solution {
public:
  bool areListsEqual(const std::vector<int>& list1, const std::vector<int>& list2) {
    // Çözümünüzü buraya yazın
    return false;
  }
};
```

```java
class Solution {
  public boolean areListsEqual(int[] list1, int[] list2) {
    // Çözümünüzü buraya yazın
    return false;
  }
}
```

```python
class Solution:
    def areListsEqual(self, list1, list2):
        # Çözümünüzü buraya yazın
        return False
```

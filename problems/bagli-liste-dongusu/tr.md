---
slug: bagli-liste-dongusu
title: Bağlı Liste Döngüsü
difficulty: orta
topics: [Bağlı Listeler]
points: 25
---

## Problem

Bağlı bir listenin düğümleri `0`'dan başlayarak numaralandırılır. `next[i]`, `i` düğümünden sonraki düğümün indisini, listenin sonu için `-1` değerini tutar. `head` başlangıç indisi verildiğinde, bu indisten izlenen bağlantılar bir döngüye giriyorsa `true`, aksi halde `false` döndüren `hasListCycle` metodunu yazın.

## Örnekler

- `hasListCycle([1, 2, 3, 1], 0)` → `true`
- `hasListCycle([1, 2, -1], 0)` → `false`

İlk örnekte bağlantılar `0 → 1 → 2 → 3 → 1` biçiminde ilerler ve tekrar eder.

## Kısıtlamalar

- `0 <= next.length <= 100000`
- `head` değeri `-1` veya geçerli bir düğüm indisidir.
- `next[i]` değeri `-1` veya geçerli bir düğüm indisidir.

## İpucu

Bağlantılarda biri bir adım, diğeri iki adım ilerleyen iki gösterge kullanın.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  bool hasListCycle(std::vector<int>& next, int head) { return false; }
};
```

```java
class Solution {
  public boolean hasListCycle(int[] next, int head) { return false; }
}
```

```python
class Solution:
    def hasListCycle(self, next, head):
        return False
```

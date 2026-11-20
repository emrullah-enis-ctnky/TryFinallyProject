---
slug: diziyi-sola-dondur
title: Array Nach Links Drehen
difficulty: kolay
topics: [Arrays, Zwei Zeiger]
points: 15
---

## Problem

Eine Musik-Playlist wird zyklisch ab ihrem Anfang neu angeordnet. `rotateLeft` soll ein neues Array zurückgeben, das um `k` Positionen nach links gedreht wurde. `k` darf größer als die Arraylänge sein.

## Beispiele

- `rotateLeft([1, 2, 3, 4, 5], 2)` → `[3, 4, 5, 1, 2]`
- `rotateLeft([7, 8], 4)` → `[7, 8]`

## Einschränkungen

- `0 <= nums.length <= 100000`
- `0 <= k <= 1000000000`

## Hinweis

Nutze die Arraylänge, um die tatsächliche Drehungszahl zu bestimmen.

## Startcode

```cpp
#include <vector>
#include <string>
class Solution {
public:
  std::vector<int> rotateLeft(std::vector<int>& nums, int k) { return {}; }
};
```

```java
class Solution {
  public int[] rotateLeft(int[] nums, int k) { return new int[0]; }
}
```

```python
class Solution:
    def rotateLeft(self, nums, k):
        return []
```

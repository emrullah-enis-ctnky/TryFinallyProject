---
slug: digerleri-haric-carpim
title: Produkte Ohne Eigenen Wert
difficulty: orta
topics: [Präfixsumme]
points: 25
---

## Problem

Berechne für jede Station einer Produktionslinie das Produkt aller anderen Werte. Gib das Ergebnisarray ohne Division zurück.

## Beispiele

- `productsExceptSelf([1, 2, 3, 4])` → `[24,12,8,6]`
- `productsExceptSelf([0, 3, 0])` → `[0,0,0]`

## Einschränkungen

- 2 <= nums.length <= 10; -10 <= nums[i] <= 10; alle Produkte passen in int.

## Hinweis

Kombiniere für jeden Index die Produkte links und rechts.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> productsExceptSelf(std::vector<int>& nums) { return []; }
};
```

```java
class Solution {
  public int[] productsExceptSelf(int[] nums) { return []; }
}
```

```python
class Solution:
    def productsExceptSelf(self, nums):
        return []
```

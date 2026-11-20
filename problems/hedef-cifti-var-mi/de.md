---
slug: hedef-cifti-var-mi
title: Zielpaar Finden
difficulty: kolay
topics: [Zwei Zeiger]
points: 15
---

## Problem

Bestimme in einer aufsteigend sortierten Preisliste, ob zwei verschiedene Artikel zusammen das Budget ergeben. `hasPairSum` gibt in diesem Fall true zurück.

## Beispiele

- `hasPairSum([1, 3, 6, 9], 10)` → `true`
- `hasPairSum([2, 4, 8], 7)` → `false`

## Einschränkungen

- 0 <= nums.length <= 100000; nums ist aufsteigend sortiert; Werte und Ziel passen in int.

## Hinweis

Beginne an beiden Enden und vergleiche die Summe.

## Startcode

```cpp
#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  bool hasPairSum(std::vector<int>& nums, int target) { return False; }
};
```

```java
class Solution {
  public boolean hasPairSum(int[] nums, int target) { return False; }
}
```

```python
class Solution:
    def hasPairSum(self, nums, target):
        return False
```

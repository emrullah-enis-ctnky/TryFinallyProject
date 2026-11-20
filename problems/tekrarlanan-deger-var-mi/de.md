---
slug: tekrarlanan-deger-var-mi
title: Doppelter Wert
difficulty: kolay
topics: [Hashing, Arrays]
points: 15
---

## Problem

Gegeben ist ein ganzzahliges Array. Schreibe `containsDuplicate`, sodass `true` zurückgegeben wird, wenn ein Wert mindestens zweimal vorkommt, andernfalls `false`.

## Beispiele

- `containsDuplicate([4, 1, 4])` → `true`
- `containsDuplicate([2, 5, 8])` → `false`

## Einschränkungen

- `0 <= nums.length <= 100000`
- `-100000 <= nums[i] <= 100000`

## Hinweis

Speichere bereits gesehene Werte in einer Menge, damit du sie schnell prüfen kannst.

## Startcode

```cpp
#include <vector>
class Solution {
public:
  bool containsDuplicate(std::vector<int>& nums) { return false; }
};
```

```java
class Solution {
  public boolean containsDuplicate(int[] nums) { return false; }
}
```

```python
class Solution:
    def containsDuplicate(self, nums):
        return False
```

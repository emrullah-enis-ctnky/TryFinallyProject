---
slug: bir-sayisindaki-bitler
title: Eins-Bits zählen
difficulty: kolay
topics: [Bitmanipulation]
points: 15
---

## Problem

Gegeben ist eine nichtnegative Ganzzahl `number`. Schreibe `countSetBits`, sodass die Anzahl der `1`-Bits in ihrer Binärdarstellung zurückgegeben wird.

## Beispiele

- `countSetBits(13)` → `3`, denn die Binärdarstellung von `13` ist `1101`.
- `countSetBits(8)` → `1`

## Einschränkungen

- `0 <= number <= 2147483647`

## Hinweis

Mit `number & (number - 1)` kannst du in jedem Schritt das niedrigste gesetzte Bit löschen.

## Startcode

```cpp
class Solution {
public:
  int countSetBits(int number) { return 0; }
};
```

```java
class Solution {
  public int countSetBits(int number) { return 0; }
}
```

```python
class Solution:
    def countSetBits(self, number):
        return 0
```

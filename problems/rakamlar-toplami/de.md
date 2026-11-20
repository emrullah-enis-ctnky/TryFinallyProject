---
slug: rakamlar-toplami
title: Ziffernsumme berechnen
difficulty: kolay
topics: [Rekursion]
points: 10
---

## Problem

Gegeben ist eine nichtnegative Ganzzahl. Schreibe `sumDigits`, sodass die Summe ihrer Dezimalziffern zurückgegeben wird. Löse die Aufgabe, indem du die Methode mit einer kleineren Zahl erneut aufrufst. Die Ziffernsumme von `0` ist `0`.

## Beispiele

- `sumDigits(472)` → `13`
- `sumDigits(0)` → `0`

## Einschränkungen

- `0 <= number <= 2147483647`

## Hinweis

Trenne die letzte Ziffer mit `number % 10` ab und rufe die Methode für die übrigen Ziffern erneut auf.

## Startcode

```cpp
class Solution {
public:
  int sumDigits(int number) { return 0; }
};
```

```java
class Solution {
  public int sumDigits(int number) { return 0; }
}
```

```python
class Solution:
    def sumDigits(self, number):
        return 0
```

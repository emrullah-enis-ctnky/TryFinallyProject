---
slug: fizz-buzz
title: FizzBuzz
difficulty: kolay
topics: [Schleifen, Bedingungen]
points: 10
---

## Problem

Gegeben ist eine ganze Zahl `n`. Schreibe eine Methode `fizzBuzz`, die für jede Zahl von 1 bis `n` (einschließlich) einen Text in eine Liste einfügt und diese Liste zurückgibt:

- `"FizzBuzz"`, wenn die Zahl durch 3 und durch 5 teilbar ist
- `"Fizz"`, wenn sie nur durch 3 teilbar ist
- `"Buzz"`, wenn sie nur durch 5 teilbar ist
- sonst die Zahl selbst als Text (z. B. `"7"`)

## Beispiele

- `fizzBuzz(3)` → `["1", "2", "Fizz"]`
- `fizzBuzz(5)` → `["1", "2", "Fizz", "4", "Buzz"]`

## Einschränkungen

- `1 ≤ n ≤ 10000`
- Die Liste muss genau `n` Elemente enthalten.

## Hinweis

Mit dem Operator `%` (Modulo) kannst du prüfen, ob eine Zahl teilbar ist. Prüfe zuerst die Teilbarkeit durch 15.

## Startcode

```cpp
#include <vector>
#include <string>

class Solution {
public:
  std::vector<std::string> fizzBuzz(int n) {
    // Schreibe deine Lösung hier
    return {};
  }
};
```

```java
class Solution {
  public List<String> fizzBuzz(int n) {
    // Schreibe deine Lösung hier
    return new ArrayList<>();
  }
}
```

```python
class Solution:
    def fizzBuzz(self, n):
        # Schreibe deine Lösung hier
        return []
```

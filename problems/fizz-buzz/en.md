---
slug: fizz-buzz
title: Fizz Buzz
difficulty: kolay
topics: [Loops, Conditionals]
points: 10
---

## Problem

Given an integer `n`, write a `fizzBuzz` method that returns a list with one string for every number from 1 to `n` (inclusive):

- `"FizzBuzz"` if the number is divisible by both 3 and 5
- `"Fizz"` if it is divisible only by 3
- `"Buzz"` if it is divisible only by 5
- otherwise the number itself as a string (e.g. `"7"`)

## Examples

- `fizzBuzz(3)` → `["1", "2", "Fizz"]`
- `fizzBuzz(5)` → `["1", "2", "Fizz", "4", "Buzz"]`

## Constraints

- `1 ≤ n ≤ 10000`
- The list must contain exactly `n` elements.

## Hint

Use the `%` (modulo) operator to check divisibility. Remember to check divisibility by 15 first.

## Starter Code

```cpp
#include <vector>
#include <string>

class Solution {
public:
  std::vector<std::string> fizzBuzz(int n) {
    // Write your solution here
    return {};
  }
};
```

```java
class Solution {
  public List<String> fizzBuzz(int n) {
    // Write your solution here
    return new ArrayList<>();
  }
}
```

```python
class Solution:
    def fizzBuzz(self, n):
        # Write your solution here
        return []
```

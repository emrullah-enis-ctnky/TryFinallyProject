---
slug: fizz-buzz
title: FizzBuzz
difficulty: kolay
topics: [Döngüler, Koşullar]
points: 10
---

## Problem

Bir `n` tam sayısı verilir. 1'den `n`'e kadar (n dahil) her sayı için listeye bir metin ekleyip bu listeyi döndüren `fizzBuzz` metodunu yazın:

- Sayı hem 3'e hem 5'e bölünüyorsa `"FizzBuzz"`
- Sadece 3'e bölünüyorsa `"Fizz"`
- Sadece 5'e bölünüyorsa `"Buzz"`
- Hiçbiri değilse sayının kendisi metin olarak (ör. `"7"`)

## Örnekler

- `fizzBuzz(3)` → `["1", "2", "Fizz"]`
- `fizzBuzz(5)` → `["1", "2", "Fizz", "4", "Buzz"]`

## Kısıtlamalar

- `1 ≤ n ≤ 10000`
- Liste tam olarak `n` eleman içermelidir.

## İpucu

Bir sayının başka bir sayıya bölünüp bölünmediğini `%` (mod) operatörüyle anlayabilirsiniz. Önce 15'e bölünmeyi kontrol etmeyi unutmayın.

## Başlangıç Kodu

```cpp
#include <vector>
#include <string>

class Solution {
public:
  std::vector<std::string> fizzBuzz(int n) {
    // Çözümünüzü buraya yazın
    return {};
  }
};
```

```java
class Solution {
  public List<String> fizzBuzz(int n) {
    // Çözümünüzü buraya yazın
    return new ArrayList<>();
  }
}
```

```python
class Solution:
    def fizzBuzz(self, n):
        # Çözümünüzü buraya yazın
        return []
```

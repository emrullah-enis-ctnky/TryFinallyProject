---
slug: ikinci-buyuk-deger
title: İkinci Büyük Değer
difficulty: kolay
topics: [Diziler, Sıralama]
points: 15
---

## Problem

Bir tam sayı dizisinde en az iki farklı değer olduğu garanti edilir. En büyük değerden **küçük olan en büyük farklı değeri** döndüren `secondLargest` metodunu yazın. Tekrar eden değerler ayrı değer sayılmaz.

## Örnekler

- `secondLargest([7, 2, 9, 9, 5])` → `7`
- `secondLargest([-4, -1, -9])` → `-4`

İlk örnekte en büyük farklı değer `9`, ondan sonraki `7`'dir.

## Kısıtlamalar

- `2 <= nums.length <= 100000`
- Dizide en az iki farklı değer bulunur.
- `-2147483648 <= nums[i] <= 2147483647`

## İpucu

En büyük iki farklı değeri tek geçişte takip edebilirsiniz.

## Başlangıç Kodu

```cpp
#include <vector>
class Solution {
public:
  int secondLargest(std::vector<int>& nums) { return 0; }
};
```

```java
class Solution {
  public int secondLargest(int[] nums) { return 0; }
}
```

```python
class Solution:
    def secondLargest(self, nums):
        return 0
```

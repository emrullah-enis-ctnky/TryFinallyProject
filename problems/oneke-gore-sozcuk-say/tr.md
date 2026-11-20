---
slug: oneke-gore-sozcuk-say
title: Önek Sözcük Sayımı
difficulty: orta
topics: [Önek Ağacı]
points: 30
---

## Problem

Küçük İngilizce harflerden oluşan bir sözcük listesi ve önek listesi verilir. Her önek için sözcük listesindeki o önekle başlayan girişlerin sayısını, öneklerin sırasını koruyarak döndüren `prefixWordCounts` metodunu yazın. Tekrarlanan sözcük girişleri ayrı ayrı sayılır; boş önek her sözcüğün öneğidir.

## Örnekler

- `prefixWordCounts(["app", "apple", "ape", "bat"], ["ap", "app", "bat", "cat", ""])` → `[3, 2, 1, 0, 4]`
- `prefixWordCounts(["go", "go", "gone"], ["g", "gone"])` → `[3, 1]`

## Kısıtlamalar

- `0 <= words.length, prefixes.length <= 10000`
- Her iki listedeki bütün metinlerin toplam uzunluğu en fazla `20000`'dir.
- Metinler yalnızca `a`–`z` harfleri içerir.

## İpucu

Her sözcüğün karakterlerini bir önek ağacına eklerken, geçtiği her düğümdeki sözcük sayısını artırın.

## Başlangıç Kodu

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> prefixWordCounts(std::vector<std::string>& words, std::vector<std::string>& prefixes) { return {}; }
};
```

```java
class Solution {
  public int[] prefixWordCounts(String[] words, String[] prefixes) { return new int[]{}; }
}
```

```python
class Solution:
    def prefixWordCounts(self, words, prefixes):
        return []
```

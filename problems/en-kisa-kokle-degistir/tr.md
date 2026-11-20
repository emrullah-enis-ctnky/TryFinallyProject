---
slug: en-kisa-kokle-degistir
title: En Kısa Köklerle Değiştir
difficulty: orta
topics: [Önek Ağacı, Metin]
points: 30
---

## Problem

Bir sözlükteki kökler `roots` dizisinde, boşluklarla ayrılmış bir cümle de `sentence` olarak verilir. Her sözcüğü, sözlükte önek olarak bulunan en kısa kökle değiştirin; eşleşme yoksa sözcüğü koruyun. Sonucu `replaceWithShortestRoots` ile döndürün.

## Örnekler

- `replaceWithShortestRoots(["cat", "bat", "rat"], "the cattle was rattled by the battery")` → `"the cat was rat by the bat"`
- `replaceWithShortestRoots(["a"], "a aa")` → `"a a"`

## Kısıtlamalar

- `0 <= roots.length <= 1000`
- Her kök ve sözcük küçük İngilizce harflerden oluşur.
- Sözcükler tek boşlukla ayrılır; cümle boş olabilir ve uzunluğu `100000`'i aşmaz.

## İpucu

Sözcüğün harflerini soldan sağa izleyin ve ilk tamamlanmış kök düğümünde durun.

## Başlangıç Kodu

```cpp
#include <string>
#include <vector>
class Solution {
public:
  std::string replaceWithShortestRoots(std::vector<std::string>& roots, std::string sentence) { return ""; }
};
```

```java
class Solution {
  public String replaceWithShortestRoots(String[] roots, String sentence) { return ""; }
}
```

```python
class Solution:
    def replaceWithShortestRoots(self, roots, sentence):
        return ""
```

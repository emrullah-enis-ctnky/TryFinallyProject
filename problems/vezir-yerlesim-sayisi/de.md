---
slug: vezir-yerlesim-sayisi
title: Damenanordnungen Zählen
difficulty: zor
topics: [Rückverfolgung, Bitmanipulation]
points: 50
---

## Problem

Platziere `n` Damen auf einem Schachbrett der Größe `n x n`, sodass sich keine zwei eine Zeile, Spalte oder Diagonale teilen. Ermittle mit `countQueenArrangements` die Anzahl gültiger Anordnungen.

## Beispiele

- `countQueenArrangements(4)` → `2`
- `countQueenArrangements(1)` → `1`

## Einschränkungen

- `1 <= n <= 14`

## Hinweis

Probiere sichere Spalten Zeile für Zeile; jede Wahl verändert die verfügbaren Diagonalen darunter.

## Startcode

```cpp
class Solution {
public:
  int countQueenArrangements(int n) { return 0; }
};
```

```java
class Solution {
  public int countQueenArrangements(int n) { return 0; }
}
```

```python
class Solution:
    def countQueenArrangements(self, n):
        return 0
```

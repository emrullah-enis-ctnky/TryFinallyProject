---
slug: en-cok-toplanti
title: Attend Maximum Meetings
difficulty: orta
topics: [Greedy, Intervals]
points: 25
---

## Problem

You are given meeting intervals where each row is `[start, end]`. You may attend one meeting ending at the same time another begins. Write `maxMeetings` to return the greatest number of non-overlapping meetings you can attend.

## Examples

- `maxMeetings([[1, 3], [2, 4], [3, 5]])` → `2`
- `maxMeetings([[0, 1], [1, 2], [2, 3]])` → `3`

In the first example, the meetings `[1, 3]` and `[3, 5]` can both be selected.

## Constraints

- `0 <= meetings.length <= 100000`
- For each meeting, `-100000 <= start < end <= 100000`.

## Hint

To fit as many meetings as possible, choose the one that ends earliest at each step.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int maxMeetings(std::vector<std::vector<int>>& meetings) { return 0; }
};
```

```java
class Solution {
  public int maxMeetings(int[][] meetings) { return 0; }
}
```

```python
class Solution:
    def maxMeetings(self, meetings):
        return 0
```

---
slug: toplanti-oda-sayisi
title: Minimum Meeting Rooms
difficulty: orta
topics: [Intervals, Sorting, Greedy]
points: 30
---

## Problem

Meeting time ranges are given as `[start, end]`. A meeting may begin at the exact time another meeting ends. Write `minimumMeetingRooms` to find the fewest rooms needed to host every meeting.

## Examples

- `minimumMeetingRooms([[0, 30], [5, 10], [15, 20]])` → `2`
- `minimumMeetingRooms([[1, 2], [2, 3]])` → `1`

## Constraints

- `0 <= meetings.length <= 100000`
- `0 <= meetings[i][0] < meetings[i][1] <= 1000000000`

## Hint

Sort start and end times separately and track which event happens next.

## Starter Code

```cpp
#include <vector>
class Solution {
public:
  int minimumMeetingRooms(std::vector<std::vector<int>>& meetings) { return 0; }
};
```

```java
class Solution {
  public int minimumMeetingRooms(int[][] meetings) { return 0; }
}
```

```python
class Solution:
    def minimumMeetingRooms(self, meetings):
        return 0
```
